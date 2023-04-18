# ARRAYS

## Programación funcional

~~~js
function hi(){
    console.log("Hi!")
}

//puedo guardar la función en una variable sin los paréntesis
//una función de primera clase es una función que se puede guardar en una variable
//la puedo mandar como parámetro a otra función

const h = hi

h() 

//Estas funciones que tienen parámetros los cuales son otras funciones son llamadas de orden superior

function some(fn){
    fn()
}

function some2(fn, num1, num2){
    return fn(num1,num2)
}

some2((a,b)=>{
    return a*b
}, 6,2) //12

~~~

## filter

- Para filtrar los nombres que empiecen por una vocal

~~~js
const names = ["Anna", "Pere", "Michael", "John", "Victor", "Juana"]

function searchFirstLetter(collectione, letter){
    
    const newCollection = collection.filter((word)=>word[0].toUpperCase()=== letter.toUpperCase())
    return newCollection
}
~~~

## map

- map es inmutable, no modifica el array original

~~~js
const numbers = [1,2,3,4,5,6]

function sumNumber(collection, num){
    return collection.map((item)=>item + num)
}

sumNumber(numbers, 10) // [11,12,13,14,15,16]
~~~

## reduce

- Hace una operación sobre todos los elementos y regresa un valor escalar ( primitivo )
- Recibe dos parámetros:
  - Una función
  - El valor con el que deseas iniciar el acumulador (opcional)

~~~js
const numbers = [1,2,3,4,5,6]
function sumNumbers(collection){

    return collection.reduce((acc, item)=> acc + item, 0) // Hará un recorrido por todos los elementos, el acc(acumulador) irá sumando el total
                                                        
}

sumNumbers(numbers) //acc en la primera iteración valdrá 0, en la siguiente 1, en la siguiente 3, en la siguiente 6, etc
                    //total21
                    //si pongo el acc en 1, el resultado sería 22

~~~

## Eliminar los elementos de un array

- Puedo usar el filter para no modificar el array original
- 
~~~js
function removeName(collection, name){
    return collection.filter((item)=> item !== name) //Devuelve todos menos el name indicado
}
~~~

