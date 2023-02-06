import "./assets/css/App.css";

import Register from "./register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, Suspense, lazy } from "react";
import PostingTask from "./posting";
const Contenedores = lazy(() => import("./containers"));
const Nav = lazy(() => import("./nav"));
const Login = lazy(() => import("./login"));
const Logout = lazy(() => import("./logout"));
const Dashboard = lazy(() => import("./dashboard"));

import { Context, ContextDisc } from "./Components/context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const session = localStorage.getItem("session");

    if (session) {
      setIsLoggedIn(true);
      localStorage.setItem("session", "logged-in");
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const acceder = (estado) => {
    setIsLoggedIn(estado);
  };

  const conectado = (estado) => {
    setIsLoggedIn(estado);
  };
  console.log(isLoggedIn);

  return (
    <ContextDisc>
      <Context>
        <div className="App">
          <BrowserRouter basename="/post">
            <Suspense >
              <Nav />
            </Suspense>

            <Routes>
              <Route
                path="/"
                element={
                  <Suspense>
                    <Contenedores conectado={conectado} />
                  </Suspense>
                }
              />

              <Route
                path="/login"
                element={
                  <Suspense>
                    <Login acceder={acceder} />
                  </Suspense>
                }
              />
              <Route
                path="/logout"
                element={
                  <Suspense>
                    <Logout />
                  </Suspense>
                }
              />
              <Route path="/register" element={<Register />} />
              <Route path="/post" element={<PostingTask />} />
              <Route
                path="/dashboard"
                element={
                  <Suspense fallback={<h2>loading</h2>}>
                    <Dashboard conectado={conectado} />
                  </Suspense>
                }
              />
            </Routes>
          </BrowserRouter>
        </div>
      </Context>
    </ContextDisc>
  );
}

export default App;
