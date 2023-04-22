# QUEUE - COLA

- Una cola es FIFO (first in first out)
- Pensar en una cola de un cine. El primero que hay en la cola es el primero que entra en el cine ( sale de la cola )
- Es el clásico ejemplo de una lista de espera

## Caso práctico

- JSON placeHolder simula un servicio. Una API
- 
>jsonplaceholder.typicode.com/post

- Esta url devuelve un json que servirá para trabajar
- Mi HTML pinta así

~~~html 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app">
      <div class="nombre">
        <h1>Nombres</h1>
      </div>

      <div class="contenido">
        <input type="text" class="datos" class="dataInput" />
        <button onclick="add()" class="btn">Add Nombre</button>
        <button onclick="request()">Solicitud</button>
        
      </div>

      <div id="req">Sin solicitudes</div>
      <hr>
      <div class="result"></div>

    </div>
    <script type="module" src="/main.js"></script>
  </body>
</html>
~~~

- Mi cola pinta así

~~~js
class Queue {
    #items= []


    getItems(){
        return [...this.#items]
    }

    enqueue(item){
        return this.#items.push(item)
    }

    delete(){
        return this.#items.shift()
    }

    size(){
        return this.#items.length
    }
    peek(){
        return this.#items[0]
    }
}

const queueRequest = new Queue


const divRes= document.getElementById("res") 
const divReq = document.getElementById("req")

const url = "jsonplaceholder.typicode.com/post"
~~~

- Declaro un iterador, lo llamo i=1
- Si a la url le añado /1 obtengo el primer objeto del array de la API
- Por eso incremento la i, para ir obteniendo un resultado distinto
- Entonces, estoy encolando ese numero y lo que quiero es mostrar la información en pantalla
- Muestro los numeros en pantalla

~~~js
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
~~~





