/**
 * Iterator 主要用于遍历器可以结合gerator yield快递构建
 */

{
  //一般非原生自带的obj需要使用Iterator的时候的部署
  let  obj = {
    arr1:[1,2,3],arr2:[..."person"],
    [Symbol.iterator](){
      let index = 0 , arr = [].concat(this.arr1 , this.arr2);
    return{
      next(){
        if( index < arr.length){
          return {
            value:arr[index++] , done:false,
          }
        }else{
          return {value:arr[index++] , done:true}
        }


    }
            }
    }
  }

let it = obj[Symbol.iterator]()
console.log(it.next());
}
