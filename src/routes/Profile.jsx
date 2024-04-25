import { useLocation } from "react-router-dom";
import Avatar from "../components/Avatar";
import Layout from "../components/Layout";
import LayoutWithMenu from "../components/LayoutWithMenu";
import { useQuery } from "react-query";
import { apiGetProfileTweets } from "../api";

export default function Profile() {
  const {
    state: { avatar, id, username },
  } = useLocation();

  const { data } = useQuery(["getProfileTweet", { userId: id }], apiGetProfileTweets);
  console.log(data);
  return (
    <Layout>
      <LayoutWithMenu>
        <div className="flex flex-col">
          {/* 아바타 */}
          <div className="w-full h-40 flex justify-center items-center border-b">
            <Avatar avatar={avatar} username={username} size="size-10" />
          </div>
          {/* 포스트 목록 (3개의 컬럼) */}
          <div className="w-full h-full grid grid-cols-3 gap-2">
            {data?.data?.map((item, index) => (
              <div key={index} className="w-full aspect-square rounded">
                <img src={item.photo} alt="profile_image" />
              </div>
            ))}
          </div>
        </div>
      </LayoutWithMenu>
    </Layout>
  );
}
