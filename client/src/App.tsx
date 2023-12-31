import { Route, Routes } from "react-router-dom";
import { CharityInfoPage } from "./pages/CharityInfoPage";
import { DashboardPage } from "./pages/DashboardPage";
import { SettingsPage } from "./pages/SettingsPage";
import { CharitiesPage } from "./pages/CharitiesPage";
import { LandingPage } from "./pages/LandingPage";

import "./App.scss";
import AuthGuard from "./components/AuthGuard";
import DemoPage from "./demo/page.tsx";

function App() {
  return (
    <>  
      <Routes>
        <Route path="/" element={ <LandingPage/>} />
        <Route path="/demo" element={ <DemoPage/>} />
        <Route path="/dashboard" element={ <AuthGuard element={<DashboardPage />}/>} />
        <Route path="/settings" element={ <AuthGuard element={<SettingsPage />}/>} />
        <Route path="/charity/:id" element={ <AuthGuard element={<CharityInfoPage />}/>}/>
        <Route path="/charities" element={ <AuthGuard element={<CharitiesPage />}/>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default App;
