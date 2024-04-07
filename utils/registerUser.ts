import { doc, setDoc } from "firebase/firestore";

interface NewUserData {
  username: string;
  displayname: string;
  bio: string;
}

const registerUser = async (data: NewUserData) => {
  const user = useCurrentUser().value;
  const db = useFirestore();
  if (!user) return;
  const docRef = doc(db, "users", user.uid);
  await setDoc(docRef, {
    username: data.username,
    bio: data.bio,
    displayname: data.displayname,
    avatar: `https://api.dicebear.com/6.x/identicon/svg?seed=${data.username}&backgroundColor=c0aede,b6e3f4,d1d4f9,ffd5dc,ffdfbf`,
    accountCreated: Date.now(),
    downloadCount: 0,
    followerCount: 0,
  }).catch((err) => {
    throw err;
  });
};

export default registerUser;
