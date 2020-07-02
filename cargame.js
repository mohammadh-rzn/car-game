String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}
let s = "";
for (let i = 0; i < 300; i++)
    s += " *";
function sorting(x) {
    let min = 0;
    let temp = 0;
    for (let i = 0; i < x.length; i++) {
        min = i;
        for (let j = i; j < x.length; j++) {
            if (x[j].order < x[min].order)
                min = j;
        }
        temp = x[i];
        x[i] = x[min];
        x[min] = temp;
    }
}
function Cars(name) {
    this.name = name;
    this.place = 0;
    this.order = 0;
}
function start() {

    console.log(s);
    let numberOfCars = Number(prompt("enter the number of cars"));
    let array = [];
    for (let i = 0; i < numberOfCars; i++) {
        let a = new Cars(prompt("Enter name of car"));
        a.order = Math.floor(Math.random() * 30) + 1;
        array.push(a);
    }
    sorting(array);
    return array;
}

let array = start();
let k = 0;
function move() {
    let s2 = s;
    k = k % array.length;
    // for (let i = 0; i < array.length; i++) {
        array[k].place += Math.floor(Math.random() * 10) + 1;
        
        for (let j = 0; j < array.length; j++) {
            if (array[k].name != array[j].name && array[k].place === array[j].place) {
                array[j].place = 0;
            }
        }
        k++;
    // }
    // for (let i = 0; i < array.length; i++) {
    //     console.log(array[i].place);
    // }
    for (let i = 0; i < array.length; i++) {
        s2 = s2.replaceAt(2 * array[i].place, array[i].name);
    }
    console.log(s2);
    document.getElementById("display").innerHTML = s2;
    for (let i = 0; i < array.length; i++) {
        if (array[i].place >= 299)
            alert(array[i].name + " won");
    }
}
