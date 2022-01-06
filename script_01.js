const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

console.log("Sors une array qui ne contient que le prénom et le nom des entrepreneurs")
function getFullName() {
  const fullName = entrepreneurs.map(entrepreneur => `${entrepreneur.first} ${entrepreneur.last}`);

  fullName.forEach(entrepreneurs => {
    console.log(entrepreneurs)
  })
}
getFullName()


console.log("Pour chaque entrepreneur, remplace la date de naissance par l'âge de l'entrepreneur qu'il aurait aujourd'hui")
function replaceByAge() {
    const arrayWithAge = entrepreneurs.map(entrepreneur => `first: ${entrepreneur.first}, last: ${entrepreneur.last}, age: ${2022 - entrepreneur.year}ans`)

    arrayWithAge.forEach(entrepreneurs => console.log(entrepreneurs))
};
replaceByAge()


console.log("Les clés first et last manquent de lisibilité, remplace-les par firstName et lastName")
function replaceKeysName() {
  const newKeyName = entrepreneurs.map(entrepreneur => `firstName: ${entrepreneur.first}, lastname: ${entrepreneur.last}`)

  newKeyName.forEach(entrepreneurs => console.log(entrepreneurs))
}
replaceKeysName()

console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70")
function bornIn70s(){
  let bornIn70s = entrepreneurs.filter(item => item.year > 1970 && item.year < 1980)
  bornIn70s.forEach(entrepreneurs => console.log(`${entrepreneurs.first} ${entrepreneurs.last} ${entrepreneurs.year}`))
}
bornIn70s()
