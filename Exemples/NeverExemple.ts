function erreur(message: string): never {
  throw new Error(message);
}
// retourne un type never
// function fail() {
//   return error("Affiche une erreur");
// }

// boucle infinie
function nonStop(): never {
  while (true) {}
}
