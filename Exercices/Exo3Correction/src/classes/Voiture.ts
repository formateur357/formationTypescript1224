import { Vehicule } from "./Vehicule";

export class Voiture extends Vehicule {
  constructor(
    marque: string,
    modele: string,
    annee: number,
    kilometrage: number,
    private nombrePortes: number,
    private typeCarburant: string
  ) {
    super(marque, modele, annee, kilometrage);
  }

  public ouvrirCoffre(): void {
    console.log(`${this.marque} ${this.modele} : Le coffre s'ouvre.`);
  }

  // Override de la méthode afficherDetails pour inclure les propriétés spécifiques
  public afficherDetails(): void {
    super.afficherDetails();
    console.log(`Nombre de Portes : ${this.nombrePortes}`);
    console.log(`Type de Carburant : ${this.typeCarburant}`);
  }
}
