import axios from "axios";

export async function login(userDetails) {
  const res = await axios.post(
    "http://localhost:3000/api/users/login",
    userDetails,
    {
      withCredentials: true, // 🔥 Ensure cookies are included
    }
  );
  return res.data;
}
export async function signup(formData) {
  const res = await axios.post(
    "http://localhost:3000/api/users/signup",
    formData
  );
  return res.data;
}

export async function forgotPassword(email) {
  const res = await axios.post(
    "http://localhost:3000/api/users/forgotPassword",
    { email }
  );
  return res.data;
}

export async function resetPassword({ email, token, newPassword }) {
  const res = await axios.post(
    `http://localhost:3000/api/users/resetPassword/${token}`,
    { email, newPassword }
  );
  return res.data;
}

export async function fetchUser() {
  const res = await axios.get("http://localhost:3000/auth/google/callback", {
    withCredentials: true,
  });
  return res.data;
}

export async function googleLogin() {
  window.location.href = "http://localhost:3000/auth/google"; // Redirect to Google OAuth
}