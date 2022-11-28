//  1 -->  2-->  3-->  4 -->  5 --> null  6
//la estructura de un linked list es la siguiente: objetos con valor y objetos anidados
let singlyLinkedList={
    head:{
        value:1,
        next:{
            value:2,
            next:{
                value:3,
                next:{
                    value:4,
                    next:{
                        value:5,
                        next:null
                    }
                }
            }

        }
    }
}

//vamos a crear la clase constructora de esta estructura de datos

//clase nodo: para evitar estar repitiendo codigo es importante para hacer una instancia del nodo dentro de los metodos del constructor de la linked list y no tener que repetir esta misma estructura

class Node{
    constructor(value){
        this.value = value,
        this.next = null;
    }
}

class MySinglyLinkedList {
    constructor(value){
        this.head = {
            value: value,
            next:null,
        }
        this.tail = this.head;
        this.length = 1;
    }
//aqui comenzamos a agregar metodos
//metodo append, agregar un nodo al final
    append(value){
        const newNode = new Node(value);

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }

//metodo prepend, agregar un nodo al inicio
    prepend(value){
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;

        this.length++;

        return this;
    }
//metodo insert, agregar un nodo a la lista
//  1 -->  2-->  3-->  4 -->  5 --> null  6
// value-value-value-value-value        value
// next--next--next--next--next         next

    insert(index,value){
        if(index>=this.length){
            return this.append(value)
        }

        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index - 1)
        const holdingPointer= firstPointer.next;

        firstPointer.next=newNode;
        newNode.next=holdingPointer;

        this.length++;

        return this;
    }
    getTheIndex(index){
        let counter=0;
        let currentNode = this.head;

        while(counter!==index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

}


let myLinkedList = new MySinglyLinkedList(1);