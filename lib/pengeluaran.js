import { question } from "./interface.js";
import { getSaldoMin,main } from "../index.js";

export async function pengeluaran(){
    let quest = await question("\n99. Kembali\n \nInput jumlah pengeluaran \nMasukkan: ");
    quest = parseFloat(quest);
    if(isNaN(quest) || quest <= 0){
        console.log("\nData tidak sesuai");
        pengeluaran();
    }else {
        if(quest === 99){
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