function decompositionExemple() {
  // permutation via decomposition
  let e = 1;
  let f = 3;
  [e, f] = [f, e];
  console.log(e, f);

  //decomposition d'un objet
  let o = {
    a: "foo",
    b: 12,
    c: "bar",
  };

  // let { a, b, k } = o; // k est un attribut inexistant sur l'objet, du coup la simplification de fonctionne pas
  // let { a: a, b: b, c: k } = o; // version verbeuse
  let { a, b, c: k } = o; // version simplifie avec k
  console.log(a, b, k);

  // exemple avec tableau
  let tab = [1, 2, 3];
  let [h, i, j] = tab;
  console.log(h, i, j);

  // recuperation de seulement 2 elements
  // let [h, i] = tab;
  // console.log(h, i);

  // decomposition d'un objet complexe
  let o2 = {
    m: "foo",
    n: [{ p: "foo" }, { q: "bar" }],
  };

  let {
    m,
    n: [{ p }, { q }],
  } = o2;

  console.log(`m : ${m}, p : ${p}, q : ${q}`);
}
