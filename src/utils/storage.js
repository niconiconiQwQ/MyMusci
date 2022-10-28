import cookie from "cookiejs";
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
// 批量设置登录后返回的cookies字符串，存到浏览器的cookie中
export const setAllCookies = (cookieStr) => {
  let CookieArr = cookieStr.split(";");
  let obj = {};
  for (let item of CookieArr) {
    let res = item.split("=");
    if (res.length == 2) {
      obj[res[0].trim()] = res[1];
    }
  }
  cookie.set(obj);
};
