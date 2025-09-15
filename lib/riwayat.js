import { question } from "./interface.js";
import { riwayat,main } from "../index.js";

export async function history(){
    riwayat.forEach((Element)=>{
        console.log("\n==========================");
        console.log(`\n${Element.jenis} \nJumlah: ${Number(Element.jumlah).toLocaleString("id")} \nWaktu: ${Element.waktu.toLocaleString()}\n`);
        console.log("\n==========================\n");
    });
    await question("Tekan enter untuk kembali ");
    main();
}