<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" class="pos_order" id="order_list">
        <el-tabs>
          <el-tab-pane label="點餐">
            <el-table border style="width:100%" :data="tableData">
              <el-table-column prop="goodsName" label="商品名稱"/>
              <el-table-column prop="count" label="數量" width="70"/>
              <el-table-column prop="price" label="金額" width="70"/>
              <el-table-column label="操作" width="100" fixed="right">
                <div slot-scope="scope">
                  <el-button type="text" size="small" @click="delSingleGoods(scope.row)">刪除</el-button>
                  <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                </div>
              </el-table-column>
            </el-table>
            <div class="totaDiv">
              數量：{{ totalCount }}<i style="padding:20px;"></i>金額：{{ totalMoney }}
            </div>
            <div class="div_btn">
              <el-button type="warning" @click="$message.info('Not yet implement')">掛單</el-button>
              <el-button type="danger" @click="delAllGoods()">刪除</el-button>
              <el-button type="success" @click="checkout()">結賬</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="掛單">掛單</el-tab-pane>
          <el-tab-pane label="外賣">外賣</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17" class="pos_order" id="bibi_list">
        <div class="ofter_goods">
          <div class="tittle">常用商品</div>
          <div class="ofter_goods_list">
            <ul>
              <li v-for="oftenGood in oftenGoods" :key="oftenGood.id" @click="addOrderList(oftenGood)">
                <span>{{ oftenGood.goodsName }}</span>
                <span class="o_price">￥{{ oftenGood.price }}元</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="goods_type">
          <el-tabs>
            <el-tab-pane label="ALL">
              <div>
                <ul class='cookList'>
                  <li v-for="g   in type0Goods" :key="g.id" @click="addOrderList(g)">
                    <span class="foodImg"><img :src="g.goodsImg" width="100%"></span>
                    <span class="foodName">{{ g.goodsName }}</span>
                    <span class="foodPrice">￥{{ g.price }}元</span>
                  </li>
                  <li v-for="g1   in type1Goods" :key="g1.id" @click="addOrderList(g1)">
                    <span class="foodImg"><img :src="g1.goodsImg" width="100%"></span>
                    <span class="foodName">{{ g1.goodsName }}</span>
                    <span class="foodPrice">￥{{ g1.price }}元</span>
                  </li>
                  <li v-for="g2   in type2Goods" :key="g2.id" @click="addOrderList(g2)">
                    <span class="foodImg"><img :src="g2.goodsImg" width="100%"></span>
                    <span class="foodName">{{ g2.goodsName }}</span>
                    <span class="foodPrice">￥{{ g2.price }}元</span>
                  </li>
                  <li v-for="g3   in type3Goods" :key="g3.id" @click="addOrderList(g3)">
                    <span class="foodImg"><img :src="g3.goodsImg" width="100%"></span>
                    <span class="foodName">{{ g3.goodsName }}</span>
                    <span class="foodPrice">￥{{ g3.price }}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="漢堡">
              <div>
                <ul class='cookList'>
                  <li v-for="type0Good in type0Goods" :key="type0Good.id" @click="addOrderList(type0Good)">
                    <span class="foodImg"><img :src="type0Good.goodsImg" width="100%"></span>
                    <span class="foodName">{{ type0Good.goodsName }}</span>
                    <span class="foodPrice">￥{{ type0Good.price }}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="小食">
              <div>
                <ul class='cookList'>
                  <li v-for="type1Good in type1Goods" :key="type1Good.id" @click="addOrderList(type1Good)">
                    <span class="foodImg"><img :src="type1Good.goodsImg" width="100%"></span>
                    <span class="foodName">{{ type1Good.goodsName }}</span>
                    <span class="foodPrice">￥{{ type1Good.price }}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="飲料">
              <div>
                <ul class='cookList'>
                  <li v-for="type2Good in type2Goods" :key="type2Good.id" @click="addOrderList(type2Good)">
                    <span class="foodImg"><img :src="type2Good.goodsImg" width="100%"></span>
                    <span class="foodName">{{ type2Good.goodsName }}</span>
                    <span class="foodPrice">￥{{ type2Good.price }}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <div>
                <ul class='cookList'>
                  <li v-for="type3Good in type3Goods" :key="type3Good.id" @click="addOrderList(type3Good)">
                    <span class="foodImg"><img :src="type3Good.goodsImg" width="100%"></span>
                    <span class="foodName">{{ type3Good.goodsName }}</span>
                    <span class="foodPrice">￥{{ type3Good.price }}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'pos',
    data() {
      return {
        tableData: [],
        oftenGoods: [],
        type0Goods: [],
        type1Goods: [],
        type2Goods: [],
        type3Goods: [],
        totalMoney: 0,
        totalCount: 0
      }
    },
    created() {
      axios.get('http://jspang.com/DemoApi/oftenGoods.php')
        .then(Response => {
          // console.log(Response);
          this.oftenGoods = Response.data;
        })
        .catch(error => {
          // console.log(error);
          alert('網絡錯誤!');
        })

      axios.get('http://jspang.com/DemoApi/typeGoods.php')
        .then(Response => {
          // console.log(Response);
          this.type0Goods = Response.data[0];
          this.type1Goods = Response.data[1];
          this.type2Goods = Response.data[2];
          this.type3Goods = Response.data[3];
        })
        .catch(error => {
          // console.log(error);
          alert('網絡錯誤!');
        })
    },
    methods: {
      addOrderList(goods) {
        //商品是否已經存在於訂單列表
        let isHave = false;
        for (let i = 0; i < this.tableData.length; i++) {
          if (this.tableData[i].goodsId === goods.goodsId) {
            isHave = true;
          }
        }
        //根據判斷的值，進行業務邏輯
        if (isHave) {
          //改變商品列表中的數量
          let arr = this.tableData.filter(a => a.goodsId === goods.goodsId);
          arr[0].count++;
        } else {
          //不存在就推入數組
          let newGoods = {goodsId: goods.goodsId, goodsName: goods.goodsName, price: goods.price, count: 1};
          this.tableData.push(newGoods);
        }
        this.getAllMoney();
      },
      //刪除單個商品
      delSingleGoods(goods) {
        this.tableData = this.tableData.filter(o => o.goodsId !== goods.goodsId);
        this.getAllMoney();
      },
      //刪除所有商品
      delAllGoods() {
        this.tableData = [];
        this.totalCount = 0;
        this.totalMoney = 0;
        this.$message.warning('Empty Cart!!!');
      },
      //匯總數量和金額
      getAllMoney() {
        this.totalCount = 0;
        this.totalMoney = 0;
        if (this.tableData) {
          this.tableData.forEach((element) => {
            this.totalCount += element.count;
            this.totalMoney = this.totalMoney + (element.price * element.count);
          });
        }
      },
      checkout() {
        if (this.totalCount !== 0) {
          this.tableData = [];
          this.totalCount = 0;
          this.totalMoney = 0;
          this.$message({
            message: '結賬成功，感謝你又為店裡出了一份力!',
            type: 'success'
          });
        } else {
          this.$message.error('不能空結。老闆瞭解你急切的心情！');
        }
      }
    },
  }
