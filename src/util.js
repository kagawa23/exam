import Nebpay from "nebpay.js"
const nebPay = new Nebpay();

export default class Utils {
    constructor(){
       // this.dappAddress = 'n1wA5nsc1tapezGTytgqCAyk3ku6n1hdDVF';
       this.dappAddress = 'n1r86LknnyRZtmzcQgr5DiqybzLbFiGeiDV'
    }
    async get(callFunction,args){
        return new Promise((resolve,rej) => {
            let to = this.dappAddress;
            let value = '0';
          //  let callFunction = 'save';
            let callArgs = JSON.stringify(args);
            //使用nebpay的call接口去调用合约
            nebPay.simulateCall(to, value, callFunction, callArgs, {
              listener: (res) => {
                console.log('listener', res)
                resolve(res);
              }
            });
        });
    }
    async post(callFunction,args){
        return new Promise((resolve,rej) => {
            let to = this.dappAddress;
            let value = '0';
            let callArgs = JSON.stringify(args);

            //使用nebpay的call接口去调用合约
            nebPay.call(to, value, callFunction, callArgs, {
              listener: (res) => {
                console.log('listener', res)
                resolve(res);
              }
            });
        });
    }
    async query(transId){
        return new Promise((resolve,rej) => {
            //使用nebpay的call接口去调用合约
            nebPay.queryPayInfo(transId)
            .then(function (resp) {
                resolve(JSON.parse(resp));
            })
            .catch(function (err) {
                console.log(err);
                rej(err);
            });
        });
    }

    postSync(callFunction,args){
        let to = this.dappAddress;
        let value = '0';
        let callArgs = JSON.stringify(args);
        return nebPay.call(to, value, callFunction, callArgs);
    }
}