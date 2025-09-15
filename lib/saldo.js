import { question } from "./interface.js";
import { saldo, main } from "../index.js";

export async function showSaldo(){
    console.log("\n\n===============================\n");
    console.log(`Saldo Anda sekarang: Rp${Number(saldo).toLocaleString("id")},-`);
    console.log("\n===============================");
    await question("Tekan enter ntuk kembali ");
    main();
}