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