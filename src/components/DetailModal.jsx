import Avatar from "./Avatar";
import CommentForm from "./CommentForm";
import { formatToTimeAgo } from "./../lib/utils";
import CommentView from "./CommentView";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { useQuery } from "react-query";
import { apiGetTweet } from "../api";

export default function DetailModal({ isOpen, setIsOpen, tweet }) {
  const { data } = useQuery(["getTweet", { tweetId: tweet?._id }], apiGetTweet);
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer">
          <motion.div initial={{ scale: 0, rotate: "12.5deg" }} animate={{ scale: 1, rotate: "0deg" }} exit={{ scale: 0, rotate: "0deg" }} onClick={(e) => e.stopPropagation()} className="max-w-7xl w-full shadow-xl relative overflow-hidden grid grid-cols-[3fr_2fr]">
            {/* 닫기 버튼 */}
            <div onClick={() => setIsOpen(false)} className="absolute right-4 top-4 size-6 flex justify-center items-center bg-slate-900 text-white cursor-pointer">
              <IoMdClose />
            </div>
            {/* 이미지 */}
            <div className="w-full border border-neutral-300 aspect-[4/3] flex items-center justify-center bg-slate-500">
              <img src={tweet.photo} alt="detail-image" className="w-full h-full object-cover object-center" />
            </div>
            {/* 댓글 */}
            <div className="w-full flex flex-col justify-between bg-white">
              {/* 프로필 & 댓글보기 */}
              <div className="w-full flex flex-col gap-5">
                {/* 1. */}
                <div className="p-4">
                  <Avatar avatar={tweet.writer.profileImage} username={tweet.writer.username} size="size-8" />
                </div>
                {/* 2. 트윗 내용 */}
                <div className="px-4 flex flex-col gap-2">
                  <div>{tweet.content}</div>
                  <div className="text-sm text-neutral-700">{formatToTimeAgo(tweet.createdAt)}</div>
                </div>

                {/* 3. 댓글 보기 */}
                <div className="w-full px-4 flex flex-col gap-2">
                  {tweet.comments.map((item, index) => (
                    <CommentView key={index} comment={item} />
                  ))}
                </div>
              </div>
              {/* 댓글쓰기 */}
              <div className="p-2">
                <CommentForm tweetId={tweet._id} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