</script>

<style lang="less" scoped>
  .pos_order {
    background-color: #F9FAFC;
    border-right: 1px solid #C0CCDA;
    padding: 0 5px;
    .div_btn {
      margin-top: 10px;
    }
    .ofter_goods {
      .tittle {
        height: 20px;
        border-bottom: 1px solid #D3dce6;
        background-color: #F9FAFC;
        padding: 10px;
        text-align: left;
      }
      .ofter_goods_list {
        ul {
          li {
            list-style: none;
            float: left;
            border: 1px solid #E5E9F2;
            padding: 10px;
            margin: 10px;
            background-color: #FFF;
            cursor: pointer;
            .o_price {
              color: #58B7FF;
            }
          }
        }
      }
    }
    .goods_type {
      clear: both;
    }
    .cookList li {
      list-style: none;
      width: 18%;
      border: 1px solid #E5E9F2;
      height: auto;
      overflow: hidden;
      background-color: #fff;
      padding: 2px;
      float: left;
      margin: 10px;
      cursor: pointer;
    }
    .cookList li span {
      display: block;
      float: left;
    }
    .foodImg {
      width: 40%;
    }
    .foodName {
      font-size: 18px;
      padding-left: 10px;
      color: brown;
    }
    .foodPrice {
      font-size: 16px;
      padding: 10px 0 0 10px;
    }
    .totaDiv {
      background-color: #fff;
      padding: 10px;
      border-bottom: 1px solid #D3dce6;
    }
  }
</style>


