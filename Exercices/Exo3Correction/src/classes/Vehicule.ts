export class Vehicule {
  public id: number;
  public static otherId: number = 0;

  constructor(
    protected marque: string,
    protected modele: string,
    protected annee: number,
    protected kilometrage: number
  ) {
    this.id = Vehicule.otherId++;
  }

  public demarrer(): void {
    console.log(`${this.marque} ${this.modele} démarre.`);
  }

  public arreter(): void {
    console.log(`${this.marque} ${this.modele} s'arrête.`);
  }

  public afficherDetails(): void {
    console.log(`Détails du Véhicule :
      Marque : ${this.marque}
      Modèle : ${this.modele}
      Année : ${this.annee}
      Kilométrage : ${this.kilometrage} km`);
  }
}
