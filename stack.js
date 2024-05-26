class Stack{
   constructor(){
    this.item=[]
   }
   push(number){
    this.item.push(number)
   }
   pop(){
    if(this.item===0){
        return "this stack is Empty"
    }

    return this.item.pop()
   }
   peek(){
    return this.item[this.item.length-1]
   }
   isEmpty(){
    return this.item.length=== 0;
   }
   size() {
    return this.item.length;
}
}
 const stack= new Stack()

 stack.push(30);
 console.log(stack.peek());

 stack.push(100)

 stack.pop()
 console.log(stack.isEmpty())
 console.log(stack.size())
