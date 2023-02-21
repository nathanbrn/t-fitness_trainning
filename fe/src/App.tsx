import { routes } from "./routes";
import { RouterProvider } from "react-router-dom";

export function App() {
  const router = routes

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}