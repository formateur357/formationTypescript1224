// on declare plusieurs pour la fonction 'add' :
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: number[], b: string): string;
function add(a: string, b: number[]): string;

// Implementation commune - Notez que typescript exige une seul implementation
function add(
  a: number | string | number[],
  b: number | string | number[]
): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
    // return a + b;
  } else if (typeof a === "string" && typeof b === "number") {
    return a + b.toString();
  } else if (typeof a === "number" && typeof b === "string") {
    return a.toString() + b;
  } else if (Array.isArray(a) && typeof b === "string") {
    return a.join(",") + b;
  } else if (typeof a === "string" && Array.isArray(b)) {
    return a + b.join(",");
  } // On pourrait gerer d'autres cas si necessaires.
  throw new Error("Les types ne correspondent pas aux signatures surchargees.");
}

// Tests de tous les cas :

// 1. (number, number) -> number
const sum: number = add(10, 20);
console.log("add(10,20) ->", sum); // 30

// 2. (string, string) -> string
const fullName: string = add("John", "Doe");
console.log('add("John","Doe") ->', fullName); // "JohnDoe"

// 3. (string, number) -> string
const stringNumber: string = add("Age:", 30);
console.log('add("Age:",30) ->', stringNumber); // "Age:30"

// 4. (number, string) -> string
const numberString: string = add(42, " est la réponse");
console.log('add(42," est la réponse") ->', numberString); // "42 est la réponse"

// 5. (number[], string) -> string
const arrayString: string = add([1, 2, 3], " fin");
console.log('add([1,2,3]," fin") ->', arrayString); // "1,2,3 fin"

// 6. (string, number[]) -> string
const stringArray: string = add("Les nombres: ", [4, 5, 6]);
console.log('add("Les nombres: ", [4,5,6]) ->', stringArray); // "Les nombres: 4,5,6"
