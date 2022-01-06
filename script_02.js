const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 },
    { title: 'Mon Livre', id: 7484842132, rented: 0 }
];

console.log(" ")
console.log("Sors-moi la liste des titres des livres du CDI")
console.log(books.forEach(book => console.log(book.title)))


console.log(" ")
console.log("Vérifie si les livres ont été au moins empruntés une fois ")
console.log(books.every(item => item.rented > 1) ? "Ils ont bien tous été emprunté une fois" : "Non un ou plusieurs livres n'a pas fait l'objet d'un emprunt")


console.log(" ")
console.log("Quel est le livre le plus emprunté ? ")
console.log(books.reduce((a, b) => a.rented > b.rented ? a : b))


console.log(" ")
console.log("Quel est le livre le moins emprunté ? ")
console.log(books.reduce((a, b) => a.rented < b.rented ? a : b))

console.log(" ")
console.log("Supprime le livre avec l'ID 133712")
function delete133712() {
  for (let i in books) {
    if (books[i].id === 133712) {
      books.splice(i, 1);
    }
  }
  books.forEach(books => console.log(`${books.title} ${books.id}`))
}
delete133712() 
