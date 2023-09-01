import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComp from "./pages/NavbarComp";
import ListPinjaman from "./pages/Listpinjaman";
import TambahComp from "./pages/Forminput";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarComp />
        <Routes>
          <Route>
            <Route path="form" element={<TambahComp />} />
            <Route path="daftarpinjam" element={<ListPinjaman />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
