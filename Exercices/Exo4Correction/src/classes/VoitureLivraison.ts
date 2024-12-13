import { Vehicule } from "../abstract/Vehicule";
import { ILivraison } from "../interfaces/ILivraison";

/**
 * Classe VoitureLivraison
 * Hérite de Vehicule et implémente l'interface ILivraison.
 */
export class VoitureLivraison extends Vehicule implements ILivraison {
  private _capaciteCharge: number; // Capacité de charge en kg
  private _chargeActuelle: number = 0; // Charge actuelle en kg

  /**
   * Constructeur de la classe VoitureLivraison
   * @param id Identifiant unique de la voiture de livraison
   * @param marque Marque de la voiture de livraison
   * @param modele Modèle de la voiture de livraison
   * @param annee Année de fabrication de la voiture de livraison
   * @param capaciteCharge Capacité maximale de charge en kg
   */
  constructor(
    id: string,
    marque: string,
    modele: string,
    annee: number,
    capaciteCharge: number
  ) {
    super(id, marque, modele, annee);
    this._capaciteCharge = capaciteCharge; // Utilisation du setter pour validation
  }

  // Implémentation de l'interface ILivraison

  public get capaciteCharge(): number {
    return this._capaciteCharge;
  }

  public set capaciteCharge(nouvelleCapacite: number) {
    if (nouvelleCapacite < 0) {
      throw new Error("La capacité de charge ne peut pas être négative.");
    }
    this._capaciteCharge = nouvelleCapacite;
  }

  /**
   * Méthode pour charger la voiture de livraison
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
      `Voiture de livraison chargée avec ${masse} kg. Charge actuelle: ${this._chargeActuelle} kg.`
    );
  }

  /**
   * Méthode pour décharger la voiture de livraison
   */
  public decharger(): void {
    if (this._chargeActuelle === 0) {
      console.log("La voiture de livraison n'est pas chargée.");
    } else {
      console.log(
        `Voiture de livraison déchargée de ${this._chargeActuelle} kg.`
      );
      this._chargeActuelle = 0;
    }
  }

  /**
   * Implémentation de la méthode abstraite entretien
   */
  public entretien(): void {
    console.log(
      `Entretien de la voiture de livraison ${this.marque} ${this.modele} effectué.`
    );
  }
}
