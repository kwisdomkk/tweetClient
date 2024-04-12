export default function Socials() {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-full h-px bg-neutral-300" />
      <div className="flex flex-col gap-3">
        {/* 카카오로그인 */}
        <div className="button-custom bg-yellow-400 text-black hover:bg-yellow-300">
          카카오 로그인
        </div>
        {/* 구글로그인 */}
        <div className="button-custom bg-red-500 hover:bg-red-400">
          구글 로그인
        </div>
      </div>
    </div>
  );
}
