class Queue{
    constructor(){
        this.item=[]
    }
    enqueue(elements){
        this.item.push(elements);
    }
    dequeue(){
        if(this.item ==0){
            return -1
        }
        else{
            this.item.shift();
        }
    }
    peek(){
        if(this.item.length !=0){
            return this.item[0]
        }
    }
    isEmpty(){
        return this.item.length===0;
    }
    size(){
        return this.item.length;
    }
    print(){
        return this.item.toString()
    }
}

const queue= new Queue();
console.log(queue.isEmpty());
queue.enqueue(27);
queue.enqueue(24);
queue.enqueue(31);
console.log(queue.peek())
console.log(queue.size())
console.log(queue.print())
queue.dequeue();
console.log(queue.peek())
console.log(queue.print())
