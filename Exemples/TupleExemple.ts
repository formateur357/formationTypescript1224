function tupleExemple(): void {
  // déclaration
  let user: [string, number] = ["moguy", 83];
  console.log(user);
  // initialisation correcte
  user = ["John", 35]; // ok
  // initialisation incorrecte
  // user = [35, "John"]; // Erreur
  console.log(user);
}
