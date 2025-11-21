import { initializeApp, type FirebaseOptions } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, type User } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, query, getDocs } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth(app);
export const db = getFirestore(app);

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export async function createUserDocumentFromAuth(userAuth: User) {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.error('error creating the user', error);
    }
  }

  return userDocRef;
}

export type FeedbackDateTuple = [number, string, string, number];

export type FeedbackDTO = {
  id: string;
  name: string;
  message: string;
  date: FeedbackDateTuple;
};

export function formatFeedbackDate(dateArray: FeedbackDateTuple) {
  return `${dateArray[0]}/${dateArray[1]}/${dateArray[2]}`;
}

export async function createFeedbackDocument(
  FeedbackName: string,
  FeedbackMessage: string,
): Promise<void> {
  const feedbackDocRef = doc(db, 'feedback', uuidv4());
  const dateObj = new Date();
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');
  const epoch = dateObj.getTime();
  const date: FeedbackDateTuple = [year, month, day, epoch];

  try {
    await setDoc(feedbackDocRef, {
      FeedbackName,
      FeedbackMessage,
      date,
    });
  } catch (error) {
    console.error('error creating the feedback', error);
  }
}

export async function getFeedbackStream(): Promise<FeedbackDTO[]> {
  const q = query(collection(db, 'feedback'));
  const snapshot = await getDocs(q);

  const dataArray: FeedbackDTO[] = snapshot.docs.map((docSnap) => {
    const data = docSnap.data() as {
      FeedbackName: string;
      FeedbackMessage: string;
      date: FeedbackDateTuple;
    };

    return {
      id: docSnap.id,
      name: data.FeedbackName,
      message: data.FeedbackMessage,
      date: data.date,
    };
  });

  dataArray.sort((a, b) => b.date[3] - a.date[3]);

  return dataArray;
}
