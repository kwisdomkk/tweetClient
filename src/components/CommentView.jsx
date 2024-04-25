import { formatToTimeAgo } from "../lib/utils";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";

export default function CommentView({ comment }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Link
          to="/profile"
          state={{
            id: comment?.writer?._id,
            username: comment?.writer?.username,
            avatar: comment?.writer?.profileImage,
          }}
        >
          <Avatar avatar={comment.writer.profileImage} size="size-8" username={comment.writer.username} />
        </Link>
        <div>{comment?.comment}</div>
      </div>
      <div>{formatToTimeAgo(comment.createdAt)}</div>
    </div>
  );
}
