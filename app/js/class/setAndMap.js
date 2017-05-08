{
let a = new Map();
let o = {p:'Hello'}

a.set(o,'content')
console.log(a);

}
{
  let a =[1,2,3],b=[1,3,5] ,val1=[2,3] ,val2={name:'a'} ;
  let map = new Map([[a,val1] ,[b ,val2]])
  console.log(map);
}
{
  const map = new Map();
  let k1 = 'abc';
  map.set(k1,2);
  map.set('abc',3);
  console.log( 'k1' , map.get(k1));
  console.log( 'abc' , map.get('abc'));

  let arr1=['122'],arr2=['122']
  map.set(arr1,'123');
console.log('arr2',map.get(arr2));
console.log('[122]',map.get(['122']));
}
{
  let arr =[[1,'a'],[2,'b'],[3,'c']]

  let map0= new Map(arr);
  let map1 = new Map(
    [...map0].map(([k,v])=>[k*2,v+'$'] )
  )
//es5 [...map0].map(function(item){  由于item是[k,v]的数组对象
//将item写成[k,v]，其实是解析赋值 k = item[0] ,v = item[1]
//})})
  console.log(map1);
  let map2 = new Map(
    [...map0].filter(([k,v])=>k>1)
  )
  console.log(map2);
}
{
  /*
Map 转为对象 前提是所有Map的健都是字符串，他才可以转为对象
   */
  function strMapToObject(strMap){
    let obj = Object.create(null);
    for(let [k ,v] of strMap){
      obj[k] = v
    }
    return obj
  }

  let map1 = new Map();
  map1.set('1','a').set('2','b')
  console.log(strMapToObject(map1));
  /*
对象转为Map
   */

  function objToStrMap(obj){
    let strMap = new Map();
    for(let k of Object.keys(obj)){
      strMap.set(k,obj[k])
    }
    return strMap
  }
  /*
Map转为Json ，map转为Json需要区分两种情况。
一种情况是Map的健名都是字符串，转换为Json对象 :实际上时先将strMap转换成对象，然后在变为Json
第二章Map的健名有非字符串，这是转换为数组Json
   */
  function strMapToJson(strMap){
    return JSON.stringify(strMapToObject(strMap))
  }
  console.log(strMapToJson(map1)); // {"1":"a" ,"2":"b"}
 function mapToArrayJson(map){
   return JSON.stringify([...map]) //"[[true,7],[{"foo":3}]]"
 }

  /*
  JSON.stringify() 方法将一个JavaScript值转换为一个JSON字符串，
  如果指定了一个replacer函数，则可以替换值，或者如果指定了一个replacer数组，可选地仅包括指定的属性。
   */
 JSON.stringify({});                        // '{}'
 JSON.stringify(true);                      // 'true'
 JSON.stringify("foo");                     // '"foo"'
 JSON.stringify([1, "false", false]);       // '[1,"false",false]'
 JSON.stringify({ x: 5 });                  // '{"x":5}'
 JSON.stringify({x: 5, y: 6});               // "{"x":5,"y":6}"

//undefined、任意的函数以及 symbol 值，在序列化过程中会被忽略（出现在非数组对象的属性值中时）或者被转换成 null（出现在数组中时）。
JSON.stringify({x: undefined, y: Object, z: Symbol("")}); // '{}'

/**
 * Json转换为Map
 * 正常情况下，所有的健名都是字符串
 * JSON.parse() 方法解析一个JSON字符串，构造由字符串描述的JavaScript值或对象。
 * 但是，有一种特殊情况，整个 JSON 就是一个数组，
 * 且每个数组成员本身，又是一个有两个成员的数组。
 * 这时，它可以一一对应地转为Map。这往往是数组转为 JSON 的逆操作。
 */

function jsonToStrMap(jsonstr){
  return objToStrMap(JSON.parse(jsonstr))
}
//前提是jsonstr的格式需要满足Map构造对象'[[true,7],[{"foo":3},["abc"]]]'
function jsonToMap(jsonstr){
  return new Map(JSON.parse(jsonstr))
}
let arrayJson ='[[true,7],[{"foo":3},["abc"]]]'
console.log(jsonToMap(arrayJson));
}

{
  let s1 = new Set();
  let o={1:'a'}
  s1.add(o)
  console.log(s1.has(o));
}
