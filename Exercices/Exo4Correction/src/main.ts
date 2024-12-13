import { IVehicule } from "./interfaces/IVehicule";
import { Vehicule } from "./abstract/Vehicule";
import { ILivraison } from "./interfaces/ILivraison";
import { VoitureLivraison, Camion, Moto } from "./classes";

// Fonction pour démarrer un véhicule
function demarrerVehicule(vehicule: IVehicule): void {
  vehicule.demarrer();
}

// Fonction pour effectuer un entretien
function effectuerEntretien(vehicule: Vehicule): void {
  vehicule.entretien();
}

// Fonction pour charger un véhicule de livraison
function chargerVehiculeLivraison(livraison: ILivraison, masse: number): void {
  livraison.charger(masse);
}

// Création des instances des véhicules
const moto1 = new Moto("M001", "Yamaha", "MT-07", 2019);
console.log(moto1);
const camion1 = new Camion("C001", "Volvo", "FH16", 2020, 20000);
const voitureLivraison1 = new VoitureLivraison(
  "V001",
  "Ford",
  "Transit",
  2021,
  1500
);

// Utilisation des fonctions avec Duck Typing

// Démarrer les véhicules
demarrerVehicule(camion1); // Volvo FH16 démarre.
demarrerVehicule(moto1); // Yamaha MT-07 démarre.
demarrerVehicule(voitureLivraison1); // Ford Transit démarre.

// Effectuer un entretien
effectuerEntretien(camion1); // Entretien du camion Volvo FH16 effectué.
effectuerEntretien(moto1); // Entretien de la moto Yamaha MT-07 effectué.
effectuerEntretien(voitureLivraison1); // Entretien de la voiture de livraison Ford Transit effectué.

// Charger des véhicules de livraison
chargerVehiculeLivraison(camion1, 5000); // Camion chargé avec 5000 kg. Charge actuelle: 5000 kg.
chargerVehiculeLivraison(voitureLivraison1, 1000); // Voiture de livraison chargée avec 1000 kg. Charge actuelle: 1000 kg.

// Décharger les véhicules
camion1.decharger(); // Camion déchargé de 5000 kg.
voitureLivraison1.decharger(); // Voiture de livraison déchargée de 1000 kg.

// Tenter de charger une moto (doit provoquer une erreur de compilation)
// Décommentez la ligne suivante pour voir l'erreur
// chargerVehiculeLivraison(moto1, 200); // Erreur de compilation

// Exemple de gestion des erreurs avec try-catch
try {
  // Tenter de charger une masse négative
  camion1.charger(-100);
} catch (error: any) {
  console.error(error.message); // Affiche: La masse à charger doit être positive.
}

try {
  // Tenter de charger au-delà de la capacité
  camion1.charger(25000);
} catch (error: any) {
  console.error(error.message); // Affiche: Capacité de charge dépassée.
}

try {
  // Tenter de définir une année invalide
  const moto2 = new Moto("M002", "Honda", "CBR600RR", 1800);
} catch (error: any) {
  console.error(error.message); // Affiche: Année invalide pour un véhicule. Doit être entre 1886 et [année actuelle].
}
