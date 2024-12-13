/**
 * Implémentation générique d'une pile (stack) en TypeScript.
 * La classe est paramétrée par un type T, qui représente
 * le type des éléments stockés dans la pile.
 */
class Stack<T> {
  private items: T[] = [];

  constructor(...initialItems: T[]) {
    this.items.push(...initialItems);
  }

  public push(item: T): void {
    this.items.push(item);
  }

  public pop(): T | undefined {
    return this.items.pop();
  }

  public peek(): T | undefined {
    if (this.items.length === 0) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }

  public isEmpty(): boolean {
    return this.items.length === 0;
  }

  public size(): number {
    return this.items.length;
  }
}

// ----------------------------
// Exemple d'utilisation
// ----------------------------

// Instanciation d'une pile de nombres
const numberStack = new Stack<number>(1, 2, 3);

// On peut empiler un nouveau nombre
numberStack.push(4);

// Récupérer le sommet de la pile (sans dépiler)
console.log("Sommet de la pile:", numberStack.peek()); // Affiche: 4

// Dépiler un élément
const poppedNumber = numberStack.pop();
numberStack.pop();
numberStack.pop();
numberStack.pop();
console.log("Élément dépilé:", poppedNumber); // Affiche: 4

// Vérifier si la pile est vide
console.log("Pile vide ?", numberStack.isEmpty()); // Affiche: true

// Afficher la taille de la pile
console.log("Taille de la pile:", numberStack.size()); // Affiche: 0

// Instanciation d'une pile de chaînes
const stringStack = new Stack<string>();
stringStack.push("hello");
stringStack.push("world");
console.log("Sommet stringStack:", stringStack.peek()); // "world"

// ------------------------------------------------
/**
 * Interface décrivant tout objet ayant au moins un id: number
 */
interface Identifiable {
  id: number;
}

class Repository<T extends Identifiable> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  findById(id: number): T | undefined {
    return this.items.find((item) => item.id === id);
  }
}

// Exemple d'utilisation
interface User {
  id: number;
  name: string;
}

// On peut utiliser Repository<User> car User possède un id: number
const userRepo = new Repository<User>();

userRepo.add({ id: 1, name: "Alice" });
userRepo.add({ id: 2, name: "Bob" });

const foundUser = userRepo.findById(2);
console.log(foundUser); // { id: 2, name: "Bob" }
