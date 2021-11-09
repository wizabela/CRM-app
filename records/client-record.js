class ClientRecord { //pojedynczy obiekt jest w klasie
    constructor(obj) {
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