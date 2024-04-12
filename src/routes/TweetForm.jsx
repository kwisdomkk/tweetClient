import { useState } from "react";
import Avatar from "../components/Avatar";
import Layout from "../components/Layout";
import LayoutWithMenu from "../components/LayoutWithMenu";
import { FaPhotoVideo } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { apiPostTweetCreate } from "../api";
import { useNavigate } from "react-router-dom";

export default function TweetForm() {
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  const onFileChange = (e) => {
    const {
      target: { files },
    } = e;
    console.log(files);
    if (files && files.length === 1) {
      setFile(files[0]);
      const url = URL.createObjectURL(files[0]);
      setPreview(url);
    }
  };
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { mutate } = useMutation(apiPostTweetCreate, {
    onSuccess: (data) => {
      console.log(data);
      if (data.result) {
        navigate("/");
      }
    },
  });
  const onValid = (formData) => {
    mutate({ formData, file });
  };
  return (
    <Layout>
      <LayoutWithMenu>
        <div className="flex flex-col border border-neutral-300 rounded-md shadow-sm w-full">
          {/* 프로필 */}
          <div className="p-2">
            <Avatar size="size-10" />
          </div>
          {/* 그림 input box */}
          <form onSubmit={handleSubmit(onValid)} className="flex flex-col gap-4 w-full">
            <div className="w-full">
              <label htmlFor="file" className="w-full border-2 border-dashed border-blue-500 flex flex-col justify-center items-center aspect-video text-neutral-300 bg-cover bg-center" style={{ backgroundImage: `url(${preview})` }}>
                {preview ? null : (
                  <>
                    <FaPhotoVideo size="60" />
                    <span className="text-neutral-500 text-sm">사진을 추가해 주세요</span>
                  </>
                )}
              </label>
              <input onChange={onFileChange} accept="image/*" id="file" type="file" className="hidden" />
            </div>
            <textarea {...register("content")} className="input-custom rounded-sm h-40" placeholder="내용을 작성해 주세요"></textarea>
            <button className="button-custom rounded-md">글작성하기</button>
          </form>
          {/* 내용 쓰기 */}
        </div>
      </LayoutWithMenu>
    </Layout>
  );
}
