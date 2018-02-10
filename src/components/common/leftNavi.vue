<template>
  <div class="left_navi">
    <ul>
      <li>
        <i class="icon iconfont icon-31goumaichongzhi"></i>
        <div>收银</div>
      </li>

      <li>
        <i class="icon iconfont icon-dianpu"></i>
        <div>店铺</div>
      </li>

      <li>
        <i class="icon iconfont icon-hanbao"></i>
        <div>商品</div>
      </li>

      <li>
        <i class="icon iconfont icon-huiyuanqia"></i>
        <div>会员</div>
      </li>

      <li>
        <i class="icon iconfont icon-zuanshi"></i>
        <div>统计</div>
      </li>

      <li>
        <i class="icon iconfont icon-gongnengjianyi"></i>
        <div>设置</div>
      </li>


    </ul>
  </div>
</template>

<script>
  export default {
    name: 'left_navi',
    data() {
      return {

      }
    }
  }
</script>

<style lang="less" scoped>
  .left_navi{
    color: #ffffff;
    font-size: 10px;
    height: 100%;
    width: 5%;
    background-color: #1D8CE0;
    float: left;
    .iconfont{
      font-size: 24px;
    }
    ul{
      padding: 0;
      margin: 0;
      li{
        list-style: none;
        text-align: center;
        border-bottom: 1px solid #20a0ff;
        padding: 10px;
      }
    }
  }

</style>
