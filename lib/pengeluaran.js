import { question } from "./interface.js";
import { getSaldoMin,main } from "../index.js";

export async function pengeluaran(){
    let quest = await question("\n0. Kembali\n \nInput jumlah pengeluaran \nMasukkan: ");
    quest = parseFloat(quest);
    if(isNaN(quest)){
        console.log("\nData tidak sesuai");
        pengeluaran();
    }else {
        if(quest === "0"){
            await main();
        }else {
            quest = parseFloat(quest);
            const keluar = getSaldoMin(quest);
            console.log("\n========================");
            console.log(`\nSaldo anda sekarang: Rp${Number(keluar).toLocaleString("id")},-`);
            console.log("\n========================");
            await question("\n\ntekan enter untuk kembali ");
            main();
        }
    }
}