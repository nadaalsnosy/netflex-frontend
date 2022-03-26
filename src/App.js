import { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthProvider";
import RequireAuth from "./components/Auth/RequireAuth";
import NeedLogin from "./components/Auth/NeedLogin";

import RequireAdminAuth from "./components/Auth/RequireAdminAuth";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import LoggedOutHome from "./pages/LoggedOutHome";

import AdminPage from "./pages/AdminPage";
import MoviesModule from "./context/MoviesModule";

import Home from "./pages/Home";
import VideoPage from "./pages/VideoPage";

import "./App.scss";
import Movies from "./pages/Movies";

import Footer from "./components/Footer";
import EditProfile from "./components/EditProfile" ;

const App = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Spinner animation="border" variant="danger" />
        </div>
      }
    >
      <div className="App bg-dark">
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route>
                <Route element={<NeedLogin />}>
                  <Route path="/signUp" element={<SignUp />} />
                  <Route path="/signIn" element={<SignIn />} />
                  <Route path="/EditProfile" element={<EditProfile />} />
                  <Route path="/" element={<LoggedOutHome />} />

                </Route>


                {/* <Route element={<RequireAuth />}> */}
                <Route path="/*" element={<MoviesModule />} />

                {/* <Route path="/home" element={<Home />} />
                <Route path="/mainVideo" element={<VideoPage />} />

                <Route path="/movies" element={<Movies />} />

                <Route element={<RequireAdminAuth />}>
                  <Route path="/showLists/*" element={<MoviesModule />} />
                </Route> */}
                {/* </Route> */}
              </Route>
            </Routes>
            <Footer />
          </AuthProvider>
        </BrowserRouter>
      </div>
    </Suspense>
  );
};

export default App;
