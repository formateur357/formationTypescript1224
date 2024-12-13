// src/decorators/ReadOnlyProperty.ts
import "reflect-metadata";

// export function ReadOnlyProperty() {
//   return function (context: ClassFieldDecoratorContext<any, any>) {
//     const { kind, name, access, addInitializer } = context;

//     if (kind !== "field") {
//       throw new Error(
//         "ReadOnlyProperty peut uniquement être appliqué aux champs."
//       );
//     }

//     // Définir la propriété en lecture seule
//     Object.defineProperty(context.target, name, {
//       writable: false,
//     });

//     console.log(`Propriété décorée : ${String(name)}`);
//   };
// }

class Person {
  private _name: string = "Alice";

  @ReadOnlyProperty()
  get name(): string {
    return this._name;
  }
}

const p: Person = new Person();
p.name = "Alex";
