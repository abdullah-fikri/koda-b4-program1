import { question } from "./lib/interface.js";
import {pemasukan} from "./lib/pemasukan.js";
// import {pengeluaran} from "./lib/pengeluaran.js";


let saldo = 0;

export async function main(){
     console.log(`
    1. Tambah pemasukan
    2. Tambah pengeluaran
    3. Lihat Saldo
    4. Riwayat
    5. exit`);
    const quest = await question("Selamat Datang, silahkan pilih! ");
    switch (quest) {
        case "1":
            await pemasukan();
            break;
        case "2":
            // await pengeluaran();
            break;
        case "4":
            // await showSaldo();
            break;
        case "5":
            // await riwayat();
            break;
        default:
            break;
    }
}

export function getSaldo(a){
    return saldo + a;
}

main();