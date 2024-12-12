function arrayExemple(): void {
  let tab0: number[] = [-5, 2, 8];
  tab0.push(12.56); // OK
  // tab0.push("Salut !"); // Erreur
  // Argument of type 'string' is not assignable to parameter of type 'number'.

  let tab1: Array<number> = [-8, 15.9, 0]; // notation generique.
}
