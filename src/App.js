import { Suspense } from "react";
import { Spinner } from "react-bootstrap";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import UsersModule from "./modules/UsersModule";
// import NavbarComp from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";

// const Home = lazy(() => import("./pages/Home"));
// const SignIn = lazy(() => import("./pages/SignIn"));
// const SignUp = lazy(() => import("./pages/SignUp"));

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
        <Home />
        {/* <Route path="/" element={<Home />} /> */}
        {/* <BrowserRouter>
          <NavbarComp />
          <Routes>
            <Route path="signUp/" element={<SignUp />} />
            <Route path="signIn/" element={<SignIn />} />
            <Route path="users/*" element={<UsersModule />} />
            <Route path="*" element={<div>404 - NotFound</div>} />
          </Routes>
        </BrowserRouter> */}
      </div>
    </Suspense>
  );
};

export default App;
