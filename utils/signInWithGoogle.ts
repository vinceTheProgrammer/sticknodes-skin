import { GoogleAuthProvider, getAuth, signInWithRedirect } from "firebase/auth";

const signInWithGoogle = () => {
  const app = useFirebaseApp();
  const auth = getAuth(app);
  signInWithRedirect(auth, new GoogleAuthProvider());
};

export default signInWithGoogle;
