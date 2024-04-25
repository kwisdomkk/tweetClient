import { FaHome, FaPlusSquare } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import useSession from "../lib/useSession";

export default function LayoutWithMenu({ children }) {
  const { data, isLoading } = useSession();
  console.log(data);
  return (
    <div className="flex flex-col">
      {/* 메뉴 */}
      <div className="flex h-16 border-b border-neutral-300 mb-5 items-center justify-end gap-4">
        <Link to="/">
          <FaHome />
        </Link>
        <Link to="/tweet-write">
          <FaPlusSquare />
        </Link>
        <Link
          to="/profile"
          state={{
            id: data?.user?.id,
            username: data?.user?.username,
            avatar: data?.user?.avatar,
          }}
        >
          <Avatar avatar={data?.user?.avatar} size="size-8" hidden="true" />
        </Link>
        <div>
          <RiLogoutBoxRFill />
        </div>
      </div>
      {/* contents */}
      {children}
    </div>
  );
}
