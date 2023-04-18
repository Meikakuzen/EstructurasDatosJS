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
