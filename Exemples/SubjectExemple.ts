import { Subject } from "rxjs";

// Création d'un Subject
const subject = new Subject<number>();

// Abonnement 1
subject.subscribe({
  next: (value) => console.log(`Abonné 1: ${value}`),
});

// Abonnement 2
subject.subscribe({
  next: (value) => console.log(`Abonné 2: ${value}`),
});

// Émission de valeurs
subject.next(1);
subject.next(2);
subject.next(3);

// Abonnement avec désabonnement
const subscription = subject.subscribe({
  next: (value) => console.log(`Abonné unique: ${value}`),
});

// Émission de valeur
subject.next(4); // Abonné unique reçoit 4

// Désabonnement
subscription.unsubscribe();

// Émission de valeur après désabonnement
subject.next(5); // Abonné unique ne reçoit pas 5
