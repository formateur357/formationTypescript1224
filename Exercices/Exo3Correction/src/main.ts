import { Voiture } from "./classes/Voiture";
import { Camion } from "./classes/Camion";
import { Moto } from "./classes/Moto";

function exo3() {
  // Instance de Voiture
  const maVoiture = new Voiture("Toyota", "Corolla", 2020, 15000, 4, "Essence");
  maVoiture.demarrer();
  maVoiture.ouvrirCoffre();
  maVoiture.afficherDetails();
  maVoiture.arreter();

  console.log("--------------------------");

  // Instance de Camion
  const monCamion = new Camion("Mercedes-Benz", "Actros", 2018, 50000, 18, 3);
  monCamion.demarrer();
  monCamion.charger();
  monCamion.afficherDetails();
  monCamion.arreter();

  console.log("--------------------------");

  // Instance de Moto
  const maMoto = new Moto(
    "Harley-Davidson",
    "Sportster",
    2021,
    8000,
    "4 Temps",
    false
  );
  maMoto.demarrer();
  maMoto.faireWheelie();
  maMoto.afficherDetails();
  maMoto.arreter();
}

exo3();
