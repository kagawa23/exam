<template>
    <section id="firstPage">
      <div id="blackboard" class="row justify-content-center">
        <div class="col col-10 col-sm-10 .col-md-8 .col-lg-8 ">如果给你一个机会</div>
        <div class="col col-12 col-sm-10 .col-md-8 .col-lg-8" id="repeat">重新高考</div>
        <div class="col col-10 col-sm-10 .col-md-8 .col-lg-8">你能上什么大学?</div>

      </div>
      <div class="row justify-content-center">
        <div class="col col-8  col-sm-8 .col-md-8 .col-lg-8 .col-xl-8">
          <button type="button" id="startBtn" class="btn btn-info" @click="participate">开始考试</button>
        </div>
      </div>
    </section>
</template>

<script>
//   import MainLayout from '../layouts/Main.vue'
import Utils from '../util';
const  utils= new Utils;
  export default {
    methods: {
      participate:async function(){
          var resp = await utils.post("participate", []);
          // console.log(resp);
           window.location = "./secondPage";
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "../res/index.scss";
</style>