interface IPersonne {
  nom: string;
  age: number;
  saluer(): void;
}

interface ISenior {
  bonusSenior: number;
}

interface IEmploye extends IPersonne {
  poste: string;
  salaire: number;
}

interface IEmployeSeniorCadre extends IEmploye, ISenior {
  bonusCadre: number;
}

class Employe implements IEmploye {
  constructor(
    public nom: string,
    public age: number,
    public poste: string,
    public salaire: number
  ) {}

  saluer(): void {
    console.log(
      `Bonjour, je m'appelle ${this.nom}, et je suis ${this.poste}, je gagne ${this.salaire}.`
    );
  }
}

class EmployeSenior extends Employe implements IEmployeSeniorCadre {
  constructor(
    nom: string,
    age: number,
    poste: string,
    salaire: number,
    public bonusSenior: number,
    public bonusCadre: number
  ) {
    super(nom, age, poste, salaire);
  }
}

let e: Employe = new Employe("Bobby", 49, "Comptable", 3500);
let eCS: EmployeSenior = new EmployeSenior(
  "Bobby",
  49,
  "Comptable",
  3500,
  500,
  500
);

e.saluer();
