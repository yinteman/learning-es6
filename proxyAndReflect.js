/**
 * 直接使用例子...后期会进行补充
 */

{
  function validator(target,validator){
    return new Proxy(target,{
      _validator:validator,
      set(target,key,value,proxy){
        if(target.hasOwnProperty(key)){
          let vali = this._validator[key]
          if(!!vali(value)){
            return Reflect.set(target , key ,value ,proxy)
          }
        }
        console.log('wrong');
        return false
      }
    })
  }
const personValidator ={
  name(val){
    return typeof val == 'string'
  },
  age(val){
    return typeof val == 'number' && val > 18;
  }
}

class Person {
  constructor(name,age) {
    this.name = name;
    this.age = age;
    return validator(this,personValidator)
  }
}

//初识话的时候好像没有什么用.........
let person = new Person('lilei',12);
console.log(person);

console.log(person.name = 'kemo') ;
console.log(person.age = 30);
console.log(person);
}
