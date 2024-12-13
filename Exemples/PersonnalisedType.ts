// un alias de type pour un utilisateur
type User = {
  id: number;
  name: string;
  isActive: boolean;
};

// un alias de type pour une fonction renvoyant une chaine
type StringFunction = () => string;

// une union pour representer des types de messages
type Message = string | { text: string; date: Date };

type Identified = { id: number };
type Person = { name: string };

type IdentifiedPerson = Identified & Person;

// Exemple d'utilisation
const user: User = { id: 1, name: "Alex", isActive: true };
const message: Message = { text: "Hello", date: new Date() };

const greet: StringFunction = (): string => {
  return "Hello World !";
};
