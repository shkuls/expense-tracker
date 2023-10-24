export function useGetUser() {

const userInfo = JSON.parse(localStorage.getItem("auth"));
  return userInfo
}
