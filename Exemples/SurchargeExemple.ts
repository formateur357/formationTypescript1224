function surchargeExemple() {
  // on declare plusieurs pour la fonction 'add' :
  function add(a: number, b: number): number;
  function add(a: string, b: string): string;
  function add(a: string, b: number): string;
  function add(a: number, b: string): string;
  function add(a: number[], b: string): string;
  function add(a: string, b: number[]): string;
  function add(a: number[], b: number[]): string;
  function add(a: string[], b: string[]): string;

  // Implementation commune - Notez que typescript exige une seul implementation
  function add(
    a: number | string | number[] | string[],
    b: number | string | number[] | string[]
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
    } else if (
      Array.isArray(a) &&
      a.every((item) => typeof item === "number") &&
      Array.isArray(b) &&
      b.every((item) => typeof item === "number")
    ) {
      return (
        a.reduce((acc, val) => acc + val, 0) +
        b.reduce((acc, val) => acc + val, 0)
      );
    } else if (
      Array.isArray(a) &&
      a.every((item) => typeof item === "string") &&
      Array.isArray(b) &&
      b.every((item) => typeof item === "string")
    ) {
      return a.join(",") + b.join(",");
    } // On pourrait gerer d'autres cas si necessaires.
    throw new Error(
      "Les types ne correspondent pas aux signatures surchargees."
    );
  }
}
