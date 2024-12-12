function paramExemple() {
  // parametres optionnels
  function addition(x: number, y?: number): number {
    if (y) {
      // nous testons si y est défini
      return x + y;
    }
    return x;
  }

  let resultat1 = addition(2);
  let resultat2 = addition(55, 20); // ok
  // ok

  // parametres avec valeur par defaut.
  function addition1(x: number, y = 12): number {
    return x + y;
  }
  function addition2(x = 8, y: number): number {
    return x + y;
  }

  let resultat3 = addition1(2); // ok
  let resultat4 = addition1(55, 20); // ok
  console.log(resultat3, resultat4);
  addition2(5, 2); // ok
  // addition2(3); // erreur, paramètre manquant
  addition2(undefined, 5); // ok
}
