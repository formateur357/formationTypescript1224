/* Décomposition dans les fonctions et Enum pour filtrage
Objectif : Utiliser la décomposition de paramètres dans une fonction, et l’enum pour filtrer les données.

Énoncé :

- Définissez un enum Category avec les valeurs BOOK et MUSIC.
- Créez un type Item représentant un objet avec title: string, price: number, category: Category.
- Créez un tableau items contenant plusieurs objets Item.
- Écrivez une fonction filterItemsByCategory(items: Item[], category: Category): Item[] qui retourne un nouveau tableau filtré par catégorie.
- Appelez cette fonction et utilisez une décomposition du tableau retourné dans des variables individuelles (par exemple, pour tester la décomposition si vous obtenez un tableau filtré).
*/
var Category;
(function (Category) {
    Category[Category["BOOK"] = 0] = "BOOK";
    Category[Category["MUSIC"] = 1] = "MUSIC";
})(Category || (Category = {}));
var items = [
    { title: "Livre A", price: 10, category: Category.BOOK },
    { title: "Musique B", price: 15, category: Category.MUSIC },
    { title: "Livre C", price: 20, category: Category.BOOK },
];
function filterItemsByCategory(items, category) {
    return items.filter(function (item) { return item.category === category; });
}
var filteredBooks = filterItemsByCategory(items, Category.BOOK);
var firstBook = filteredBooks[0], secondBook = filteredBooks[1];
console.log("Livres filtres: ", filteredBooks);
console.log("Premier livre: ", firstBook);
console.log("Second livre: ", secondBook);
