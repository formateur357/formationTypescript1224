function anyVoidExemple(): void {}

let v: any = "Salut";
v = 1;
v = true;
let liste: any[] = ["John", false, 123];
liste[0] = 35;

// let n: void = null; // ne fonctionne que si strictNullChecks est à false dans le fichier tsconfig.json
let n2: null | undefined = null;
n2 = undefined;

function direCoucou(): void {
  console.log("Coucou !");
}
