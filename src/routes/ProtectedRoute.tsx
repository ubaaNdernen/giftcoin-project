import { Navigate } from "react-router-dom";
import { useWallet } from "../components/walletConnect";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const wallet = useWallet();

  if (!wallet.connected) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
