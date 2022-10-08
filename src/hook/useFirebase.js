import { useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import firebaseInitialize from "../authentication/firebaseInitialize";
import axios from "axios";

firebaseInitialize();

const useFirebase = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const auth = getAuth();
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUsers(user);
      } else {
        setIsLoggedIn(false);
        setUsers({});
      }
      setIsLoading(false);
    });
    return () => unSubscribe;
  }, [auth, isLoggedIn]);
  // Register new user
  const createNewUser = (userName, email, password, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfileName(userName);
        const userData = {
          email: user.email,
          userName,
          role: "user",
        };
        userSaveOnDatabase(userData);
        toast.success("Congratulations! You have successfully registered");
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode) {
          Swal.fire("Attention!", "Sorry! this email already in use.", "error");
        }
      })
      .finally(() => setIsLoading(false));
  };
  // Profile name update
  const updateProfileName = (userName) => {
    updateProfile(auth.currentUser, {
      displayName: userName,
    })
      .then(() => {})
      .catch(() => {});
  };
  // User save on database
  const userSaveOnDatabase = (userData) => {
    axios
      .post("http://localhost:5000/app/v1/users", userData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  // User login
  const userLogin = (email, password, navigate, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          setUsers(user);
          setIsLoggedIn(true);
          handleJsonWebToken(user.email);
          toast.success("Congratulations! You are successfully logged in");
          const destination = location.state?.from || "/";
          navigate(destination);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/wrong-password") {
          Swal.fire(
            "Attention!",
            "Wrong password. please try again or reset the password",
            "warning"
          );
        } else if (errorCode === "auth/user-not-found") {
          Swal.fire("Attention!", "User not found. please sign up", "warning");
          navigate("/register");
        }
      })
      .finally(() => setIsLoading(false));
  };
  /*  useEffect(() => {
    let subscribed = true;
    axios
      .get(`http://localhost:5000/app/v1/single/user?email=${users.email}&role=admin` , {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      } )
      .then((res) => {
        if (subscribed) {
          if (res.data.data?.role === "admin") {
            setIsAdmin(true);
          } else if (res.data.data?.role === "user") {
            setIsClient(true);
          }
        }
      })
      .catch((err) => {
        console.log(err.response?.data);
      });
    return () => (subscribed = false);
  }, [users.email]);
 */
  const handlePasswordResetEmail = (email, navigate, location) => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        const destination = location.state?.from || "/login";
        navigate(destination);
        Swal.fire(
          "Congratulation!",
          "Please check your email inbox or spam folder and reset your password.",
          "success"
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/user-not-found") {
          Swal.fire("Attention!", "User not found. please sign up", "warning");
          navigate("/create-a-new-account");
        }
      });
  };
  const handleJsonWebToken = (email) => {
    axios
      .put(`http://localhost:5000/app/v1/users?email=${email}`)
      .then((res) => {
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  const handleSignOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUsers({});
        setIsLoggedIn(false);
        toast.warn("Successfully logged out");
        localStorage.removeItem("accessToken");
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };
  return {
    users,
    isLoading,
    isLoggedIn,
    createNewUser,
    userLogin,
    handlePasswordResetEmail,
    handleSignOut,
  };
};

export default useFirebase;
