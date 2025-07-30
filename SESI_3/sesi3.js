/**
 * File: Sesi3_nama.js
 * Deskripsi: Script untuk membuat dan menampilkan pola segitiga menggunakan loop statement.
 * Author: QA Engineer
 * Tanggal: 25 Juli 2025
 */

/**
 * Fungsi ini bertujuan untuk membuat dan menampilkan pola segitiga siku-siku
 * ke console berdasarkan tinggi yang ditentukan. Pola dibangun menggunakan karakter '*'.
 *
 * @param {number} tinggi - Jumlah baris yang akan membentuk tinggi segitiga. Harus berupa angka positif.
 */
function buatSegitiga(tinggi) {
  // Langkah 1: Validasi Input (Quality Gate)
  // Memastikan input yang diberikan adalah angka dan lebih besar dari nol.
  if (typeof tinggi !== 'number' || tinggi <= 0 || !Number.isInteger(tinggi)) {
    console.error("Input tidak valid. Harap masukkan angka bulat positif untuk tinggi.");
    return; // Menghentikan eksekusi jika input tidak sesuai.
  }

  console.log(`--- Memulai Proses Pembuatan Segitiga dengan Tinggi: ${tinggi} ---`);

  // Langkah 2: Proses Utama (Core Logic)
  // Menggunakan string untuk menampung seluruh pola sebelum ditampilkan.
  // Ini lebih efisien daripada memanggil console.log() di dalam loop.
  let polaOutput = '';

  // Loop pertama (outer loop) untuk membuat baris (dari atas ke bawah).
  // 'i' merepresentasikan nomor baris saat ini.
  for (let i = 1; i <= tinggi; i++) {
    
    // Loop kedua (inner loop) untuk mengisi kolom pada setiap baris.
    // Jumlah kolom (atau bintang) sama dengan nomor baris saat ini (i).
    for (let j = 1; j <= i; j++) {
      polaOutput += '* ';
    }
    
    // Menambahkan karakter newline ('\n') untuk pindah ke baris berikutnya setelah satu baris selesai.
    polaOutput += '\n';
  }

  // Langkah 3: Menampilkan Hasil
  // Mencetak hasil akhir pola ke console.
  console.log(polaOutput);
  console.log("--- Proses Pembuatan Segitiga Selesai ---");
}

// --- Skenario Eksekusi (Test Execution) ---
// Mendefinisikan tinggi segitiga yang diinginkan.
const tinggiSegitiga = 5;

// Memanggil fungsi untuk dieksekusi.
buatSegitiga(tinggiSegitiga);

// Skenario Uji Negatif (Negative Test Case) - Opsional untuk menunjukkan validasi
// buatSegitiga(-3);
// buatSegitiga("lima");
// buatSegitiga(0);
