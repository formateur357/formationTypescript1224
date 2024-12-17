// src/decorators/ReadOnlyProperty.ts

export function ReadOnlyProperty() {
  return function (context: ClassFieldDecoratorContext<any, any>) {
    const { kind, name, access } = context;

    if (kind !== "field") {
      throw new Error(
        "ReadOnlyProperty peut uniquement être appliqué aux champs."
      );
    }

    if (context && context?.target) {
      // Obtenir le prototype de la classe
      const prototype =
        context.kind === "field" ? context.target : context.target.prototype;
    }

    if (typeof prototype !== "object" || prototype === null) {
      throw new TypeError("La cible du décorateur n'est pas un objet valide.");
    }

    // Définir la propriété comme non modifiable
    Object.defineProperty(prototype, String(name), {
      writable: false,
      configurable: false,
    });

    console.log(`Propriété "${String(name)}" définie en lecture seule.`);
  };
}

class Person {
  @ReadOnlyProperty()
  name: string = "Alice";

  constructor(name: string) {
    this.name = name;
  }
}

const p: Person = new Person("Alice");
console.log(p.name); // Affiche: Alice

try {
  p.name = "Alex"; // Tentative de modification
} catch (error) {
  console.error("Erreur lors de la modification de 'name':", error);
}

console.log(p.name); // Affiche toujours: Alice
