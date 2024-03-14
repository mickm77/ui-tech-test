import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Header from "./header";
import css from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={css.layout}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
