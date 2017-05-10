{
  const Myclass = class Me{
    getName(){
      return Me.name;
          }
      }

      let inst = new Myclass();
      console.log(inst.getName());
}
{
  const bar = Symbol('bar')
  const snaf = Symbol('snaf')

  class Myclass {
   //公有方法
   foo(baz){
     console.log(baz);
     this[bar](baz)
   }
   //私有方法
   [bar](baz){
     console.log(baz+'2');
     return this[snaf] = baz ;
   }
  }
  let inst = new Myclass();
  console.log(inst);
  inst.foo('k')
inst[bar]('k')
}
{
  class A{
    constructor(x,y){
    //  console.log(new.target.name);
    console.log(this);
      this.x = x ;
      this.y = y;
    }
  }
  class B extends A{
    constructor(x,y,color){
      super(x,y);
      this.color = color
    }
  }

  new A(1,2);
  console.log('$$$$$$');
let b =  new B(3,4,'bule');
console.log(b);
}
{
  class A{
    constructor(){
      this.p = 2;
    }
  get  k(){
      return this.p
    }
  }

  class B extends A {
    constructor() {
      super()
    }

    get m(){
      return super.k
    }
    get getP(){
      return super.p
    }
  }
  let b = new B();
let m =  b.m ;
let p = b.getP
}
{
  class A{
    constructor(){
      this.x = 1
    }
  }

  class B extends A {
    constructor() {
      super();
      this.x = 2;
      super.x = 3;
      console.log('super',super.x);
      console.log('this',this.x); // 这个地方是不会变的
      console.log('super是不是B的实例',super.valueOf() instanceof B) //true
      console.log('super同时也是A的实例',super.valueOf() instanceof A) //true
    }
  }
  let b = new B()
}
{
  class parent {
  static my(){
    console.log("static","msg");
  }
  my(msg){
    console.log("instance",msg);
  }
  }

  class B extends parent {
    constructor() {
      super();
    }
    static my(msg){
      super.my()
    }

    my(msg){
      super.my(msg)
    }
  }

  B.my("sta");
  let b = new B();
  b.my(2)
}
{
  class A {
    constructor(x,y) {
      this.x = x ;
      this.y =  y;
    }
  }
  class B extends A{
    constructor(x,y,z){
      super(x,y);
      this.z = z
    }
  }

  let a1 = new A(1,2);
  let b1 = new B('a','b','c')
console.log(b1.__proto__);
  console.log('b1的原型的原型是a1的原型',b1.__proto__.__proto__ === a1.__proto__); // b1的原型的原型是a1的原型' true
  console.log("b1的原型不是a1的原型",b1.__proto__ === a1.__proto__); //false

  /*通过b1的原型的原型修改A的原型方法
   */

  b1.__proto__.__proto__.add = function() {
    console.log("我是添加的原型方法");
  }

  let a2 = new A("d","k");
  a2.add(); //我是添加的原型方法
}
{
  class A{
    get html(){
      return 'hi'
    }
    set html(val){
      console.log("setter",val);
    }
   my(){
     return 'a'
   }
  }

  let descriptor = Object.getOwnPropertyDescriptor(A.prototype,"my");
  console.log("get" in descriptor);
  console.log("set" in descriptor);
}
{
  //混合模式
  function mix(...args){
    class Mix{}
    for(let mixin of args){
      copyProperties(Mix,mixin);
      copyProperties(Mix.prototype,mixin.prototype);
    }
    return Mix
  }

  function copyProperties(target , source){
    for(let key of Reflect.ownKeys(source)){
      if ( key !== "constructor" &&
       key !== "prototype" &&
      key !== "name" ) {
        let desc = Object.getOwnPropertyDescriptor(source ,key);
        Object.defineProperty(target,key ,desc)
      }
    }
  }

  class A {
    constructor(a) {
      this.a=a
    }
    say1(){
        console.log(`i an ${this.a}`);

    }
  }

  class B{
    constructor(b) {
      this.b=b
    }
    say2(){
        console.log("i am b");

    }
  }
  let D = mix(A,B);

  class C extends D{
    constructor(a,b){
      super(a);
      super(b);
    }
    sy(){
      super.say1();
      super.say2();
    }
  }

  let c= new C()
  c.sy()
}
