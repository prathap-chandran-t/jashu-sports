
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute() {
  const { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
