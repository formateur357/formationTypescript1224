import { Vehicule } from "./Vehicule";

export class Moto extends Vehicule {
  private typeMoteur: string;
  private hasSidecar: boolean;

  constructor(
    marque: string,
    modele: string,
    annee: number,
    kilometrage: number,
    typeMoteur: string,
    hasSidecar: boolean
  ) {
    super(marque, modele, annee, kilometrage);
    this.typeMoteur = typeMoteur;
    this.hasSidecar = hasSidecar;
  }

  public faireWheelie(): void {
    console.log(`${this.marque} ${this.modele} : Wheelie en cours !`);
  }

  // Override de la méthode afficherDetails pour inclure les propriétés spécifiques
  public afficherDetails(): void {
    super.afficherDetails();
    console.log(`Type de Moteur : ${this.typeMoteur}`);
    console.log(`Sidecar : ${this.hasSidecar ? "Oui" : "Non"}`);
  }
}
