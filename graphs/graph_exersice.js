//representando un grafo x dirigido de manera adjacent list con index, es decir, estilo has tables

class Graph{
    constructor(){
        this.nodes = 0;
        this.adjacentList={};
    }
//metodo agregar nodo o vertices
    addVertex(node){
        this.adjacentList[node] = [];
        this.nodes++;
    }
//metodo para agregar las conexiones entre nodos o bordes
    addEdge(node1, node2){
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
}

const myGraph = new Graph();