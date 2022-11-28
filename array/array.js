//const array= ['diego', 'karen','oscar'];

class MyArray{
    constructor(){
        this.length = 0;
        this.data={};
    }
    //creando el metodo get()
    get(index){
        return this.data[index];
    }
    //creando el metodo push()
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    //creando el metodo pop()
    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
    //creando el metodo delete():debemos tener en cuenta que si queremos eliminar cualquier elemento del arreglo, el elemento siguiente a este pasará a cambiar de indice y será su posicion-1 
    delete(index){
        const item=this.data[index];
        this.shiftIndex(index);

        return item;
    }
    shiftIndex(index){
        for (let i = index; i < this.length-1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
    //Reto 1: creando el metodo agregar un elemento al inicio del array
    unshift(item){
        const objFinal=this.data[this.length-1];
        this.push(objFinal)

            for (let i = this.length-2; i >= 1; i--) {
            this.data[i]=this.data[i-1]
            }

        this.data[0]=item;
        
    }
    //Reto 2: creando el metodo eliminar primer elemento del array
    shift(){
        for (let i = 0; i < this.length-1; i++) {
            this.data[i]=this.data[i+1]
        }
        this.pop(); 
    }
}

const myArray= new MyArray();

