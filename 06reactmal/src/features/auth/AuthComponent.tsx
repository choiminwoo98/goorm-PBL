import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./authAction";
import { RootState } from "../../app/store";
import { useNavigate } from "react-router-dom";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
} from "firebase/auth";

function AuthComponent() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const { user, error, loading } = useSelector(
    (state: RootState) => state.auth
  );
  const navigate = useNavigate();
  useEffect(() => {
    // user가 존재하고 error가 없을 경우 홈으로 이동
    if (user && !error) {
      navigate("/");
    }
  }, [user, error, navigate]);
  const handleLogin = async () => {
    const authInstance = getAuth();
    try {
      await setPersistence(authInstance, browserLocalPersistence);
      await dispatch(loginUser(email, password));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {loading && <p>Loading...</p>}
      </form>
    </div>
  );
}

export default AuthComponent;
