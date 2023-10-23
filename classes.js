class Musiker {
  constructor(name, birth) {
    this.name = name;
    this.birth = birth;
    this.bands = [];
    this.prevBands = [];
    this.instruments = []
  }
}

class Band {
  constructor(datum) {
    this.info = "";
    this.startDate = datum;
    this.expDate = "";
    this.members = [];
    this.exMembers = []
  }
}

