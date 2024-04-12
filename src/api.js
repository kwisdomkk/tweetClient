const BASE_URL = process.env.REACT_APP_BASE_URL;

// 회원가입
export async function apiPostUserRegister(data) {
  try {
    return await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

// 로그인
export async function apiPostUserLogin(data) {
  // console.log(data);
  try {
    return await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

export async function apiGetLoginSuccess() {
  try {
    return await fetch(`${BASE_URL}/users/login-success`, {
      method: "GET",
      credentials: "include",
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

// 트윗 글쓰기
export async function apiPostTweetCreate({ formData, file }) {
  try {
    const data = new FormData();
    data.append("formData", formData.content);
    data.append("file", file);
    return await fetch(`${BASE_URL}/tweets/create`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      credentials: "include",
      body: data,
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

// 트윗 불러오기
export async function apiGetTweets() {
  try {
    return await fetch(`${BASE_URL}/tweets`, {
      method: "GET",
      credentials: "include",
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

//트윗 1개 불러오기
export async function apiGetTweet(props) {
  const tweetId = props[1].tweetId;
  try {
    return await fetch(`${BASE_URL}/tweets/${tweetId}`).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

// 댓글 쓰기
export async function apiPostCommentCreate({ data, tweetId }) {
  try {
    return await fetch(`${BASE_URL}/tweets/${tweetId}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    }).then((res) => res.json());
  } catch (e) {
    console.log(e);
  }
}
