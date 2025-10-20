import { findDestination, getDistance } from "./modules/bfsCountries.js"

const path = findDestination("USA", "PAN");


const distance = getDistance(path);

console.log(distance);

console.log(typeof [ "Test" ])