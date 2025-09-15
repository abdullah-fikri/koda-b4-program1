import { question } from "./interface.js";
import { getSaldoMin,main } from "../index.js";

export async function pengeluaran(){
    let quest = await question("0. Kembali \nInput jumlah pengeluaran \nMasukkan: ");
    if(quest === "0"){
        await main();
    }else {
        quest = parseFloat(quest);
        const keluar = getSaldoMin(quest);
        console.log("\n========================");
        console.log(`\nSaldo anda sekarang: Rp${Number(keluar).toLocaleString("id")},-`);
        console.log("\n========================");
        await question("\n\ntekan enter untuk kembali");
        main();
    }
}