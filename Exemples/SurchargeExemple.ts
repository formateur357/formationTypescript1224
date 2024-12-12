// on declare plusieurs pour la fonction 'add' :
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: number[], b: string): string;
function add(a: string, b: number[]): string;

// Implementation commune - Notez que typescript exige une seul implementation
function add(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
    // return a + b;
  }
  // On pourrait gerer d'autres cas si necessaires.
  throw new Error("Les types ne correspondent pas aux signatures surchargees.");
}

const sum = add(10, 20); // sum: number
const fullName = add("John", "Doe"); // fullName: string

console.log(sum);
console.log(fullName);
