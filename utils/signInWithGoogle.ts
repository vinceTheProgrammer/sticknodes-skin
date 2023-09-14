import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const signInWithGoogle = () => {
  const app = useFirebaseApp();
  const auth = getAuth(app);
  signInWithPopup(auth, new GoogleAuthProvider());
};

export default signInWithGoogle;
