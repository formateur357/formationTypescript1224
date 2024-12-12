function surchargeExemple() {
  // on declare plusieurs pour la fonction 'add' :
  function add(a: number, b: number): number;
  function add(a: string, b: string): string;
  function add(a: string, b: number): string;
  function add(a: number, b: string): string;
  function add(a: number[], b: string): string;
  function add(a: string, b: number[]): string;

  // Implementation commune - Notez que typescript exige une seul implementation
  function add(
    a: number | string | number[],
    b: number | string | number[]
  ): number | string {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    } else if (typeof a === "string" && typeof b === "string") {
      return a.concat(b);
      // return a + b;
    } else if (typeof a === "string" && typeof b === "number") {
      return a + b.toString();
    } else if (typeof a === "number" && typeof b === "string") {
      return a.toString() + b;
    } else if (Array.isArray(a) && typeof b === "string") {
      return a.join(",") + b;
    } else if (typeof a === "string" && Array.isArray(b)) {
      return a + b.join(",");
    } // On pourrait gerer d'autres cas si necessaires.
    throw new Error(
      "Les types ne correspondent pas aux signatures surchargees."
    );
  }
}
