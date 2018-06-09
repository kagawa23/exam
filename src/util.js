import Nebpay from "nebpay.js"
const nebPay = new Nebpay();

export default class Utils {
    constructor(){
        this.dappAddress = 'n21GgoSLHBRuhdBVd2eHRk65FYzZ3kBVh4k';
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
}