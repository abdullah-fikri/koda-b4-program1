import { umur } from "./lib/umur.js";
import {question} from "./lib/interface.js";

async function sapa(){
    const quest = await question("Halo siapa namamu?");
    await  console.log(`halo ${quest} Selamat datang di program tebak umur`);
    await umur();
}
sapa();

