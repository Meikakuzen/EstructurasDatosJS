# Linked List 

- Es una lista dónde un nodo apunta al siguiente y el último apunta a null
- Creo dos clases, una para el nodo y otra para la linked list
- Tenemos dos situaciones, cuando el head no apunta a nada y cuando si. Hago la comparación en un if
  - Cuando sea la primera vez, el primer nodo será la cabeza
~~~js
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

            current.next = node
        }
    }
}

const linkedList = new LinkedList
~~~

- Creo un método show para ver la info que está agregada

~~~js
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

            current.next = node
        }
    }

    show(){
        let current = this.head
        while(current !== null){
            console.log(current.value)
            current= current.next  // de esta manera recorremos la lista. 
                                    // current siempre va a tomar el campo next, tarde o temprano será null
        }
    }
}

const linkedList = new LinkedList
linkedList.add("A")
linkedList.add("B")
linkedList.add("C")
linkedList.add("D")


linkedList.show()
~~~

- Para borrar la lista igualo this.head a null

~~~js
    clear(){
        this.head = null
    }
~~~

- Para saber cuánto mide creo el metodo size

~~~js
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
~~~
