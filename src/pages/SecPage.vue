<template>
    <section id="secondPage">
      <h1>2018星云高考</h1>
      <h2>{{ quiz[cur].type }}试卷</h2>
      <div class="row">
        <div class="col" id="question">{{ quiz[cur].question }}</div>
      </div>
      <div class="radio">
        <label>
    <input type="radio" name="optionsRadios" id="optionsRadios1" value=0 checked v-model="picked">
    {{ quiz[cur].answers[0] }}
  </label>
      </div>
      <div class="radio">
        <label>
    <input type="radio" name="optionsRadios" id="optionsRadios2" value=1 v-model="picked">
    {{ quiz[cur].answers[1] }}
  </label>
      </div>
      <div class="radio">
        <label>
    <input type="radio" name="optionsRadios" id="optionsRadios3" value=2 v-model="picked">
        {{ quiz[cur].answers[2] }}
  </label>
  </div>
        <div class="radio">
        <label>
    <input type="radio" name="optionsRadios" id="optionsRadios3" value=3 v-model="picked">
        {{ quiz[cur].answers[3] }}
  </label>
      <div class="row justify-content-center">
        <div class="col col-8  col-sm-8 .col-md-8 .col-lg-8 .col-xl-8">
          <button v-if="cur<2" type="button" id="startBtn" class="btn btn-info" @click="answers[cur++]=picked;picked=0;">下一科目</button>
          <button v-if="cur==2" type="button" id="startBtn" class="btn btn-info" @click="submit" >交卷</button>
        </div>
      </div>      
      </div>
      <component-modal @close="loading=false" v-if="loading" title="区块确认中" content="后台正在批改试卷，请稍后"></component-modal>
    </section>
</template>

<script>
  import Utils from '../util';
  import modal from '../component/modal';
const  utils= new Utils;
  const QUIZ = [{"question":"星云链众筹时间?","answers":["A.2015年","B.2016年","C.2017年","D.2018年"],"type":"语文"},{"question":"NAS的总发行量","answers":["A.1亿","B.1千万","C.2百万","D.3千万"],"type":"数学"},{"question":"下列哪个选项星云的正确英文拼写","answers":["A.xingyun","B.nebulas","C.newbalance","D.galaxy"],"type":"英语"}];
  export default {
    components: {
      'component-modal':modal,
    },
    data:()=> ({
      quiz:QUIZ,
      answers:[0,0,0],
      cur:0,
      picked:0,
      loading:false,
    }),
    methods:{
      submit:async function(){
        this.loading = true;
        this.answers[2]=this.picked
        const answers = this.answers;
        const ans = [2,0,1];
        let counter = 0;
        for(let i=0;i<3;i++){
          if(answers[i] == ans[i]){
            counter++;
          }
        }
        const score = Number.parseFloat(counter/3).toFixed(2);
        const hash =  await utils.postSync("save",[score]);
        let times = 0;

       let timer = setInterval(async ()=>{
         let re = await utils.query(hash);
         times ++;
         if(times === 10 || re.code === 0){
           clearInterval(timer);
           this.loading = false;
          this.$router.push('./cert');
         }
       },10000)
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "../res/index.scss";
</style>