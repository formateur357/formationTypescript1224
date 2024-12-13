import { Vehicule } from "../abstract/Vehicule";
import { ILivraison } from "../interfaces/ILivraison";

export class Camion extends Vehicule implements ILivraison {
  constructor(
    id: string,
    marque: string,
    modele: string,
    annee: number,
    private _capaciteCharge: number,
    private _chargeActuelle: number = 0
  ) {
    super(id, marque, modele, annee);
  }

  public get capaciteCharge(): number {
    return this._capaciteCharge;
  }

  public set capaciteCharge(nouvelleCapacite: number) {
    if (nouvelleCapacite < 0) {
      throw new Error("La capacite de charge ne peut pas etre negative");
    }
    this._capaciteCharge = nouvelleCapacite;
  }

  /**
   * Méthode pour charger le camion
   * @param masse Masse à charger en kg
   */
  public charger(masse: number): void {
    if (masse <= 0) {
      throw new Error("La masse à charger doit être positive.");
    }
    if (this._chargeActuelle + masse > this._capaciteCharge) {
      throw new Error("Capacité de charge dépassée.");
    }
    this._chargeActuelle += masse;
    console.log(
      `Camion chargé avec ${masse} kg. Charge actuelle: ${this._chargeActuelle} kg.`
    );
  }

  /**
   * Méthode pour décharger le camion
   */
  public decharger(): void {
    if (this._chargeActuelle === 0) {
      console.log("Le camion n'est pas chargé.");
    } else {
      console.log(`Camion déchargé de ${this._chargeActuelle} kg.`);
      this._chargeActuelle = 0;
    }
  }

  /**
   * Implémentation de la méthode abstraite entretien
   */
  public entretien(): void {
    console.log(`Entretien du camion ${this.marque} ${this.modele} effectué.`);
  }
}
