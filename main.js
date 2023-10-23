import Musiker from "./classes";
import Band from ".classes"
import fs from "fs";

const data = fs.readFileSync('data.json');
const jsonData = JSON.parse(data);

let band = new Band("1999");