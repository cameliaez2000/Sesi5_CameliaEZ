// Fungsi untuk penjumlahan
function tambah(a, b) {
    return a + b;
}

// Fungsi untuk pengurangan
function kurang(a, b) {
    return a - b;
}

// Fungsi untuk perkalian
function kali(a, b) {
    return a * b;
}

// Fungsi untuk pembagian
function bagi(a, b) {
    if (b === 0) {
        // console.error("Error: Pembagian dengan nol tidak diizinkan."); // Bisa log di sini untuk debugging
        return NaN; // Not-a-Number adalah cara umum untuk menandakan operasi matematika yang tidak valid
    }
    return a / b;
}


module.exports = {
    tambah,
    kurang,
    kali,
    bagi
};