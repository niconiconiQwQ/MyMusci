import dayjs from "dayjs";
// 时间戳格式化
export const timeFormat = (num) => dayjs(num);
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
export const formatTxt = (txt = []) => txt.split("\n");
// 播放时间(毫秒)格式化
export const formatPlayTime = (time) => {
  let seconds = time / 1000; // 换成秒
  let m = parseInt(seconds / 60); // 分钟
  let s = parseInt(seconds % 60); // 剩余秒
  return `${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`;
};
// 格式化粉丝数量
export const formatFansNum = (num) => {
  let tempNum = num;
  if (num > 10000) {
    tempNum = (num / 10000).toFixed(1) + "万";
  }
  return tempNum;
};
// 格式化歌曲的序号
export const formatIndex = (num) => (num > 9 ? num : "0" + num);

// 时间戳转化为 xxxx年xx月xx日 xx时xx分xx秒
export const formatTime = (time) =>
  dayjs(time).format("YYYY年MM月DD日 HH:mm:ss");
// 时间戳转化为 xxxx-xx-xx
export const formatTime2 = (time) => dayjs(time).format("YYYY-MM-DD");
// 把秒转换为分钟
export const formatSecond = (num) => {
  let m = parseInt(num / 60);
  let s = parseInt(num) % 60;
  return `${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`;
};
// 格式化歌词
export const createLrcObj = (lrc = "") => {
  if (lrc.length == 0) return {};
  // 把LRC歌词解析为JS对象
  // 初始化对象
  let oLRC = {
    ti: "", //歌曲名
    ar: "", //演唱者
    al: "", //专辑名
    by: "", //歌词制作人
    offset: 0, //时间补偿值，单位毫秒，用于调整歌词整体位置
    ms: [], //歌词数组{t:时间,c:歌词}
  };
  // console.log(lrc);
  let lrcs = lrc.split("\n"); //用回车拆分成数组
  for (let el of lrcs) {
    //遍历歌词数组
    el = el.replace(/(^\s*)|(\s*$)/g, ""); //去除前后空格
    let t = el.substring(el.indexOf("[") + 1, el.indexOf("]")); //取[]间的内容
    let s = t.split(":"); //分离:前后文字
    if (isNaN(parseInt(s[0]))) {
      //不是数值
      for (let i in oLRC) {
        if (i != "ms" && i == s[0].toLowerCase()) {
          oLRC[i] = s[1];
        }
      }
    } else {
      //是数值
      let arr = el.match(/\[(\d+:.+?)\]/g); //提取时间字段，可能有多个
      let start = 0;
      for (let k in arr) {
        start += arr[k].length; //计算歌词位置
      }
      let content = el.substring(start); //获取歌词内容
      if (content.length > 0) {
        for (let k in arr) {
          let t = arr[k].substring(1, arr[k].length - 1); //取[]间的内容
          let s = t.split(":"); //分离:前后文字
          oLRC.ms.push({
            //对象{t:时间,c:歌词}加入ms数组
            t: (parseFloat(s[0]) * 60 + parseFloat(s[1])).toFixed(3),
            c: content,
          });
        }
      }
    }
  }
  oLRC.ms.sort(function (a, b) {
    //按时间顺序排序
    return a.t - b.t;
  });
  return oLRC;
};