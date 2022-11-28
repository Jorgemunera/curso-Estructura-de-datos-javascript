/*
   2 - 0
  / \
 1 - 3

*/

//como se puede representar en codigo un grafo
//una forma es edge list

const graph = [
    [0,2],
    [2,3],
    [2,1],
    [1,3]
];


//otra es Adjacent list
//              0    1      2      3
const graph2 =[[2],[2,3],[0,1,3],[1,2]];


//otra forma es con hash tables
const graph3 = {
    0: [2],
    1: [2,3],
    2: [0,1,3],
    3: [1,2],
}

//otra forma es un Adjacent matrix

const graph4 = [
    [0,0,1,0], //array por indice, donde con 1 hay conexion con 0 no hay
    [0,0,1,1],
    [1,1,0,1],
    [0,1,1,0],
]

//otra forma directamente en objeto

const graph5 = {
    0:[0,0,1,0], //array por indice, donde con 1 hay conexion con 0 no hay
    1:[0,0,1,1],
    2:[1,1,0,1],
    3:[0,1,1,0],
}