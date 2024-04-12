import { apiGetTweets } from "../api";
import Avatar from "../components/Avatar";
import Layout from "../components/Layout";
import LayoutWithMenu from "./../components/LayoutWithMenu";
import { useQuery } from "react-query";
import { formatToTimeAgo } from "../lib/utils";
import CommentForm from "./../components/CommentForm";
import { useState } from "react";
import DetailModal from "../components/DetailModal";
import CommentView from "../components/CommentView";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [tweet, setTweet] = useState();
  const { data } = useQuery("getTweets", apiGetTweets);
  const handleClick = (item) => {
    setIsOpen(true);
    setTweet(item);
  };
  return (
    <Layout>
      <LayoutWithMenu>
        <DetailModal isOpen={isOpen} setIsOpen={setIsOpen} tweet={tweet} />
        {/* 글 목록 */}
        <div className="flex flex-col gap-5">
          {data?.data?.map((item, index) => (
            <div key={index} className="flex flex-col w-full border border-neutral-300 rounded-md">
              {/* 프로필 */}
              <div className="p-3">
                <Avatar size="size-10" username={item.writer.usename} />
              </div>
              {/* 그림 */}
              <div onClick={() => handleClick(item)} className="w-full aspect-video bg-red-100 cursor-pointer">
                <img src={item.photo} alt="tweetsphoto" className="w-full h-full object-cover object-center" />
              </div>
              {/* 내용 / 댓글 */}
              <div className="flex flex-col p-4">
                {/* 내용 */}
                <div className="flex flex-col">
                  {/* 내용 */}
                  <div>{item.content}</div>
                  {/* 작성날짜 */}
                  <div>{formatToTimeAgo(item.createdAt)}</div>
                </div>
                {/* 댓글과 댓글쓰기 */}
                <div className="flex flex-col gap-2">
                  {item?.comments?.map((comment, index) => (
                    <CommentView key={index} comment={comment} />
                  ))}
                  {/* 댓글쓰기 */}
                  <CommentForm tweetId={item._id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </LayoutWithMenu>
    </Layout>
  );
}
