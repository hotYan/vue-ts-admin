import http from "../request";

export const Login = (data: { username: string; password: string }) => {
  return http.post("/sme/light/v1/user/login", data);
};
export const Logout = () => {
  return http.post("/sme/light/v1/user/logout");
};
