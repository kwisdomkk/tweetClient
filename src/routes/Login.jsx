import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Socials from "../components/Socials";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { apiPostUserLogin } from "../api";

export default function Login() {
  const { mutate } = useMutation(apiPostUserLogin, {
    onSuccess: (data) => {
      console.log(data);
    },
  });
  const { register, handleSubmit } = useForm();
  const onValid = (data) => mutate(data);
  return (
    <Layout>
      <div className="flex flex-col gap-5 py-16">
        {/* 타이틀 */}
        <div className="text-blue-500 text-2xl font-bold text-center">
          영진트윗 로그인
        </div>
        {/* 폼 */}
        <form onSubmit={handleSubmit(onValid)} className="flex flex-col gap-4">
          <input
            {...register("username")}
            className="input-custom"
            type="text"
            placeholder="아이디"
          />
          <input
            {...register("password")}
            className="input-custom"
            type="text"
            placeholder="패스워드"
          />
          <button className="button-custom">로그인</button>
        </form>
        {/* 소셜회원가입 */}
        <Socials />
        {/* 이동 로그인 or 회원가입 */}
        <div>
          아직 회원이 아니라면{" "}
          <Link
            className="text-sm transition hover:underline hover:text-blue-500"
            to="/signup"
          >
            회원가입
          </Link>
        </div>
      </div>
    </Layout>
  );
}
