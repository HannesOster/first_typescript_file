let two = 2;
let array = ["hey", "hello", "hi"];
array[1] = 1;
console.log(array);
let result = 3;
result = 4;
result = "hey";

let person: {
  name: string;
  location: string;
  isProgrammer: boolean;
  skills: typeof array;
  bday: number[];
};
person = {
  name: "Johannes",
  location: "Niederrhein",
  isProgrammer: true,
  skills: ["js", "ts", "karate"]
  bday: [4,6,1994]

};
