import dayjs from "dayjs";
// 时间戳格式化
export const timeFormat = (num) => {
  let res = dayjs(num);
  return res;
};
// 播放量 格式化
export const formatNumber = (num) => {
  let w = 10000;
  let y = 100000000;
  if (num < w) {
    return num + "";
  } else if (num < w * w) {
    return parseInt(num / w) + "万";
  } else {
    return parseInt(num / y) + "亿";
  }
};
// 歌手描述文字格式化
export const formatTxt = (txt) => {
  return txt.split("\n");
};
// 播放时间(毫秒)格式化
export const formatPlayTime = (time) => {
  let seconds = time / 1000; // 换成秒
  let m = parseInt(seconds / 60); // 分钟
  let s = seconds % 60; // 剩余秒
  return `${m < 10 ? "0" + m : m}:${s}`;
};
// 格式化粉丝数量
export const formatFansNum = (num) => {
  let tempNum = num;
  if (num > 10000) {
    tempNum = (num / 10000).toFixed(1) + "万";
  }
  return tempNum;
};
