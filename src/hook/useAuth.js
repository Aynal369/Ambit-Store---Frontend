import { useContext } from "react";
import { authContext } from "../authentication/AuthProvider";

const useAuth = () => {
  return useContext(authContext);
};

export default useAuth;
