abstract class Vehicule {
  abstract demarrer(): void;

  arreter(): void {
    console.log("Le vehicule s'arrete.");
  }
}

class Voiture extends Vehicule {
  demarrer(): void {
    console.log("La voiture demarre.");
  }
}

const maVoiture: Voiture = new Voiture();
maVoiture.demarrer();
maVoiture.arreter();
