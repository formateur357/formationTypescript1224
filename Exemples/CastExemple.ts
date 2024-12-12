function castExemple() {
  let uneValeur: any = "Peut-être une chaîne ?";
  let longueur: number = (<string>uneValeur).length;
  let hauteur: number = uneValeur.length;

  // let uneValeur: any = "Peut-être une chaîne ?";
  // let longueur: number = (uneValeur as string).length;

  console.log(hauteur);
}
