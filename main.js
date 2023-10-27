const fs = require('fs');
const prompt = require('prompt-sync')({ sigint: true });

const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));


class Musiker {
    constructor(name, info, birth) {
      this._name = name;
      this._info = info
      this._birth = birth;
      this._members = [];
      this._prevBands = [];
      this._instruments = []
    }
    get name(){
        return this._name;
    }
    set name(mName){
        this.name = mName;
    }

    get info(){
        return this._info
    }
    set info(information){
        this._info = information;
    }

    get birth(){
        return this._name;
    }
    set birth(mBirth){
        this.name = mBirth;
    }

    get members(){
        return this._members;
    }
    set members(str){
        this._members.push(str)
    }

    get prevBands(){
        return this._prevBands;
    }
    set prevBands(bPrevMember){
        this._prevBands.push(bPrevMember);
    }

    get instruments(){
        return this._instruments;
    }
    set instruments(str){
        this._instruments.push(str);
    }
  }
  
class Band {
    constructor(name, info, startDate, expDate) {
      this._name = name
      this._info = info;
      this._startDate = startDate;
      this._expDate = expDate;
      this._members = [];
      this._exMembers = []
    }
    get name(){
        return this._name
    }

    get info(){
        return this._info
    }
    set info(info){
        this._info = info;
    }

    get startDate(){
        return this._startDate;
    }
    set startDate(date){
        this._startDate = date;
    }

    get expDate(){
        return this._expDate;
    }
    set expDate(date){
        this._expDate = date;
    }

    get memebers(){
        return this._members;
    }
    set members(str){
        this._members.push(str);
    }

    get exMembers(){
        return this._exMembers;
    }
    set exMembers(str){
        this._exMembers.push(str);
    }
}

class Manager {
    constructor() {
      this.bands = [];
      this.musiker = [];
    }

    get bandss(){
        return this.bands
    }
    set bandss(str){
        void (0);
    }

    get musikerr(){
        return this.musiker
    }
    set musikerr(str){
        void (0);
    }
    getMusikerinfo(namn){
        for(let i = 0; i < this.musiker.length; i++){
            if(this.musiker[i].name == namn){
              console.log("Musikerns namn: " + this.musiker[i].name);
              let currentDate = new Date();
              let birth = new Date(this.musiker[i].birth);
              let age = currentDate.getFullYear() - birth.getFullYear();
              console.log("Ålder: " + age);
              console.log("Information: " + this.musiker[i].info);
              console.log("Band musikern är med i: ");
              for(let j = 0; j < this.musiker[i].members.length; j++){
                console.log("\t" + this.musiker[i].members[j]);
                }
              console.log("Instrument musikern spelar: ");
              for(let j = 0; j < this.musiker[i].instruments.length; j++){
                  console.log("\t"+ this.musiker[i].instruments[j]);
              }

            }
        }
    }

    getBandInfo(namn){
        for(let i = 0; i < this.musiker.length; i++){
            if(this.musiker[i].name == namn){
              console.log("Bandets namn: " + this.band[i].name);
              console.log("Information: " + this.band[i].info);
              console.log("Band musikern är med i: ");
              for(let j = 0; j < this.bands[i].members.length; j++){
                console.log("\t" + this.bands[i].members[j]);
                }
              console.log("Tidigare band musikern har spelat i: ");
              for(let j = 0; j < this.bands[i].prevBands.length; j++){
                console.log("\t" + this.bands[i].prevBands)
              }

              console.log("Bandets start datum:" + this.bands.startDate);
              console.log("Tidigare band medlemmar: ");
              for(let j = 0; j < this.bands[i].prevBands.length; j++){
                console.log("\t" + this.bands[i].prevBands)
              }

            }
        }
    }
  
    createBand(name, info, formedYear, dissolvedYear) {
      const band = new Band(name, info, formedYear, dissolvedYear);
      this.bands.push(band);

    }
  
    removeBand(name) {
        try {
            this.bands = this.bands.filter((band) => band.name !== name)
        } catch (error) {
            console.log("Bandet existerar inte. Kolla inmatningen så att den stämmer");
        }

    }
  
