export class Vehicule {
  protected marque: string;
  protected modele: string;
  protected annee: number;
  protected kilometrage: number;

  constructor(
    marque: string,
    modele: string,
    annee: number,
    kilometrage: number
  ) {
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
    this.kilometrage = kilometrage;
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
