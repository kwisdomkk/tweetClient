import { formatToTimeAgo } from "../lib/utils";
import Avatar from "./Avatar";

export default function CommentView({ comment }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Avatar avatar={comment.writer.profileImage} size="size-8" username={comment.writer.username} />

        <div>{comment?.comment}</div>
      </div>
      <div>{formatToTimeAgo(comment.createdAt)}</div>
    </div>
  );
}
