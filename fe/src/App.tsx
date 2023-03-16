import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BicepsPage } from "./pages/BicepsPage";
import { HomePage } from "./pages/HomePage";

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="biceps" element={<BicepsPage />} />
      </Routes>
    </BrowserRouter>
  )
}