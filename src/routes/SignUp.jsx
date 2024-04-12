import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Socials from "../components/Socials";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { apiPostUserRegister } from "../api";

export default function SignUp() {
  const { mutate } = useMutation(apiPostUserRegister);
  const { register, handleSubmit } = useForm();
  const onValid = (data) => mutate(data);
  return (
    <Layout>
      <div className="flex flex-col gap-5 py-16">
        {/* 타이틀 */}
        <div className="text-blue-500 text-2xl font-bold text-center">
          영진트윗 회원가입
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
            {...register("email")}
            className="input-custom"
            type="text"
            placeholder="이메일"
          />
          <input
            {...register("mobile")}
            className="input-custom"
            type="text"
            placeholder="모바일"
          />
          <input
            {...register("password")}
            className="input-custom"
            type="text"
            placeholder="패스워드"
          />
          <input
            {...register("password2")}
            className="input-custom"
            type="text"
            placeholder="패스워드 확인"
          />
          <button className="button-custom">회원가입</button>
        </form>
        {/* 소셜회원가입 */}
        <Socials />
        {/* 이동 로그인 or 회원가입 */}
        <div>
          이미 회원이라면{" "}
          <Link
            className="text-sm transition hover:underline hover:text-blue-500"
            to="/login"
          >
            로그인
          </Link>
        </div>
      </div>
    </Layout>
  );
}
