import { useState } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import NavBar from "./components/NavBar";
import Profile from "./pages/Profile";
import History from "./pages/History";
import Support from "./pages/Support";

function App() {
  const [tela, setTela] = useState("login");

  const telasComNavbar = [
    "home",
    "historia",
    "perfil",
    "suporte"
  ];

  return (
    <>
      {telasComNavbar.includes(tela) && (
        <NavBar mudarTela={setTela} tela={tela} />
      )}

      {tela === "login" && <Login mudarTela={setTela} />}
      {tela === "cadastro" && <Register mudarTela={setTela} />}
      {tela === "forgot" && <ForgotPassword mudarTela={setTela} />}
      {tela === "home" && <Home />}
      {tela === "perfil" && <Profile />}
      {tela === "historia" && <History />}
      {tela === "suporte" && <Support />}
    </>
  );
}

export default App;