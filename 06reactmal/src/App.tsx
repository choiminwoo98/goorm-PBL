import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Layout from "./components/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/login";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/store";
import { useEffect } from "react";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { logoutUser } from "./features/auth/authAction";
import { setCurrentUser } from "./features/auth/authSlice";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const authInstance = getAuth();

    const unsubscribe = onAuthStateChanged(authInstance, (user) => {
      if (user) {
        dispatch(setCurrentUser(user)); // `setCurrentUser`는 Redux action creator입니다.
      } else {
        dispatch(logoutUser()); // `logoutUser`는 Redux action creator입니다.
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
