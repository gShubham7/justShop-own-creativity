import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminPrivateRoute = ({ children }) => {
  const { AdminIsAuth } = useSelector((store) => store.auth);

  if (!AdminIsAuth) {
    return (
      alert("You are redirected for security reason"), (<Navigate to="/" />)
    );
  }

  return children;
};

export default AdminPrivateRoute;
