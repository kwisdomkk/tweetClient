import { FaHome, FaPlusSquare } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

export default function LayoutWithMenu({ children }) {
  return (
    <div className="flex flex-col">
      {/* 메뉴 */}
      <div className="flex h-16 border-b border-neutral-300 mb-5 items-center justify-end gap-4">
        <div>
          <FaHome />
        </div>
        <div>
          <Link to="/tweet-write">
            <FaPlusSquare />
          </Link>
        </div>
        <div>
          <Avatar size="size-8" hidden="true" />
        </div>
        <div>
          <RiLogoutBoxRFill />
        </div>
      </div>
      {/* contents */}
      {children}
    </div>
  );
}
