# APLIKASI BUKU TABUNGAN
Aplikasi ini dibuat untuk mencatat pemasukan, pengeluaran, saldo ter-update, dan juga riwayat uang yang masuk dan keluar.

##  Fitur

-   Tambah pemasukan
-   Tambah pengeluaran
-   Lihat saldo terkini
-   Lihat riwayat transaksi

##  Contoh Penggunaan

    1. Tambah pemasukan
    2. Tambah pengeluaran
    3. Lihat Saldo
    4. Riwayat
    5. Exit

### Tambah Pemasukan

    Input jumlah uang yang ingin dimasukkan!
    Masukkan: 1000
    Saldo anda sekarang: Rp1.000,-


### Tambah Pengeluaran

    Input jumlah pengeluaran
    Masukkan: 500
    Saldo anda sekarang: Rp500,-

### Riwayat Transaksi

    ===== RIWAYAT TRANSAKSI =====
    1. Pemasukan Rp1.000,- | Saldo: Rp1.000,- | 15/09/2025 13:00:00
    2. Pengeluaran Rp500,- | Saldo: Rp500,- | 15/09/2025 13:05:00
    ==============================

# flowchart aplikasi
```mermaid
flowchart TD
    A@{shape: circ, label: "start jalanjan aplikasi"} --> B@{shape: rect, label: "tampilkan menu utama"}
    
    B --> C@{shape: diamond, label: "pilih opsi?"}
    
    C --1--> D@{shape: rect, label: "tambak pemasukan"}
    C --2--> E@{shape: rect, label: "Tambah Pengeluaran"}
    C --3--> F@{shape: rect, label: "Lihat Saldo"}
    C --4--> G@{shape: rect, label: "Lihat Riwayat"}
    C --5--> H@{shape: rect, label: "exit"}
    C --default-->I@{shape: rect, label: "Tampilkan Error"}
    
    D --> D1@{shape: lean-r, label: "Input Jumlah Pemasukan"}
    D1 --> D2@{shape: diamond, label: "Input = 0?"}
    D2 --ya-->B
    D2 --no-->D3@{shape: rect, label: "Tambah ke Saldo"}
    D3 --> D4@{shape: rect, label: "Simpan ke Riwayat"}
    D4 --> D5@{shape: lean-r, label: "Tampilkan Saldo Terbaru"}
    D5 --> D6@{shape: rect, label: "Tekan Enter untuk Kembali"}
    D6 --> B
    
    E --> E1@{shape: lean-r, label: "Input Jumlah Pengeluaran"}
    E1 --> E2@{shape: diamond, label: "Input = 0?"}
    E2 --ya--> B
    E2 --no-->E3@{shape: rect, label: "Kurangi dari Saldo"}
    E3 --> E4@{shape: rect, label: "Simpan ke Riwayat"}
    E4 --> E5@{shape: lean-r, label: "Tampilkan Saldo Terbaru"}
    E5 --> E6@{shape rect, label: "Tekan Enter untuk Kembali"}
    E6 --> B
    
    F --> F1@{shape: lean-r, label: "Tampilkan Saldo Saat Ini"}
    F1 --> F2@{shape: rect, label: "Tekan Enter untuk Kembali"}
    F2 --> B
    
    G --> G1@{shape: lean-r, label: "Tampilkan Semua Riwayat Transaksi"}
    G1 --> G2@{shape: rect, label: "Tekan Enter untuk Kembali"}
    G2 --> B
    
    H --> J@{shape: rect, label: "Tutup Aplikasi"}
    J --> K@{shape: dbl-circ, label: "stop"}
    
    I --> B
 ```