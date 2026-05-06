import { useState } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const [tela, setTela] = useState("login");
  const [logado, setLogado] = useState(false);

  return (
    <>
      <NavBar mudarTela={setTela} tela = {tela} />

      {tela === "login" && <Login mudarTela={setTela} />}
      {tela === "cadastro" && <Register mudarTela={setTela} />}
      {tela === "forgot" && <ForgotPassword mudarTela={setTela} />}
      {tela === "home" && <Home />}
      <Footer />
    </>
  );
}

export default App;