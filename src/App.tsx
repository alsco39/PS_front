import { Route, Routes } from "react-router-dom";
import { Main } from "./components/pages/Main";
import Registration from "./pages/Pet/Registration";
import EmployWrite from "./pages/Pet/EmployWrite";
import FeedList from "./pages/FeedList";
import Feed from "./pages/Feed";
import Write from "./components/pages/FeedWrite/Content";
import CareLog from "./pages/CareLog";
import CareLogList from "./pages/CareLogList";
import CareLogWrite from "./pages/CareLogWrite";
import FeedWrite from "./pages/FeedWrite";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/pet">
        <Route path="registration" element={<Registration />} />
        <Route path="employ" element={<EmployWrite />} />
      </Route>
      <Route path="/feeds">
        <Route path="list" element={<FeedList />} /> {/* 상대 경로 사용 */}
        <Route path="list/:id" element={<Feed />} />
        <Route path="write" element={<FeedWrite />} />
      </Route>

      <Route path="/carelog">
        <Route path="list/:id" element={<CareLog />} />
        <Route path="list" element={<CareLogList />} />
        <Route path="write" element={<CareLogWrite />} />
      </Route>
    </Routes>
  );
}

export default App;
