import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { loginStart, loginSuccess, loginFailure, logout } from "./authSlice";
import { auth } from "../../utils/firebaseConfig";
import { User } from "firebase/auth";

export const loginUser =
  (email: string, password: string): any =>
  async (dispatch: any) => {
    dispatch(loginStart());

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        dispatch(loginSuccess(userCredential.user));
      }
    } catch (error: any) {
      dispatch(loginFailure(error.message));
    }
  };

export const logoutUser = (): any => (dispatch: any) => {
  signOut(auth);
  dispatch(logout());
};
