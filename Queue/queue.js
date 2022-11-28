
//es una fila FIFO : 4 --> 3 --> 2 --> 1

class Node {
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Queue{
    constructor(){
        this.first=null;
        this.last=null;
        this.length=0;
    }
//metodo peek: tomar el primer elemento en la lista
    peek(){
        return this.first;
    }
//metodo enqueue: agregar un elemento a la fila
    enqueue(value){
        const newNode = new Node(value);
        if(this.length===0){
            this.first=newNode;
            this.last=newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
//metodo dequeue: eliminar el primer elemento en la fila
//es una fila FIFO : 4 --> 3 --> 2 --> 1
dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;

    return this;
  }
}

const myQueue = new Queue();