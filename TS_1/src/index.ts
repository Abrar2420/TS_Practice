//& TS Starting


//& coding task-1
// // with TS
// function greetUser(name: string, age: number): string {
//     return `Hello ${name}, you are ${age} years old.`
// }

// console.log(greetUser("Alice", 25));

// // with JS
// function greetUser(name, age) {
//     return `Hello ${name}, you are ${age} years old.`
// }

// console.log(greetUser("Alice", 25));

//& coding task-2

// let usename: string = "john_doe";
// let score: number = 98.5;
// let isLoggedIn: boolean = false;
// let lastLogin: null = null;
// let data: unknown = "game";

// console.log(data.toUpperCase()); 
// output in console: GAME
// 'data' is of type 'unknown'. error in vscode

//& coding task-4

// let city = "Dhaka"; // value is string TS infers type: string
// let temperature = 34; // value is number TS infers type: number
// let isRaining = false; // value is boolean TS infers type: boolean
// let forecast: string; // no value so TS wiil infer any
// let result; // TS will any way infer the type as any so no need annotate any

//& coding task-4

// let cities: string[] = [];
// cities.push("Dhaka", "Delhi", "Islamabad");

// let userProfile: [string, number, boolean] = ["Abrar", 22, false];

// function getCoords(latitude: number, longitude: number): [number, number] {
    //     return [latitude, longitude]
    // }
    
    // console.log(getCoords(5567, 79)); //outut: [ 5576, 79 ]
    
//& coding task-5

// type Movie = {
//     title: string,
//     year: number,
//     rating: number,
//     description?: string,
//     readonly isReleased: boolean
// }

// let movie1: Movie = {
//     title: "Iron Man",
//     year: 2008,
//     rating: 7.9,
//     description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
//     isReleased: true
// }
// let movie2: Movie = {
//     title: "Batman",
//     year: 1966,
//     rating: 7.5,
//     isReleased: true
// }

// movie2.isReleased = false //Cannot assign to 'isReleased' because it is a read-only property.

// function printMovie(movie: Movie) {
//     console.log(`${movie.title} (${movie.year}) - Rating: ${movie.rating}`);
    
// } 

// let movie3: Movie = {
    //     title: "Inception",
    //     year: 2010,
//     rating: 8.8,
//     isReleased: true
// }
// printMovie(movie3)// output: Inception (2010) - Rating: 8.8

//& coding task-5

// interface Vehicle {
//     brand: string,
//     speed: number,
//     isElectric: boolean
// }

// interface Car extends Vehicle {
//     doors: number
// }
// interface Motorcycle extends Vehicle {
    //     hasSidecar: boolean
// }

// let Tesla_Model_Y: Car = {
//     brand: "tesla",
//     speed: 200,
//     isElectric: true,
//     doors: 4
// }
// let Yamaha_R15: Motorcycle = {
//     brand: "Yamaha",
//     speed: 145,
//     isElectric: false,
//     hasSidecar: false
// }

// function describeVehicle(vehicle: Vehicle) {
//     console.log(`${vehicle.brand} goes ${vehicle.speed}km/h`);
    
// }

// describeVehicle(Tesla_Model_Y)

    //& coding task-5
    
    // type Status = "active" | "inactive" | "banned";
    
    // function printStatus(name: string, status: Status) {
        //     console.log(`${name} is ${status}`);
        // }

        // printStatus("alice", "active");
// printStatus("alice", "suspended");
// // Argument of type '"suspended"' is not assignable to parameter of type 'Status'.

// type HasName = {
//     name: string
// } 
// type HasAge = {
//     age: number
// }

// type  Person = HasName & HasAge

// function printPerson(person: Person) {
//     console.log(`${person.name} is ${person.age} years old.`);
// }

// let person1: Person = {
    //     name: "alice",
    //     age: 25
    // } return
    
// printPerson(person1);

    //& coding task-8
    
    // function calculateDiscoutn (price: number, discountPercent?: number = 10):number {
//     let discountAmount = price / 100 * discountPercent;
//     return price - discountAmount 
// }

// console.log(calculateDiscoutn(500));
// console.log(calculateDiscoutn(400, 40));

// function logOrder (orderId: string, item: string): void {
//     console.log(`Order ${orderId} - Item ${item}`);
// }

// logOrder("#123", "Pizza")

// type stringTransformer = (text: string) => string;

// const makeUpperCase: stringTransformer = (text) => {
    //     return text.toUpperCase();
// }
// const addExclamation: stringTransformer = (text) => {
    //     return text + "!";
// }
// console.log(makeUpperCase("game"));
// console.log(addExclamation("game"));

//& coding task-9

