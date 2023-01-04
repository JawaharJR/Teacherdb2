import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Portal from "./Portal";
import "bootstrap/dist/css/bootstrap.min.css";
import Students from "./Students";
import Studentview from "./Studentview";
import Addstudent from "./Addstudent";
import Editstudent from "./Editstudent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portal />}>
            <Route index element={<Students />} />
            <Route
              path="portal/studentview/:userid"
              element={<Studentview />}
            />
            <Route path="portal/addstudent" element={<Addstudent />} />
            <Route
              path="portal/editstudent/:userid"
              element={<Editstudent />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
