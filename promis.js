{
  //异步编程的开端
  /*var ajax = function(cb) {
    console.log("hello");
    setTimeout(function () {
      cb()
    },1000)
  }

  ajax(function () {
    console.log("wortd")
  })*/
}
{
  /*
使用promise简单的实现
   */
  let ajax = function () {
    console.log("hello");
    return new Promise((resolved,rejected)=>{
      setTimeout(function () {
        resolved()
      },1000)
    })
  }
  ajax().then(function() {
    console.log("promise Simple");
  })
}
{
  let ajax = function() {
    console.log('start')
    return new Promise((resolved ,rejected)=> {
        setTimeout(function(){
          resolved()
        },1000)
    })
  }

  ajax().then(function() {
     console.log("A");
     return new Promise((resolved,rejected)=>{
       setTimeout(function() {
         resolved()
       },2000)
     })
  }).then(function(){
    console.log("B");
    return  new Promise((resolved,rejected)=>{
      setTimeout(()=>{resolved()},3000)
    })
  }).then(function(){
    console.log("C")
  })
}
{
  /**
   * promise.all的使用
   */
  var promise = [1,2,3,4,5,6].map(item=>item > 2) ;
  Promise.all(promise).then(function(posts){
    console.log(posts);
  },function(err) {
    console.log(err);
  })
}
