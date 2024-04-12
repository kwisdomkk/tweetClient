import useSession from "./../lib/useSession";
import { Navigate } from "react-router-dom";

export default function HomeToRoute({ children }) {
  const { data, isLoading } = useSession();
  if (!isLoading && data?.isLogin) {
    return <Navigate to="/" />;
  }
  return children;
}
