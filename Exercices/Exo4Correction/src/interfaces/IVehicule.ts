export interface IVehicule {
  readonly id: string;
  marque: string;
  modele: string;
  annee: number;

  demarrer(): void;
  arreter(): void;
}
