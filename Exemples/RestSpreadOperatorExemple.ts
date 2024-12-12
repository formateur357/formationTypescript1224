function RestSpreadExemple() {
  // Exemple rest sur les params d'une fonction
  function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    // return numbers.reduce((acc, curr) => acc + curr, 0);
  }

  // Decomposition du premier element, le reste va dans otherNumbers.
  const numberList: number[] = [33, 4455, 2, 56, 7, -8, 10.2];
  const [firstNumber, ...otherNumbers] = numberList;

  console.log(sum(1, 2, 3));
  console.log(sum(10, 15, 20, 25, 30));

  // spread operato afin d'etaler une liste.
  console.log(sum(...otherNumbers));

  const concatNumbers = [...otherNumbers, 45, firstNumber, ...numberList];

  console.log(sum(...otherNumbers));
  console.log(sum(...concatNumbers));
}

RestSpreadExemple();
