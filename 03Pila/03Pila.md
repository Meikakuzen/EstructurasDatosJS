## Pila

- Una pila es LIFO (last in first out)
- Imagina una pila de platos que se va apilando. El último que entra es el primero que se lava
- El # hace el método/variable privado. Al ser una pila hay que protegerlo

~~~js
class Stack {
    #items = [];

    push(item){
        this.#items.push(item) //agrega un elemento al final
    }

    pop(){
        return this.#items.pop() //elimina el último elemento
    }

    size(){
        return this.#items.length
    }

    isEmpty(){
        return this.#items.length === 0 //si esta vacía devuelve true
    }
}
~~~

- Como los items están protegidos no puedes hacer otra cosa con ellos que lo que los métodos ( push, pop, size ) te permiten
-----

## Ejemplo de pila

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
      <label for="">Nombres</label>
      <input type="text" id ="name">
      <button onclick="addToStack()">Agregar a la pila</button>
      <button onclick="deleteToStack()">Borrar</button>
    </div>

    <h3>Nombres</h3>
    <div id="content"></div>
    <script src="main.js"></script>
  </body>
</html>
~~~

- Recojo el input con getElementById. También el div
- Creo una instancia de la clase Stack
- Creo la función addToStack (también deleteToStack en otro botón de borrar)
- - Creo un método para hacer un clon de #items y poder mostrar la pila en pantalla (con #items no puedo, o no debo)
  - Si yo modifico este clon guardandolo en una variable a través del método getItems no afecta a #items
- main.js

~~~js
const inputName = document.getElementById("name")
const divContent = document.getElementById("content")


class Stack {
  #items = [];

  push(item){
      this.#items.push(item) //agrega un elemento al final
  }

  pop(){
      return this.#items.pop() //elimina el último elemento
  }

  size(){
      return this.#items.length
  }

  isEmpty(){
      return this.#items.length === 0 //si esta vacía devuelve true
  }
  getItems(){
    return [...this.#items] //uso el spread para clonar #items
    
  }
}

const stackNames = new Stack()


function addToStack(){
  stackNames.push(inputName.value)
  showNames()
  inputName.value=""
  inputName.focus() //cada vez que escriba un nombre y se quede en blanco el input va a tener el foco
}


function showNames(){
  const items = stackNames.getItems() //obtengo un clon de los #items
  console.log(items)
  divContent.innerHTML="";

  items.forEach((item)=>divContent.innerHTML += `<p>${item}</p>`) //Le coloco += para que vaya concatenando
}

function deleteToStack(){
  stackNames.pop()
  showNames()
}
~~~
