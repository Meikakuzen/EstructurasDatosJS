class Queue {
    #items= []


    getItems(){
        return [...this.#items]
    }

    enqueue(item){
        return this.#items.push(item)
    }

    dequeue(){
        return this.#items.shift()
    }

    size(){
        return this.#items.length
    }
    peek(){
        return this.#items[0]
    }

    isEmpty(){
        return this.#items.length === 0
    }
}

const queueRequest = new Queue


const divRes= document.getElementById("result") 
const divReq = document.getElementById("req")

const url = "http://jsonplaceholder.typicode.com/posts"

let i = 1; //

function add(){
    queueRequest.enqueue(i++)
    showReq()
}

async function request(){
    while(!queueRequest.isEmpty()){ // si la cola no está vacía se va a ejecutar
        const res = await fetch(url+"/"+queueRequest.dequeue()) // de esta manera me va a cargar el primer elemento y a eliminarlo
        const data = await res.json()

        showReq() // de esta manera tengo en tiempo real como voy quitando númerlos de la cola

        divRes.innerHTML = `<p>${data.id} ${data.title} </p>`+ divRes.innerHTML; //concateno el HTML para que se vaya colocando al final(debajo)
    }                                                                           //con lo cual queda una lista de 54321 (de arriba hacia abajo)

    //El primero que entra es el 1 por lo cual es el primero que se va a atender quedando al final de la lista
    //Encabezando la lista quedará el último en elimnarse

}

function showReq(){
    const items = queueRequest.getItems()
  
    if(items.length === 0){
        divReq.innerHTML="Sin solicitudes"
        return
    }

    divReq.innerHTML=""
    items.forEach(item=>{
        divReq.innerHTML += `${item}    |`
    })

    
}




