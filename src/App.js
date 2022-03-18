import { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthProvider";
import RequireAuth from "./components/RequireAuth";
import RequireAdminAuth from "./components/RequireAdminAuth";

// import NavbarComp from "./components/Navbar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import LoggedOutHome from "./pages/LoggedOutHome";

import AdminPage from "./pages/AdminPage";
import Home from "./pages/Home";

import "./App.scss";

const App = () => {
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
          <AuthProvider>
            {/* <NavbarComp /> */}
            <Routes>
              <Route>
                <Route>
                  <Route path="/signUp/" element={<SignUp />} />
                  <Route path="/signIn" element={<SignIn />} />
                  <Route path="/" element={<LoggedOutHome />} />
                </Route>

                <Route element={<RequireAuth />}>
                  <Route path="/home" element={<Home />} />

                  <Route element={<RequireAdminAuth />}>
                    <Route path="/adminPage" element={<AdminPage />} />
                  </Route>
                </Route>
              </Route>
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </Suspense>
  );
};

export default App;
