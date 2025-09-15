import { question,exit } from "./lib/interface.js";
import {pemasukan} from "./lib/pemasukan.js";
import {pengeluaran} from "./lib/pengeluaran.js";
import { showSaldo } from "./lib/saldo.js";
import { history } from "./lib/riwayat.js";


export let saldo = 0;
export let riwayat = [];

export async function main(){
     console.log(`
    1. Tambah pemasukan
    2. Tambah pengeluaran
    3. Lihat Saldo
    4. Riwayat
    5. exit`);
    const quest = await question("\n\nBUKU TABUNGAN APP, silahkan pilih opsi! ");
    switch (quest) {
        case "1":
            await pemasukan();
            break;
        case "2":
            await pengeluaran();
            break;
        case "3":
            await showSaldo();
            break;
        case "4":
            await history();
            break;
        case "5":
            await exit();
            break;
        default:
            console.log("Data yang dimasukkan tidak sesuai!");
            main();
            break;
    }
}


export function getSaldo(a){
    riwayat.push({jenis: "PEMASUKAN", jumlah: a, waktu: new Date()});
    return saldo = saldo + a;
    
}
export function getSaldoMin(a){
    riwayat.push({jenis: "PENGELUARAN", jumlah: a, waktu: new Date()});
    return saldo = saldo  - a;
    
}

main();