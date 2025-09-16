import { Route, Routes, useLocation } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';
import NavBar from './Components/NavBar';
import './App.css';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import JobsPage from './Components/JobsPage';
import JobFullDetailPage from './Components/JobFullDetailPage';
const App = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname.includes('/login') ? '' : <NavBar />}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/jobs"
          element={
            <ProtectedRoute>
              <JobsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/jobs/:id"
          element={
            <ProtectedRoute>
              <JobFullDetailPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
