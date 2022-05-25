import { Navigate, Outlet } from "react-router-dom";

const useAuth = async () => {
  var user;
  try {
    user = await JSON.parse(localStorage.getItem("user"));
  } catch (e) {
    user = null;
    console.log(e);
  }
  return { ...user };
};
const ProtectedRoutes = async () => {
  const data = await useAuth();
  return data.type === "Company" ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
