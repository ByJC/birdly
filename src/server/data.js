module.exports = {
        expenses : getExpenses()
};

// function getPeople() {
//     return [
//         {id: 1, firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida'},
//         {id: 2, firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California'},
//         {id: 3, firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York'},
//         {id: 4, firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota'},
//         {id: 5, firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota'},
//         {id: 6, firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina'},
//         {id: 7, firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming'},
//         {id: 8, firstName: 'Aaron', lastName: 'Jinglehiemer', age: 22, location: 'Utah'}
//     ];
// }

function getExpenses() {
  return [
    {id: 1, libelle:'ticket route', categorie: 'péage', date:'23/02/2015', ttc : '12,5€', tva: '2,5€', ht: '10€', comment:''},
    {id: 2, libelle:'McDo', categorie: 'Restaurant', date:'23/02/2015', ttc : '11,6€', tva: '1,7€', ht: '9,9€', comment:''},
    {id: 3, libelle:'Uber', categorie: 'Taxi', date:'23/02/2015', ttc : '3,6€', tva: '0,6€', ht: '3€', comment:''},
    {id: 4, libelle:'SNCF', categorie: 'Train', date:'23/02/2015', ttc : '88€', tva: '17€', ht: '71€', comment:''},
    {id: 5, libelle:'Malaisia', categorie: 'Avion', date:'23/02/2015', ttc : '52€', tva: '50€', ht: '2€', comment:''},
    {id: 6, libelle:'Bic', categorie: 'Fournitures', date:'23/02/2015', ttc : '1€', tva: '0,20€', ht: '0,80€', comment:''},
    {id: 7, libelle:'Free', categorie: 'Téléphone', date:'23/02/2015', ttc : '3,99€', tva: '0,99€', ht: '3€', comment:''},
    {id: 8, libelle:'Total', categorie: 'Gazole', date:'23/02/2015', ttc : '43,52€', tva: '12€', ht: '31,52€', comment:''}
  ];
}

function getAllowances() {
  return [
    {id: 1, libelle:'', categorie: '', date:'', ttc : '', tva: '', ht: '', comment:''},
  ]
}
