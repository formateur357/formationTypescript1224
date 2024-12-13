Exercice : Gestion d'une Flotte de Véhicules en TypeScript

Contexte :
Vous êtes chargé de développer une application de gestion de flotte de véhicules pour une entreprise de logistique. La flotte comprend différents types de véhicules tels que des camions, des voitures de livraison et des motos. Chaque type de véhicule possède des caractéristiques communes et spécifiques.

-----------------------------------
Objectifs :
1. Définir des Interfaces :

- Créer une interface IVehicule qui décrit les propriétés et méthodes communes à tous les véhicules.
- Créer une interface ILivraison pour les véhicules capables de réaliser des livraisons.
- Créer une Classe Abstraite :
  . Développer une classe abstraite Vehicule qui implémente l'interface IVehicule.
  . Inclure des propriétés avec des modificateurs de visibilité appropriés (public, private, protected).
  . Définir une méthode abstraite entretien à implémenter dans les classes dérivées.

2.  Implémenter des Classes Concrètes :

  - Camion :
    . Hérite de Vehicule et implémente l'interface ILivraison.
    . Inclut des propriétés spécifiques telles que capaciteCharge.
    . Implémente les méthodes charger, decharger et entretien.

  - Moto :
    . Hérite de Vehicule sans implémenter ILivraison.
    . Implémente la méthode entretien.

  - VoitureLivraison :
    . Hérite de Vehicule et implémente l'interface ILivraison.
    . Inclut des propriétés spécifiques similaires à celles du Camion.
    . Implémente les méthodes charger, decharger et entretien.

3. Utiliser le Duck Typing :

- Créer des fonctions génériques qui opèrent sur les interfaces IVehicule et ILivraison sans se préoccuper des classes concrètes.
- Illustrer l'utilisation de ces fonctions avec différentes instances de véhicules.

--------------------------------------------------------------------------------
Instructions :
1. Définition des Interfaces :

- IVehicule doit inclure :
  . Propriétés : id (readonly, string), marque (string), modele (string), annee (number).
  . Méthodes : demarrer() et arreter().

- ILivraison doit inclure :
  . Propriété : capaciteCharge (number).
  . Méthodes : charger(masse: number) et decharger().

2. Classe Abstraite Vehicule :

- Implémente IVehicule.

- Propriétés :
  . id : public readonly.
  . _marque et _modele : private.
  . _annee : protected.

- Inclure des getters et setters pour les propriétés privées et protégées avec validation appropriée.

- Méthodes concrètes : demarrer() et arreter().

- Méthode abstraite : entretien().

3. Classes Concrètes :

- Camion et VoitureLivraison :
  . Implémentent ILivraison.
  . Propriété supplémentaire : capaciteCharge.
  . Méthodes charger et decharger avec logique de gestion de la charge.
  . Implémentent la méthode entretien avec un message spécifique.

- Moto :
  . N'implémente pas ILivraison.
  . Implémente uniquement la méthode entretien avec un message spécifique.

4. Fonctions Utilisant le Duck Typing :

- demarrerVehicule(vehicule: IVehicule) : Appelle la méthode demarrer du véhicule.
- effectuerEntretien(vehicule: Vehicule) : Appelle la méthode entretien du véhicule.
- chargerVehiculeLivraison(livraison: ILivraison, masse: number) : Appelle la méthode charger avec la masse spécifiée.

5. Tests et Utilisation :

- Créer des instances de Camion, VoitureLivraison et Moto.
- Utiliser les fonctions définies pour démarrer les véhicules, effectuer des entretiens et gérer les livraisons.
- Tenter d'appeler chargerVehiculeLivraison sur une instance de Moto et observer le comportement (doit provoquer une erreur de compilation).