// enum OrderStatus {
    //     pending = "Pending",
//     Processing = "Processing",
//     shipped = "Shipped",
//     deliveed = "Delivered",
//     cancelled = "Cancelled",
// }

// type Order = {
    //     id: number,
//     item: string,
//     status: OrderStatus
// }

// const order1: Order = {
//     id: 67,
//     item: "Table",
//     status: OrderStatus.cancelled
// }
// const order2: Order = {
//     id: 673,
//     item: "Chair",
//     status: OrderStatus.Processing
// }

// function printOrder(order: Order) {
//     console.log(`Ordre #${order.id} ${order.item} is currently: ${order.status}`);
    
// }

// const order3: Order = {
//     id: 1,
//     item: "Pizza",
//     status: OrderStatus.shipped
// }

// printOrder(order3)

// const order4: Order = {
//     id: 673,
//     item: "Chair",
//     status: "Shipped"
// } //Type '"Shipped"' is not assignable to type 'OrderStatus'.

//& coding task-9

// function getlast<T>(arr: T[]): T | undefined {
    //     return arr[arr.length - 1];
    // } 
    
    // console.log(getlast([2, 4, 5, 6]));

// function wrapInArray<T>(value: T): T[] | undefined {
//     return [value]
// }

// console.log(wrapInArray(66));

// interface Box<T> {
//     content: T,
//     label: string
// }

// let box1: Box<string> = {
//     content: "Game",
//     label: "action"
// }
// let box2: Box<number> = {
//     content: 90,
//     label: "action"
// }

//& coding task-11 [Type Narrowing]

// function formatInput(a: number | string ) {
//     if(typeof a === "string") {
//         return a.toUpperCase()
//     }
//     if(typeof a === "number") {
//         return a * 10;
//     }
// }
// console.log(formatInput("Hello"));

// type Admin = {
//     name: string,
//     accessLevel: number
// }

// type Member = {
//     name: string,
//     email: string
// }

// function describeUser(user: Admin | Member) {
//     if ("accessLevel" in user) {
//         // TS knows it's Admin here
//         console.log(`Admin: ${user.name}, Access Level: ${user.accessLevel}`);
//     } else {
//         // TS knows it's Member here
//         console.log(`Member: ${user.name}, Email: ${user.email}`);
//     }
// }

// describeUser({ name: "Alice", accessLevel: 3 });  
// describeUser({ name: "Bob", email: "bob@mail.com" }); 
// let user: Admin = {
//     name: "Alex",
//     accessLevel: 44
// }

// function isAdmin(user: Admin | Member): user is Admin {
//     return (user as Admin).accessLevel !== undefined;
// }

// function callUser(user: Admin | Member) {
//     if (isAdmin(user)) {
//         console.log(`Admin: ${user.name}, Access Level: ${user.accessLevel}`); 
//     } else {
//         console.log(`Member: ${user.name}, Email: ${user.email}`); // ✅ TS knows email exists here
//     }
// }

// callUser(user)

    //& coding task-12 [Classes in TypeScript]
    
    // abstract class Animal {
//     constructor(protected name: string) {}
//     abstract makeSound(): string;

//     describe() {
//         console.log(`${this.name} says: ${this.makeSound()}`);
        
//     }
// }

// class Dog extends Animal {
//     constructor(name: string) {super(name)};
//     makeSound(): string {
//         return `Woof!`
//     }
// }

// class Cat extends Animal {
//     constructor(name: string) {super(name)};
//     makeSound(): string {
//         return `Meow!`
//     }
// }

// const dog1 = new Dog("Hugo")
// const cat1 = new Cat("Cokkie")
// console.log(dog1.describe());
// console.log(cat1.describe());

// let dog2 = new Animal("Tommy")  // Cannot create an instance of an abstract class.


        //& coding task-13 [Utility TYpes]

type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
}

function updateProduct(product: Product, update: Partial<Product>) {
    return {...product, ...update}
}

let product: Product = {
    name: "frypan",
    id: 34,
    price: 300,
    description: "good",
    category: "Kitchen"
} 
console.log(updateProduct(product, {name: "Pot", id: 56, price: 200}));

type ProductPrview = Pick<Product, "name" | "price">
type ProductWithoutId = Omit<Product, "id">
type FrozenProduct = Readonly<Product>
let readonlyProdct: FrozenProduct = {  name: "frypan",
    id: 34,
    price: 300,
    description: "good",
    category: "Kitchen"} 
readonlyProdct.name = "plate";

type PriceList = Record<string , number>

let priceList: PriceList = {
    mouse: 100,
    mouse_pad: 60,
    keyboard: 500,
}