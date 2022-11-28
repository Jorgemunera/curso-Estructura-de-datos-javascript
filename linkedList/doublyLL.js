//vamos a crear la clase constructora de esta estructura de datos

//clase nodo: para evitar estar repitiendo codigo es importante para hacer una instancia del nodo dentro de los metodos del constructor de la linked list y no tener que repetir esta misma estructura

class Node{
    constructor(value){
        this.value = value,
        this.next = null;
        this.prev = null;
    }
}

class MyDoublyLinkedList {
    constructor(value){
        this.head = {
            value: value,
            next:null,
            prev:null,
        }
        this.tail = this.head;
        this.length = 1;
    }
//aqui comenzamos a agregar metodos
//metodo append, agregar un nodo al final
    append(value){
        const newNode = new Node(value);
        newNode.prev =this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }

}

let myLinkedList = new MyDoublyLinkedList(1);