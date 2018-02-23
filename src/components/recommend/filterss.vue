<template>
  <div v-show="isShow">
    <div class="box">
      <h2>子页面</h2>
      <div class="con">
        <div class="cover-header">
          <span class="old">旧数据</span>
          <span class="new">新数据</span>
        </div>
        <div class="cover-con" v-for="(item,index) in sendDetail.import_failure_fields" :key="index">
          <!-- 老数据 -->
          <div class="info old-info">
            <p>
              <span>
                {{item.field_name + ' : ' + item.old_data}}
              </span>
            </p>
          </div>
          <!-- 新数据 -->
          <div class="info new-info">
            <p>
              <span>
                {{item.field_name + ' : ' + item.new_data}}
              </span>
            </p>
          </div>
        </div>
        <input type="checkbox" :checked="isCheck">批量覆盖</input>&nbsp;&nbsp;&nbsp;&nbsp;
        <button @click="coverBtn">覆盖</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        isCheck: false
      }
    },
    props: ['isShow', 'sendDetail'],
    methods: {
      coverBtn () {
        this.$emit('coverBtn', this.isCheck)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/less">
.box {
  position: absolute
  width :100%
  height: 100%
  background #fff
  top:42px
  color:black
  .con {
    width: 500px
    height 600px
    background: gray
       .cover-data {
        width: 600px;
        height: 300px;
        overflow-y: auto;
        overflow-x: hidden;
        border: 1px solid #eaeaea;
        margin: 0 auto;
        margin-bottom: 30px;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          border-left: 1px solid #eaeaea;
          height: 100%;
        }
        .cover-header {
          border-bottom: 1px solid #eaeaea;
          height: 46px;
          line-height: 46px;
          display: flex;
          span {
            flex: 1;
            width: 220px;
            margin-left: 52px;
            text-align: left;
          }
        }
        .cover-con {
          display: flex;
          .new-info {
            width: 300px;
          }
          .info {
            flex: 1;
            p {
              width: 220px;
              margin-left: 52px;
              text-align: left;
              line-height: 40px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              word-wrap: break-word;
              span {
                line-height: 20px; // width: 240px;
                display: inline-block;
              }
            }
          }
        }
     }
  }
}
</style>