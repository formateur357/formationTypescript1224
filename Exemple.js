function main() {
    var o2 = {
        m: "foo",
        n: [{ p: "foo" }, { q: "bar" }],
    };
    var m = o2.m, _a = o2.n, p = _a[0].p, q = _a[1].q;
    console.log("m : ".concat(m, ", p : ").concat(p, ", q : ").concat(q));
}
main();
