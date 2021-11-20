import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore/lite";

const clientCredentials = {
  apiKey: "AIzaSyDQdF6CPY6kTVOCMqyyNS4hfeDa8ltVNhM",
  authDomain: "app121deals.firebaseapp.com",
  databaseURL: "https://app121deals.firebaseio.com",
  projectId: "app121deals",
  storageBucket: "app121deals.appspot.com",
  messagingSenderId: "797861660075",
  appId: "1:797861660075:web:8f0971b59d139bdb14beee",
  measurementId: "G-B7FWF7CG06",
};

const app = initializeApp(clientCredentials);

const db = getFirestore(app);

const getDeals = async () => {
  const dealsCol = collection(db, "deals");
  const dealsSnapshot = await getDocs(dealsCol);
  const deals = dealsSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return deals;
};

const getDeal = async (id) => {
  const docRef = doc(db, "deals/" + id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  }
};

const updateDeal = async (id, data) => {
  const docRef = doc(db, "deals/" + id);
  await setDoc(docRef, data, { merge: true });
};

const createDeal = async (data) => {
  await setDoc(doc(db, "deals"), data);
};

export default {
  getDeals,
  getDeal,
  updateDeal,
  createDeal,
};
