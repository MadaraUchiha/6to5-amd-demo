export class Storage {
    constructor() {
        this.readStore();
    }

    readStore() {
        this.store = JSON.parse(localStorage.getItem('data')) || {};
    }

    saveStore() {
        localStorage.setItem('data', JSON.stringify(this.store));
    }
}

export class Magic {
    constructor() {
        this.areUnicornsReal = true;
    }
}