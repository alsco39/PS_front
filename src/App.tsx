import { Route, Routes } from "react-router-dom";
import { Main } from "./components/pages/Main";
import Registration from "./pages/Pet/Registration";
import EmployWrite from "./pages/Pet/EmployWrite";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/pet">
        <Route path="registration" element={<Registration />} />
        <Route path="employ" element={<EmployWrite />} />
      </Route>
    </Routes>
  );
}

export default App;
