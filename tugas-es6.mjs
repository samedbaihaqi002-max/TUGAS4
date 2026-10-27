//javascript
// ==========================================
// TUGAS MANDIRI / LAB PRAKTIKUM
// Pemrosesan Data Transaksi Belanja ES6
// ==========================================

// 1. Array of Objects: Data Transaksi Belanja
const transaksi = [
    { id: 1, barang: "Buku", harga: 15000, qty: 2, kategori: "Alat Tulis" },
    { id: 2, barang: "Pulpen", harga: 5000, qty: 3, kategori: "Alat Tulis" },
    { id: 3, barang: "Tas", harga: 120000, qty: 1, kategori: "Aksesoris" },
    { id: 4, barang: "Pensil", harga: 3000, qty: 5, kategori: "Alat Tulis" },
    { id: 5, barang: "Sepatu", harga: 250000, qty: 1, kategori: "Fashion" },
    { id: 6, barang: "Penghapus", harga: 2000, qty: 4, kategori: "Alat Tulis" }
];

// 2. Filter: Menyaring transaksi berdasarkan kategori
const kategoriPilihan = "Alat Tulis";

const transaksiFilter = transaksi.filter(
    ({ kategori }) => kategori === kategoriPilihan
);

// 3. Map: Menghitung subtotal setiap barang
const transaksiSubtotal = transaksiFilter.map(
    ({ id, barang, harga, qty, kategori }) => ({
        id,
        barang,
        harga,
        qty,
        kategori,
        subtotal: harga * qty
    })
);

// 4. Reduce: Menghitung total keseluruhan
const totalBelanja = transaksiSubtotal.reduce(
    (total, { subtotal }) => total + subtotal,
    0
);

// 5. Menampilkan data transaksi awal
console.log("====================================");
console.log("       DATA TRANSAKSI BELANJA       ");
console.log("====================================");
console.table(transaksi);

// 6. Menampilkan hasil filter dan subtotal
console.log("\n====================================");
console.log(` TRANSAKSI KATEGORI: ${kategoriPilihan}`);
console.log("====================================");
console.table(transaksiSubtotal);

// 7. Menampilkan total keseluruhan
console.log("====================================");
console.log("TOTAL BELANJA:", totalBelanja.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
}));
console.log("====================================");
