import "./App.css";
import IndexPage from './pages/IndexPage.jsx';
import LoginPage from './pages/LoginPage.jsx';

import Layout from "./Layout.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/Login" element={<LoginPage />}/>
      </Route>
    </Routes>
  );
}

export default App;
