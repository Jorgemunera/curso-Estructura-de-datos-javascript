//vamos a realizar este binary search tree
//         10
//    4         20
// 2    8    17    170

class Node{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null;
    }
//metodo insert:
    insert(value){
        const newNode= new Node(value);
        if(this.root===null){
            this.root=newNode;
        }else{
            let currentNode = this.root;
            while(true){
                if(value<currentNode.value){
                    if(!currentNode.left){
                        currentNode.left=newNode;
                        return this;
                    }
                    currentNode=currentNode.left
                }else{
                    if(!currentNode.right){
                        currentNode.right=newNode;
                        return this;
                    }
                    currentNode=currentNode.right;
                }
            }
        }
    }
//metodo search: buscar un valor en el tree
    search(value, tree = this.root) {

        if (tree == null) {
            return "El elemento no se encuentra.";
        }
        else if(value > tree.value) {
            return this.search(value, tree.right);
        }
        else if(value < tree.value) {
            return this.search(value, tree.left);
        }
        else {
            return "¡El elemento ha sido encontrado!";
        }

    }
}

const tree = new BinarySearchTree();