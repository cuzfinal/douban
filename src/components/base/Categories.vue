<template>
    <ul class="type-list">
        <li v-for="(item, index) in items" :key="index" :class="{ borderbtm: index>=categories.length-2}">
            <router-link :to="`${route}/${index}`">{{ item }}</router-link>
            <span>></span>
        </li>
    </ul>
</template>
<script>
export default {
    name:'Categories',
    props: {
        categories: Array,
        route: String
    },
    data() {
        return {
            items: []
        }
    },
    mounted() {
        this.items = this.categories;
        if(this.categories && this.categories.length % 2 !== 0) {
            this.items.push('')
        }
    }
}
</script>
<style lang="less">
.type-list{
    list-style: none;
    overflow: hidden;
    margin: 0.8rem 0 0 0;
    padding: 0 0 0 0.8rem;
    li{
      float: left;
      width: 50%;
      border-top: solid 1px #eee;
      border-right: solid 1px #eee;
      box-sizing: border-box;
      height: 2.64rem;
      a{
        display: inline-block;
        width: 100%;
        margin-right: -20%;
        line-height: 2.64rem;
        padding-left: 0.8rem;
      }
      span{
          float: right;
          color: rgba(170, 170, 170, 0.45);
          line-height: 1.32rem;
          padding-right: 0.8rem;
          transform: scaleY(2);
          transform-origin: 0 0;
          font-weight: lighter;
      }
    }
    a{
        color: #42bd56;
        text-decoration: none;
    }
  }
</style>
