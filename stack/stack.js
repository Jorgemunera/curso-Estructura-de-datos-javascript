
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

//metodo de peek, seleccionar un elemento, que en este caso sera el elemento de arriba de la pila
    peek(){
        return this.top;
    }

//metodo push: agregar un elemento al final de la pila
    push(value){
        const newNode = new Node(value);
        if(this.length===0){
            this.top=newNode;
            this.bottom=newNode;
        }else{
            const holdingPointer=this.top;
            this.top=newNode;
            this.top.next=holdingPointer;
        }
        this.length++;
        return this;
    }
//metodo pop: eliminar el ultimo elemento
    pop(){
        let lastItem=new Node(this.top.value);

        const holdingPointer=this.top.next;
        this.top=holdingPointer;
        this.length--;
        return lastItem;
    }
}

let myStack = new Stack();