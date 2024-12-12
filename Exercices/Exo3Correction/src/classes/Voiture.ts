import { Vehicule } from "./Vehicule";

export class Voiture extends Vehicule {
  private nombrePortes: number;
  private typeCarburant: string;

  constructor(
    marque: string,
    modele: string,
    annee: number,
    kilometrage: number,
    nombrePortes: number,
    typeCarburant: string
  ) {
    super(marque, modele, annee, kilometrage);
    this.nombrePortes = nombrePortes;
    this.typeCarburant = typeCarburant;
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
