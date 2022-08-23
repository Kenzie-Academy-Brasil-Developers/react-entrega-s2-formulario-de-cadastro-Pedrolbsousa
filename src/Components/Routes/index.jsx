import { Routes, Route } from "react-router-dom";
import Home from "../Login";
import DashBoard from "../DashBoard";
import Registro from "../Registro";
import React, { useState } from "react";

const RoutesMain = () => {
  const [user, setUser] = useState();

  return (
    <Routes>
      <Route path="/" element={<Home setUser={setUser} />} />
      <Route path="/Dashboard" element={<DashBoard user={user} />} />
      <Route path="/Registro" element={<Registro />} />
    </Routes>
  );
};

export default RoutesMain;
