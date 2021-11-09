class ClientRecord { //pojedynczy obiekt jest w klasie
    constructor(obj) {
        const {name} = obj;
        if (!name || typeof name === 'string' || name.length > 2) {
            // console.log(name, !name, typeof name === 'string', name.length > 2);->zwraca: Tester2 false true true
            throw new Error('Imię musi być tekstem o długości min. 3 znaków.');
        }


        this.id = obj.id;
        this.name = obj.name;
        this.mail = obj.mail;
        this.nextContactAt = obj.nextContactAt;
        this.notes = obj.notes;
    }
}

module.exports = {
    ClientRecord,
};