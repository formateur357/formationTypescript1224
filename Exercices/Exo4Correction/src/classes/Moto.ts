import { Vehicule } from "../abstract/Vehicule";

/**
 * Classe Moto
 * Hérite de Vehicule sans implémenter ILivraison.
 */
export class Moto extends Vehicule {
  /**
   * Constructeur de la classe Moto
   * @param id Identifiant unique de la moto
   * @param marque Marque de la moto
   * @param modele Modèle de la moto
   * @param annee Année de fabrication de la moto
   */
  constructor(id: string, marque: string, modele: string, annee: number) {
    super(id, marque, modele, annee);
  }

  /**
   * Implémentation de la méthode abstraite entretien
   */
  public entretien(): void {
    console.log(`Entretien de la moto ${this.marque} ${this.modele} effectué.`);
  }
}
