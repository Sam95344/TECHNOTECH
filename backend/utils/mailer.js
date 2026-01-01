const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER, // your gmail
    pass: process.env.MAIL_PASS  // your app password
  }
});

const sendInternshipApplication = async ({ name, domain, resume }) => {
  const mailOptions = {
    from: process.env.MAIL_USER,
    to: 'careerstechnotech@gmail.com',
    subject: 'New Internship Application',
    html: `<h3>New Internship Application</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Domain:</b> ${domain}</p>
      <p><b>Resume:</b> <a href="${resume}">${resume}</a></p>`
  };
  await transporter.sendMail(mailOptions);
};

module.exports = { sendInternshipApplication };