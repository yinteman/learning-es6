{
  /*
Array。from 最好的就是有两点特性
1.NodeList 的转换
2.遍历
 */
let li = document.querySelectorAll('li');
let liArr = Array.from(li);
//console.log(liArr);
let liArr2 =[...li]
let obj={
  0:1,
  1:1,
  2:1,

  length:3
}

let objArr = Array.from(obj,x=>x+1);
let objArr1 =[...obj]
console.log(objArr);
}
{
  /*
fill() .keys(),.values,.entries()
   */
  let objArr = []
for(let [index,val] of ['1','cs','bs'].entries()){
  console.log(index + ':'+val);
}
console.log(Object.prototype.toString.call(objArr));
}
