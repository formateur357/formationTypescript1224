export interface ILivraison {
  capaciteCharge: number;

  charger(masse: number): void;
  decharger(): void;
}
