<template>
  <div class="container">
    <div class="num-info">
      <ul>
        <li>
          <div>35</div>
          <div>动态</div>
        </li>
        <li>
          <div>390</div>
          <div>关注</div>
        </li>
        <li>
          <div>524</div>
          <div>粉丝</div>
        </li>
      </ul>
      <button>已签到</button>
    </div>
    <ul class="server">
      <li class="top-line">
        <div class="left">
          <span class="iconfont icon-huangjinhuiyuan0101-copy"></span>
          <span>我的会员</span>
        </div>

        <div class="right">
          <span>2023.01.01到期</span><span class="iconfont icon-right"></span>
        </div>
      </li>
      <li>
        <div class="left">
          <span class="iconfont icon-dengji"></span><span>等级</span>
        </div>
        <div class="right">
          <span>Lv.10</span><span class="iconfont icon-right"></span>
        </div>
      </li>
      <li>
        <div class="left">
          <span class="left iconfont icon-shouye"></span><span>商城</span>
        </div>
        <div class="right iconfont icon-right"></div>
      </li>
      <li class="top-line">
        <div class="left">
          <span class="left iconfont icon-wodeshoucang"></span
          ><span>个人信息设置</span>
        </div>
        <div class="right iconfont icon-right"></div>
      </li>
      <li>
        <div class="left">
          <span class="left iconfont icon-bangding"></span
          ><span>绑定社交账号</span>
        </div>
        <div class="right">
          <span class="iconfont icon-xinlang"></span
          ><span class="iconfont icon-right"></span>
        </div>
      </li>
      <li class="top-line">
        <div class="left">
          <span class="left iconfont icon-kefu"></span><span>我的客服</span>
        </div>
        <div class="right iconfont icon-right"></div>
      </li>
      <li class="top-line">
        <div class="left">
          <span class="left iconfont icon-tuichu"></span><span>退出登录</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.top-line {
  border-top: 1px solid #ededed;
}
.container {
  width: 280px;
  height: 400px;
  padding: 24px 18px 0px 20px;
  background-color: #fff;
  box-shadow: 0 0 6px rgb(35 173 222);
  .num-info {
    width: 100%;
    ul {
      display: flex;
      justify-content: space-around;
      color: #333333;
      li {
        cursor: pointer;
        text-align: center;
        div {
          &:nth-child(1) {
            font-size: 18px;
            font-weight: 700;
          }
          &:nth-child(2) {
            color: #666666;
            &:hover {
              color: #000;
            }
          }
        }
      }
    }
    button {
      display: block;
      width: 82px;
      height: 30px;
      border-radius: 30px;
      border: 1px solid #dedede;
      margin: 0 auto;
      color: #b7b7b7;
      margin: 10px auto;
      background-color: transparent;
    }
  }
  .server {
    margin-top: 10px;
    li {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0px 10px 0px;
      .left {
        display: flex;
        align-items: center;
        color: #373737;
        .iconfont {
          margin-right: 6px;
          font-size: 18px;
        }
      }
      .right {
        display: flex;
        align-items: center;
        color: #a6a6a6;
        .iconfont {
          font-size: 18px;
        }
      }
      &:hover {
        background-color: #f1f2f3;
      }
    }
  }
}
</style>