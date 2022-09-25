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
