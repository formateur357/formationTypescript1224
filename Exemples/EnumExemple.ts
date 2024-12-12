function enumExemple(): void {
  enum Fruit {
    Banane,
    Kiwi,
    Orange,
  }
  let k: Fruit = Fruit.Kiwi;
  console.log(k);
  // Affiche : 1

  enum Couleur {
    Rouge,
    Vert = -0.2,
    Jaune = 58,
  }
  let n: Couleur = Couleur.Jaune;
  console.log(n);
  // Affiche : 58
}
