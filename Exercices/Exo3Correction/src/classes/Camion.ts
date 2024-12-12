import { Vehicule } from "./Vehicule";

export class Camion extends Vehicule {
  private capaciteCharge: number; // en tonnes
  private nombreEssieux: number;

  constructor(
    marque: string,
    modele: string,
    annee: number,
    kilometrage: number,
    capaciteCharge: number,
    nombreEssieux: number
  ) {
    super(marque, modele, annee, kilometrage);
    this.capaciteCharge = capaciteCharge;
    this.nombreEssieux = nombreEssieux;
  }

  public charger(): void {
    console.log(`${this.marque} ${this.modele} : Chargement en cours.`);
  }

  // Override de la méthode afficherDetails pour inclure les propriétés spécifiques
  public afficherDetails(): void {
    super.afficherDetails();
    console.log(`Capacité de Charge : ${this.capaciteCharge} tonnes`);
    console.log(`Nombre d'Essieux : ${this.nombreEssieux}`);
  }
}
