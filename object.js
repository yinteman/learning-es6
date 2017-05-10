{
  //ES5xia
  console.log(({} == false) ? true :false) ;//空对象的数值转化应该为1
  console.log(Boolean({}));

  let obj1={a:{b:1}}
  var obj2 = Object.assign({},obj1)
  console.log(obj2);
}
{
  let obj={
    foo:"123",

  }
let descriptor = Object.getOwnPropertyDescriptor(obj,'foo');
console.log(descriptor);
}
{
  let testLength = function (a,b,c) {
    return [a,b,c]
  }
  let testLength2 = function (a,...b) {
    return b
  }
  let testLength3 = function (...arg) {
    return arg
  }

let len1 =  testLength.length;
let len2 =  testLength2.length;
let len3 =  testLength3.length;
console.log('1',len1,testLength(1,2,3));
console.log('2',len2,testLength2(1,2,3));
console.log('3',len3,testLength3(1,2,3));
}
