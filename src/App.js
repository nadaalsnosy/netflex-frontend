import { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthProvider";
import RequireAuth from "./components/RequireAuth";
import NeedLogin from "./components/NeedLogin";

import RequireAdminAuth from "./components/RequireAdminAuth";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import LoggedOutHome from "./pages/LoggedOutHome";

import AdminPage from "./pages/AdminPage";
import Home from "./pages/Home";

import "./App.scss";
import Movies from "./pages/Movies";

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
            <Routes>
              <Route>
                <Route element={<NeedLogin />}>
                  <Route path="/signUp" element={<SignUp />} />
                  <Route path="/signIn" element={<SignIn />} />
                  <Route path="/" element={<LoggedOutHome />} />
                </Route>

                {/* <Route element={<RequireAuth />}> */}
                <Route path="/home" element={<Home />} />
                <Route path="/movies" element={<Movies />} />

                <Route element={<RequireAdminAuth />}>
                  <Route path="/adminPage" element={<AdminPage />} />
                </Route>
                {/* </Route> */}
              </Route>
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </Suspense>
  );
};

export default App;
