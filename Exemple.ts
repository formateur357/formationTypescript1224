function main() {
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

main();
