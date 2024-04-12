import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { apiPostCommentCreate } from "../api";

export default function CommentForm({ tweetId }) {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm();
  const { mutate } = useMutation(apiPostCommentCreate, {
    onSuccess: async (data) => {
      if (data.result) {
        reset();
        await queryClient.invalidateQueries("getTweets");
      }
    },
  });
  const onValid = (data) => {
    mutate({ data, tweetId });
  };
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input {...register("comments")} className="input-custom" type="text" placeholder="Add a Comment..." />
    </form>
  );
}
