import { question } from "./interface.js";
import { getSaldo,main } from "../index.js";

export async function pemasukan(){
    let quest = await question("\n\n0. kembali \n\ninput jumlah uang yang ingin dimasukkan!  \nMasukkan: ");
    if(quest === "0"){
        await main();
    }else{
        quest = parseFloat(quest);
        const masuk = getSaldo(quest);
        console.log("\n========================");
        console.log(`\nSaldo anda sekarang: Rp${Number(masuk).toLocaleString("id")},-`);
        console.log("\n========================");
        await question("\n\ntekan enter untuk kembali");
        main();
    }
}