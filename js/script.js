/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

console.log('Vue ok', Vue)

const root = new Vue({
    el: '#root',
    data: {
        firstName: 'Chiara',
        lastName: 'Mameli',
        age: '26',
        birthPlace: 'Cagliari',
        birthPlaceImage: 'https://www.sardegna.info/wp-content/uploads/sites/5/cagliari-hd.jpg',
    }
})