let two = 2;
let array = ["hey", "hello", "hi"];

console.log(array);
let result = 3;
result = 4;

let person: {
  name: string;
  location: string;
  isProgrammer: boolean;
  skills: typeof array;
  birthday: number[];
};
person = {
  name: "Johannes",
  location: "Niederrhein",
  isProgrammer: true,
  skills: ["js", "ts", "karate"],
  birthday: [4, 6, 1994],
};
let n: string = "hey";

let namesAndNumbers: any[] = ["Max", "Tom", 5];

enum Starks {
  Jon,
  Bran,
  Catlyn,
}
let cat: Starks = Starks.Catlyn;

console.log(cat);

function getName(): void {
  console.log("Hallo");
}
