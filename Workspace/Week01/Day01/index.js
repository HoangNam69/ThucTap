/**
 * 1. Phân biệt innerHTML vs write()
 */
const root = document.querySelector("#root")

root.innerHTML = " 1. This is innerHTML"
document.write("2. This is write method")

/**
 * 2. Thêm thuộc tính cho Object và Constructor
 */

// Object
var car = {
    name: "volvo",
    color: "Grey"
}

// Thêm thuộc tính cho car
car.price = 12000

console.log(car)

// Constructor
function Person(id, name, age, gender) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var person01 = new Person();
person01.id = 1;
person01.name = "Le Hoang Nam";
person01.age = 22;
person01.gender = "male"

console.log(person01)
// Thêm thuộc tính cho constructor
Person.prototype.height = 163;

console.log(person01.height)

/**
 * 3. Event
 */
const eventClick = () => {
    alert("Hello world")
}

/**
 * 4. String sự khác nhau giữa == và ===
 */
const x = "John";
const y = new String("John")

console.log(`Type of y: ${typeof y}; Type of x: ${typeof x}`)
console.log(`y == x : ${y == x}`)
console.log(`y === x : ${y === x}`)

/**
 * ES6
 * 1.ES6 - Destructuring Assignments in ES6
 * Phân tách các item của array hay object theo các biến 
 */
// Array
let date = [20, 11, 2024];

let [d, m, yr] = date;
console.log("Day: " + d + "\nMonth: " + m + "\nYear: " + yr)

// Object
var car1 = {
    name: "volvo",
    color: "Grey"
}

let { name: car_name, color: car_color } = car1

console.log("car_name: " + car_name + "\ncar_color: " + car_color)

/**
 * 2. Khởi tạo giá trị mặc định(Tương tự như khởi tạo giá trị mặc định cho constructor rỗng trong java)
 */
function Person1(name = 'Le Van A') {
    this.name = name;
}
var p1 = new Person1();
var p2 = new Person1("Le Hoang Nam");
console.log(`p1: ${p1.name} \np2: ${p2.name}`)

/**
 * 3. Rest Parameters in ES6: các tham số còn lại tức là trong một function sẽ còn nhiều các tham số không xác định với syntax là ...tên biến đại diện đúng naming convention
 */

let example = (name, age, ...other) => {
    console.log(`name: ${name}`)
    console.log(`age: ${age}`)
    console.log(`other: ${other}`)
}

example("le Hoang Nam", 22, "male", true, "user")