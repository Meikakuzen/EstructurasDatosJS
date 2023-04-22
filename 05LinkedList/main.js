//Creo un nodo

class Node{
    constructor(value){
        this.value= value
        this.next = null  // nullo === vacío, sin nada
    }
}

//Creo otra clase para la lista

class LinkedList {
    constructor(){
        this.head = null
    }

    add(value){
        const node = new Node(value)

        if(this.head === null){
            this.head = node
        }else{
            //aquí hay que buscar cuál es el último nodo
            let current = this.head
            while(current.next !== null){
            
                current = current.next
            }
            //cuando llega al último current.next es null sale del while
            //como se que es null, es el último elemento, le añado el nodo

            current.next = node
        }
    }

    show(){
        let current = this.head
        while(current !== null){
            console.log(current.value)
            current= current.next  // de esta manera recorremos la lista
        }
    }
    clear(){
        this.head = null
    }

    size(){
        let contador = 0

        let current = this.head
        while(current !== null){
            contador ++
            current = current.next
        }
        return contador

    }
}

const linkedList = new LinkedList
linkedList.add("A")
linkedList.add("B")
linkedList.add("C")
linkedList.add("D")


linkedList.show()
console.log(linkedList.size())