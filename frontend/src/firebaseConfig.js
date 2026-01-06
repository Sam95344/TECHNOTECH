// Firebase config helper for Firestore read/write operations
// IMPORTANT: Replace the placeholder values in firebaseConfig with your
// project's configuration from the Firebase console (Project settings -> SDK).
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc, collection, getDocs, deleteDoc, updateDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBCuURNLn9MntWBjugqNVPcp-jBn5I88SI",
  authDomain: "internship-app-cc7e1.firebaseapp.com",
  projectId: "internship-app-cc7e1",
  storageBucket: "internship-app-cc7e1.firebasestorage.app",
  messagingSenderId: "523605603958",
  appId: "1:523605603958:web:fee20aee5993bbc81fd157"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log('Firebase initialized successfully');
console.log('Firestore db:', db);

// Fetch internship document by ID from collection `internships`
export async function getInternshipById(id) {
  if (!id) return null;
  try {
    const ref = doc(db, 'internships', String(id));
    const snap = await getDoc(ref);
    if (!snap.exists()) return null;
    return { _id: snap.id, ...snap.data() };
  } catch (err) {
    console.error('getInternshipById error', err);
    throw err;
  }
}

// Save or overwrite an internship record by ID (useful for admin or testing)
export async function saveInternshipById(id, data) {
  if (!id) throw new Error('id required');
  try {
    const ref = doc(db, 'internships', String(id));
    await setDoc(ref, data, { merge: true });
    return true;
  } catch (err) {
    console.error('saveInternshipById error', err);
    throw err;
  }
}

// Get all internships (returns array of { _id, ...data })
export async function getAllInternships() {
  try {
    const coll = collection(db, 'internships');
    const snaps = await getDocs(coll);
    const items = [];
    snaps.forEach((d) => items.push({ _id: d.id, ...d.data() }));
    return items;
  } catch (err) {
    console.error('getAllInternships error', err);
    throw err;
  }
}

export async function deleteInternshipById(id) {
  if (!id) throw new Error('id required');
  try {
    const ref = doc(db, 'internships', String(id));
    await deleteDoc(ref);
    return true;
  } catch (err) {
    console.error('deleteInternshipById error', err);
    throw err;
  }
}

export async function updateInternshipById(id, data) {
  if (!id) throw new Error('id required');
  try {
    const ref = doc(db, 'internships', String(id));
    await updateDoc(ref, data);
    return true;
  } catch (err) {
    console.error('updateInternshipById error', err);
    throw err;
  }
}

// Fetch certificate document by certificateNumber from collection `certificates`
export async function getCertificateByNumber(certificateNumber) {
  if (!certificateNumber) return null;
  console.log('Fetching certificate from Firebase:', certificateNumber);
  try {
    const ref = doc(db, 'certificates', String(certificateNumber));
    const snap = await getDoc(ref);
    console.log('Firebase snapshot exists:', snap.exists());
    if (!snap.exists()) return null;
    const data = { certificateNumber: snap.id, ...snap.data() };
    console.log('Certificate data:', data);
    return data;
  } catch (err) {
    console.error('getCertificateByNumber error', err);
    throw err;
  }
}

// Save or overwrite a certificate record by certificateNumber (useful for admin or testing)
export async function saveCertificateByNumber(certificateNumber, data) {
  if (!certificateNumber) throw new Error('certificateNumber required');
  console.log('Saving certificate to Firebase:', certificateNumber, data);
  try {
    const ref = doc(db, 'certificates', String(certificateNumber));
    await setDoc(ref, data, { merge: true });
    console.log('Certificate saved successfully');
    return true;
  } catch (err) {
    console.error('saveCertificateByNumber error', err);
    throw err;
  }
}

// Get all certificates (returns array of { certificateNumber, ...data })
export async function getAllCertificates() {
  try {
    const coll = collection(db, 'certificates');
    const snaps = await getDocs(coll);
    const items = [];
    snaps.forEach((d) => items.push({ certificateNumber: d.id, ...d.data() }));
    return items;
  } catch (err) {
    console.error('getAllCertificates error', err);
    throw err;
  }
}

// Delete certificate by certificateNumber
export async function deleteCertificateByNumber(certificateNumber) {
  if (!certificateNumber) throw new Error('certificateNumber required');
  try {
    const ref = doc(db, 'certificates', String(certificateNumber));
    await deleteDoc(ref);
    return true;
  } catch (err) {
    console.error('deleteCertificateByNumber error', err);
    throw err;
  }
}

// Update certificate by certificateNumber
export async function updateCertificateByNumber(certificateNumber, data) {
  if (!certificateNumber) throw new Error('certificateNumber required');
  try {
    const ref = doc(db, 'certificates', String(certificateNumber));
    await updateDoc(ref, data);
    return true;
  } catch (err) {
    console.error('updateCertificateByNumber error', err);
    throw err;
  }
}

export default db;
