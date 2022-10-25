// 存储,获取,清除cookie
export const handleCookie = (method, cookie) => {
  if (method === "set") {
    localStorage.setitem("cookie", cookie);
  } else if (method === "get") {
    return localStorage.getItem("cookie");
  } else {
    localStorage.removeItem("cookie");
  }
};