    createMusiker(name, info, birthYear) {
      const musician = new Musiker(name, info, birthYear);
      this.musiker.push(musician);

    }
  
    removeMusiker(name) {

      try {
          this.musiker = this.musiker.filter((musician) => musician.name !== name);
      } catch (error) {
        
      }

    }

    assignBand(musician, band){
        bandCheck = false;
        musikerCheck = false;
        for(let i = 0; i < this.bands.length; i++){
            if (this.bands[i].name == band){
                bandCheck = true;
            }

        }
        for(let i = 0; i < this.musiker.length; i++){
            if(this.musiker[i].name == musician){
                musikerCheck = true
            }
        }
        
    }
}

function prevData(){
    this.bands = data.results.bands;
    this.musiker = data.results.musiker;
}

function main() {
    const manager = new Manager();
    manager.bandss = prevData.bands;
    manager.musikerr = prevData.musiker;
    let check = true;
    while(check){
        console.log("Vad vill du göra?");
        console.log("1: lägg till ett band");
        console.log("2: Ta bort ett band");
        console.log("3: Lägg till en musiker");
        console.log("4: Ta bort musiker");
        console.log("5: Lägg till/ta bort musiker från ett band");
        console.log("6: Lägg till/ta bort ett band från en musiker");
        console.log("7: Visa information om en musiker");
        console.log("8: Visa information om ett band");
        answer = prompt().toLowerCase().trim();

        if (answer == "1") {
            let namn = prompt("Vad heter bandet du vill lägga till?\t").trim()
            let information = prompt("Vad vill du lägga till för information om bandet?\t").trim()
            let checker = true
            let year = ""
            let endYear = ""
            while(checker){
                year = prompt("Vilket år skapades bandet? svara med 12 siffror\t");
                console.log(year.length)
                if((year.length = 12 || isNaN(parseInt(year)) != false)){
                    checker = false
                }
            }
            checker = true;
            while(checker){
                let endYear = prompt("Vilket år avslutades bandet? Om bandet fortfarande är aktivt tryck enter\t");
                if((endYear.length = 12 || isNaN(parseInt(year)) != false)){
                    checker = false;
                }
                else if(endYear == ""){
                    checker = false;
                }
            }
            manager.createBand(namn, information, year, endYear);
        }
        else if (answer == "2") {
            console.log("Vad heter bandet du vill ta bort?");
            let namn = prompt().trim()
            manager.removeBand(namn);
        }
        else if(answer == "3"){
            manager.createMusiker("4", "2", "20010814");
            manager.getMusikerinfo("4");
        }
        else if(answer == "4"){
            console.log("Vad heter bandet du vill ta bort?");
            let namn = prompt().trim()
            manager.removeMusiker(namn)
            console.log(manager.musiker)
        }
        else if(answer == "5"){
            console.log("Vill du lägga till eller ta bort en musiker från ett band. svara med 'till' eller 'bort'");
            let choice;
            while(choice != "till" || choice != "bort"){
                choice = prompt().toLowerCase().trim()
                if (choice == "till"){
                    manager.assignBand()
                }
                else if(choice == "bort"){

                }
                else{
                    void (0)
                }
            }
        }
        else if(answer == "6"){

        }
        else if(answer == "7"){
            let namn = prompt("Vad heter musikern du vill ha information om?\t").trim();
            manager.getMusikerinfo(namn);
        }
        else if(answer == "8"){
            let namn = prompt("Vad heter bandet du vill ha information om?\t").trim();
            manager.getBandInfo()
        }
        else {
            console.log("Du har matat in ett felaktigt svar");
            console.clear();
            main();

        }


        let again = prompt("Vill du fortsätta med programmet tryck valfri knapp. Annars tryck 'q' för att avsluta\t")
        if(again == "q"){
            check = false
        }
    }

    data.bands.push({
        bands: manager.bandss,
    })

    data.musiker.push({
        musiker: manager.musikerr
    })
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
    
}
    
console.log("Hej och välkommen musiker och band databasen");
main()
