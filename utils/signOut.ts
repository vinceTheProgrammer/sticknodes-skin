import { getAuth, signOut as fbSignOut } from "firebase/auth";

const signOut = () => {
  const app = useFirebaseApp();
  const auth = getAuth(app);
  fbSignOut(auth);
};

export default signOut;
