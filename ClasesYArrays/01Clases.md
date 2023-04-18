# Clases

- Extiendo con extends
- Llamo al super ( constructor padre ) con lo que me pida la clase padre
- Puedo sobreescribir el método en la clase que hereda
 
~~~js
class Person {
    constructor(name, lastName){
        this.name = name;
        this.lastName= lastName
    }

    hi(){
        return `Hi! I'm ${this.name} ${this.lastName}`
    }
}


class Student extends Person{
    constructor(name, lastName, career){
        super(name, lastName)
        this.career = career
    }
    hi(){
        return super.hi() + "and I'm studing" + this.career 
    }
}
~~~

- Los objetos ( y las clases ) pasan su valor por referencia
- Si modifico el objeto modifico el objeto original