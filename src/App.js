import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/PublicDashboard";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import AddStateCovidData from "./pages/AddStateCovidDataForToday";
import Layout from "./Layout.js";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />

            <Route path="/login" element={<Login />} />

            <Route path="/userdashboard" element={<UserDashboard />} />

            <Route
              path="/addstatecoviddata"
              element={<AddStateCovidData />}
            />

            <Route
              path="/approvestatecoviddata"
              element={<AdminDashboard />}
            />

          </Route>

          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
