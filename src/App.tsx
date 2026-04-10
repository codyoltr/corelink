import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './modules/auth/Login';
import Register from './modules/auth/Register';
import AppLayout from './components/layout/AppLayout';
import Home from './modules/landing/Home';
import Dashboard from './modules/dashboard/Dashboard';
import Welcome from './modules/welcome/Welcome';
import AssetList from './modules/assets/AssetList';
import AssetDetail from './modules/assets/AssetDetail';
import TrainingDashboard from './modules/training/TrainingDashboard';
import Map from './modules/map/FacilityMap';
import MaintenanceTasks from './modules/maintenance/MaintenanceTasks';
import DocumentCenter from './modules/documents/DocumentCenter';
import Offers from './modules/sales/Offers';
import EmergencyConsole from './modules/emergency/EmergencyConsole';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected Routes */}
        <Route element={<AppLayout />}>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/assets" element={<AssetList />} />
          <Route path="/assets/:id" element={<AssetDetail />} />
          <Route path="/map" element={<Map />} />
          <Route path="/maintenance" element={<MaintenanceTasks />} />
          <Route path="/training" element={<TrainingDashboard />} />
          <Route path="/documents" element={<DocumentCenter />} />
          <Route path="/sales" element={<Offers />} />
          <Route path="/emergency" element={<EmergencyConsole />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
