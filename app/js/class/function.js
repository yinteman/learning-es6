{
 let foo ='outer';
 function bar(func =x => foo){
   let foo ='inner';
   console.log(func())
 }
bar() ; // outer

}

{
  var x = 1;
  /**
   *
   * @param  {[type]} x             [作用域为参数作用域是和全局变量x不是同一作用域]
   * @param  {[type]} [y=function(] [和参数x是属于同一个作用域]
   * @return {[type]}               [description]
   */
  function foo(x,y=function(){
    x = 2;
  }){
    var x = 3; //这个地方是和foo的作用域，和第一个参数以及y都不在同一个作用域中
    y();
    console.log(x); //指向的是参数x = 3
  }
  foo(); //3
  console.log(x)
}
{
  var x = 1;
  function foo(x,y=function(){
    x = 2;
  }){
     x = 3;  //因为没有重新声明，x属于自由变量，指向最近的声明,即指向第一个参数x，
    y();
    console.log(x); //因此执行完y(),第一个参数x变为2，则打印出2
  }
  foo(); //2
  console.log(x)
}
{
  var arrList ={
    "0":"a",
    "1":"b",
    "2":"c",
    length:3
  }
  var arr=[...arrList];
  console.log(arr)
}
{
  //箭头函数的使用特例this
  function Timer(){
    this.s1 = 0 ;this.s2 = 0 ;
    setInterval(()=>this.s1++,1000)
    setInterval(function(){ this.s2++ },1000)
  }
  var timer = new Timer();
  setTimeout(()=>console.log('s1',timer.s1) , 3100)
  setTimeout(()=>console.log('s2',timer.s2) , 3100)
}
{
  var ul = document.getElementById('ul');
  var handler = {
    id:"123",
    init:function(){
      ul.addEventListener('click',event =>  this.doSomthing(event.type) ,false)
    },
    doSomthing:function(type){
      console.log(type + ':for:'+this.id );
    }
  }
}
{
var key =  (function(){
    return [
      (()=>  this.x).bind({x:'keys'})()
    ]
  }).call({x:'outter'});
  console.log('key1',key);
}
{
var key =  (function(){
    return [
      (function(){return this.x}).bind({x:'keys'})()
    ]
  }).call({x:'outter'});
  console.log('key2',key);
}
{
  /*
利用嵌套的箭头函数，部署管道机制pipelLine，即前一个函数的输出是后一个函数的输入
   */

  const pipelLine = (...func) =>{
    return  (val) => func.reduce((a,cb) => cb(a) ,val)
  }


  const add = (a)=>a+1;
  const multiple =(a)=>a*3;
  const mix = pipelLine(add , multiple);
  const mix2 = pipelLine(multiple ,add );
console.log('a1',mix(2)) ;
console.log('a2',mix2(2)) ;
}
