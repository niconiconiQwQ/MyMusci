// let lineNo = 0; //当前行
// let C_pos = 6; //C位
// let offset = -20; //滚动距离（应等于行高）
// let audio = document.getElementById("audio"); //播放器
// let ul = document.getElementById("lyric"); //歌词容器列表
//高亮显示歌词当前行及文字滚动控制，行号为lineNo
// function lineHigh() {
//   var lis = ul.getElementsByTagName("li"); //歌词数组
//   if (lineNo > 0) {
//     lis[lineNo - 1].removeAttribute("class"); //去掉上一行的高亮样式
//   }
//   lis[lineNo].className = "lineHigh"; //高亮显示当前行
//   //文字滚动
//   if (lineNo > C_pos) {
//     ul.style.transform = "translateY(" + (lineNo - C_pos) * offset + "px)"; //整体向上滚动一行高度
//   }
// }
//滚回到开头，用于播放结束时
// function goback() {
//   document.querySelector("#lyric .lineHigh").removeAttribute("class");
//   ul.style.transform = "translateY(0)";
//   lineNo = 0;
// }
//监听播放器的timeupdate事件，实现文字与音频播放同步
// audio.ontimeupdate = function () {
//   if (lineNo == oLRC.ms.length) return;
//   var curTime = audio.currentTime; //播放器时间
//   if (parseFloat(oLRC.ms[lineNo].t) <= curTime) {
//     lineHigh(); //高亮当前行
//     lineNo++;
//   }
// };
//取消之前所有高亮
// function lineHigh2() {
//   var lis = ul.getElementsByTagName("li"); //歌词数组
//   for (var i = 0; i < lis.length; i++) {
//     var name = lis[i].className;
//     if (name != null) lis[i].removeAttribute("class"); //去掉高亮样式
//   }
// }
//跳跃播放时，歌词回滚到对应位置
// audio.onseeked = function () {
//   var curTime = audio.currentTime; //播放器时间
//   for (i = 0; i < oLRC.ms.length; i++) {
//     if (oLRC.ms[i].t <= curTime) {
//     } else {
//       lineHigh2(); //取消之前所有高亮
//       lineNo = i;
//       lineHigh(); //高亮当前行
//       break;
//     }
//   }
// };
/*
function lineHigh(b)  //次函数加一个参数，里面有一部分要这样子修改：
//文字滚动
		if(b){
			ul.style.transform = "translateY("+(lineNo-C_pos)*offset+"px)"; //整体向上滚动一行高度
		}else{
			if(lineNo>C_pos){
				ul.style.transform = "translateY("+(lineNo-C_pos)*offset+"px)"; //整体向上滚动一行高度
			}
		}
//然后在audio.ontimeupdate = function ()  函数和audio.onseeked = function() 函数 里面发别修改lineHigh(false)   和 lineHigh(true)
*/
//监听播放器的ended事件，播放结束时回滚歌词
// audio.onended = function () {
//   goback(); //回滚歌词
// };
// 格式化歌词
export const createLrcObj = (lrc = "") => {
  if (lrc.length == 0) return;
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
