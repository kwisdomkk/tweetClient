import { useQuery } from "react-query";
import { apiGetLoginSuccess } from "../api";

export default function useSession() {
  const { data, isLoading } = useQuery("getSession", apiGetLoginSuccess);
  return { data, isLoading };
}
