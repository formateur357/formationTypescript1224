import { IVehicule } from "../interfaces/IVehicule";

/**
 * Classe abstraite Vehicule
 * Implemente l'interface IVehicule et definit des methodes communes et abstraites.
 */
export abstract class Vehicule implements IVehicule {
  private _marque: string;
  private _modele: string;
  protected _annee: number;
  /**
   * Constructeur de la classe Vehicule
   * @param id Identifiant unique du vehicule
   * @param marque Marque du vehicule
   * @param modele Modele du vehicule
   * @param annee Annee de fabrication du vehicule
   */
  constructor(
    readonly id: string,
    marque: string,
    modele: string,
    annee: number
  ) {
    this._marque = marque;
    this._modele = modele;
    this._annee = annee;
  }

  public get marque(): string {
    return this._marque;
  }

  public set marque(nouvelleMarque: string) {
    if (nouvelleMarque.trim().length === 0) {
      throw new Error("La marque ne peut pas etre vide.");
    }
    this._marque = nouvelleMarque;
  }

  public get modele(): string {
    return this._modele;
  }

  public set modele(nouveauModele: string) {
    if (nouveauModele.trim().length === 0) {
      throw new Error("Le modele ne peut pas etre vide.");
    }
    this._modele = nouveauModele;
  }

  public get annee(): number {
    return this._annee;
  }

  public set annee(nouvelleAnnee: number) {
    const anneeMin = 1886;
    const anneeActuelle = new Date().getFullYear();
    if (nouvelleAnnee < anneeMin || nouvelleAnnee > anneeActuelle) {
      throw new Error("Annee invalide.");
    }
    this._annee = nouvelleAnnee;
  }
  /**
   * Methode pour demarrer la voiture
   */
  public demarrer(): void {
    console.log(`${this.marque} ${this.modele} demarre.`);
  }

  public arreter(): void {
    console.log(`${this.marque} ${this.modele} s'arrete.`);
  }

  public abstract entretien(): void;
}
