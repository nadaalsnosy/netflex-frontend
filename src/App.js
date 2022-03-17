import { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

// import NavbarComp from "./components/Navbar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UnSigned from "./pages/UnSigned";
import Home from "./pages/Home";

import NetflixLogo from "./components/NetflixLogo";
import SigningBackground from "./components/SigningBackground";
import UnsignedFooter from "./components/UnsignedFooter";
import "./App.scss";

const App = () => {
  // const user = true;
  const user = false;

  return (
    <Suspense
      fallback={
        <div>
          <Spinner animation="border" variant="primary" />
        </div>
      }
    >
      <div className="App">
        <BrowserRouter>
          {/* <NavbarComp /> */}
          <SigningBackground />
          <NetflixLogo />

          <Routes>
            <Route element={!user ? <Outlet /> : <Navigate to={"/home"} />}>
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/login" element={<UnSigned />} />
            </Route>

            <Route element={user ? <Outlet /> : <Navigate to={"/login"} />}>
              <Route path="/home" element={<Home />} />
            </Route>
          </Routes>

          <UnsignedFooter />
        </BrowserRouter>
      </div>
    </Suspense>
  );
};

export default App;
