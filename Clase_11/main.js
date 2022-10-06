// Condicionales, operadores  y Arrays

// let grupo = [];

// let mascotas = ['gato','perro','conejo'];

// let numeros = [1,2,3,4,5,6];

// let verdades = [true, false, true];

// let persona = [32415342154, 'Pedro', 'Alvarez', 1982, true];

// let resultados = [['gato', 'miau'],['perro', 'guau'],['ardilla', 'wheeee'],['vaca', 'muuuuu']];

// let practica = ['futbol','voley','natacion','tenis','running'];

// console.log(practica);
// console.log(practica.length);
// console.log(practica[0]);

/** 
let items =[];

let item = prompt("ingrese un item");

if (!items.includes(item) && items.length < 5){
    items.push(item);
    alert(items);
}else{
    alert("Ya esta en la lista");
};
*/


// Devolver dia de la semana 
/* let nDia = new Date();
switch(nDia.getDay() ){
    case 0 :{
        alert(`Hoy es Domingo ${nDia.getDate()}`);
        break;
    }
    case 1:{
        alert(`Hoy es Lunes ${nDia.getDate()}`);
        break;
    }
    case 2:{
        alert(`Hoy es Martes ${nDia.getDate()}`);
        break;
    }
    case 3:{
        alert(`Hoy es Miercoles ${nDia.getDate()}`);
        break;
    }
    case 4:{
        alert(`Hoy es Jueves ${nDia.getDate()}`);
        break;
    }
    case 5:{
        alert(`Hoy es Viernes ${nDia.getDate()}`);
        break;
    }
    default:{
        alert(`Hoy es Sabado ${nDia.getDate()}`);
        break;
    }
} */

// Practica

let valorIngresado = parseFloat(prompt("Ingrese un numero"));


if( valorIngresado > 10){
    document.write("el número ingresado es mayor a 10");
}else if(valorIngresado <= 10){
    document.write("el número ingresado es menor o igual a 10");
}else{
    document.write("no es un número");
}