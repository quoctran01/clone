import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";

const useAuth = () => {
  const [currentUser, setCurrentuser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentuser(user);
      } else {
        console.log("hihi");
        setCurrentuser(null);
      }
    });
  });
  return { currentUser };
};

export default useAuth;
