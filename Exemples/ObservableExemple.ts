import { Observable } from "rxjs";

// Création d'un Observable qui émet un nombre toutes les secondes
const observable = new Observable<number>((subscriber) => {
  let count = 0;
  const intervalId = setInterval(() => {
    count += 1;
    subscriber.next(count); // Émission de la valeur
    if (count === 5) {
      subscriber.complete(count); // Complétion de l'Observable après 5 émissions
    }
  }, 1000);

  // Fonction de nettoyage en cas de désabonnement
  return () => {
    clearInterval(intervalId);
    console.log("Observable nettoyé");
  };
});

// Création d'un Observer
const observer = {
  next: (value: number) => console.log(`Valeur reçue: ${value}`),
  error: (err: any) => console.error(`Erreur: ${err}`),
  complete: (value: number) => console.log("Observable complété"),
};

// Souscription à l'Observable
const subscription = observable.subscribe(observer);

// Optionnel : Se désabonner après un certain temps (par exemple, 6 secondes)
setTimeout(() => {
  subscription.unsubscribe();
  console.log("Désabonné de l'Observable");
}, 6000);
