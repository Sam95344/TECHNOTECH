import React, { useState } from 'react';

const defaultCode = `// Write your JavaScript code here
console.log('Hello, TechNotech!');`;

const CodeCompiler = () => {
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState([]);
  const [running, setRunning] = useState(false);

  const runCode = () => {
    setRunning(true);
    setOutput([]);
    try {
      const originalLog = console.log;
      const newOutput = [];
      console.log = (...args) => {
        newOutput.push(args.map(arg => JSON.stringify(arg)).join(' '));
      };
      // eslint-disable-next-line no-eval
      eval(code);
      console.log = originalLog;
      setOutput(newOutput);
    } catch (err) {
      if (err instanceof SyntaxError) {
        setOutput([`SyntaxError: ${err.message}`]);
      } else {
        setOutput([`Error: ${err.message}`]);
      }
    }
    setRunning(false);
  };

  const clearOutput = () => {
    setOutput([]);
  };

  return (
    <div className="modern-card" style={{ background: 'rgba(17,24,39,0.85)', borderRadius: 20, padding: 24, minHeight: 420, display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-glow)' }}>
      <h3 style={{ marginBottom: 12, background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Online JS Compiler</h3>
      <textarea
        value={code}
        onChange={e => setCode(e.target.value)}
        style={{
          width: '100%',
          minHeight: 160,
          background: 'rgba(255,255,255,0.07)',
          color: 'var(--text-main)',
          border: '1px solid rgba(255,255,255,0.13)',
          borderRadius: 10,
          fontFamily: 'Fira Mono, monospace',
          fontSize: 15,
          marginBottom: 12,
          padding: 12,
          resize: 'vertical',
        }}
        spellCheck={false}
      />
      <div style={{display: 'flex', justifyContent: 'flex-end', gap: '10px', marginBottom: '10px'}}>
        <button
          className="btn btn-secondary"
          style={{ borderRadius: 10, fontWeight: 600, fontSize: 15, minWidth: 120 }}
          onClick={clearOutput}
        >
          Clear
        </button>
        <button
          className="btn btn-primary"
          style={{ borderRadius: 10, fontWeight: 600, fontSize: 15, minWidth: 120 }}
          onClick={runCode}
          disabled={running}
        >
          {running ? 'Running...' : 'Run Code'}
        </button>
      </div>
      <div style={{ background: 'rgba(0,0,0,0.18)', borderRadius: 8, padding: 12, minHeight: 60, color: 'var(--success)', fontFamily: 'Fira Mono, monospace', fontSize: 15, flexGrow: 1 }}>
        <strong>Output:</strong>
        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
          {output.map((line, index) => (
            <div key={index} style={{color: line.toLowerCase().includes('error') ? 'var(--danger)' : 'var(--success)'}}>{line}</div>
          ))}
        </pre>
      </div>
    </div>
  );
};

export default CodeCompiler;