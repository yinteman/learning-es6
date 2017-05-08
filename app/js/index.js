import './class/setAndMap'
{
let test1= ('a1a2a3').match(/a\d/g);
let test2= ('a1a2a3').match(/a\d/gy);
let test3= ('a1a2a3').match(/a\d/y);
console.log(test3);
/*console.log(`\u{20007}`)
console.log('𠀇𠀇'.match(/𠀇/))*/
console.log('a',`\u20BB7`);
console.log('a1',`\u{20BB7}`);
}
/*
遍历器 for(let code of str){
  使用新增加的遍历器，可以访问到unicode-16的字符
}
 */
{
var total = 30;
var msg = passtru1`The total is ${total} (${total *1.05} with tax)` ;
//passtru的写法和
function passtru(literals){
  console.log(arguments); //arguments [array[3] , 30 , 31.5]
  var res = '' ,i = 0;
  while(i <literals.length){
    res += literals[i++];
    if(i < arguments.length){
      res += arguments[i]
    }
    }
      return res
  }

  function passtru1(literals,...values){
    console.log(values);
    let res ='';
    for(var index = 0 ;index < values.length ;index++){
      res += literals[index] + values[index]
    }
    res += literals[index];
    return res
  }

  console.log(msg);
}
