import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";

export function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage />} />

      <Route path='home' element={<HomePage />} />
    </Routes>
    </BrowserRouter>
  )
}