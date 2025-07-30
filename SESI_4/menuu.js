const readline = require('readline'); // Membutuhkan ini untuk input pengguna

// Antarmuka untuk membaca input dari konsol
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Impor fungsi perhitungan kita dari rumus.js
const { tambah, kurang, kali, bagi } = require('./rumus');

function showMenu() {
    console.log("\n--- Kalkulator Sederhana ---");
    console.log("1. Penjumlahan (+)");
    console.log("2. Pengurangan (-)");
    console.log("3. Perkalian (*)");
    console.log("4. Pembagian (/)");
    console.log("5. Keluar");
    console.log("----------------------------");
}

function getUserInput() {
    return new Promise((resolve) => {
        rl.question("Pilih operasi (1-5): ", (choice) => {
            resolve(choice);
        });
    });
}

function getNumbers() {
    return new Promise((resolve) => {
        rl.question("Masukkan angka pertama: ", (num1) => {
            rl.question("Masukkan angka kedua: ", (num2) => {
                resolve({ num1: parseFloat(num1), num2: parseFloat(num2) });
            });
        });
    });
}

async function startCalculator() {
    let running = true;
    while (running) {
        showMenu();
        const choice = await getUserInput();

        if (choice === '5') {
            console.log("Terima kasih telah menggunakan kalkulator ini!");
            running = false;
            rl.close(); // Tutup antarmuka readline saat selesai
            break;
        }

        const { num1, num2 } = await getNumbers();

        // Logika inti menggunakan switch case untuk pemilihan operasi
        switch (choice) {
            case '1':
                console.log(`Hasil: ${num1} + ${num2} = ${tambah(num1, num2)}`);
                break;
            case '2':
                console.log(`Hasil: ${num1} - ${num2} = ${kurang(num1, num2)}`);
                break;
            case '3':
                console.log(`Hasil: ${num1} * ${num2} = ${kali(num1, num2)}`);
                break;
            case '4':
                // Sebagai QA, saya akan langsung memikirkan pembagian dengan nol di sini!
                if (num2 === 0) {
                    console.log("Error: Tidak bisa membagi dengan nol!");
                } else {
                    console.log(`Hasil: ${num1} / ${num2} = ${bagi(num1, num2)}`);
                }
                break;
            default:
                console.log("Pilihan tidak valid. Silakan coba lagi.");
        }
        console.log("Tekan Enter untuk melanjutkan...");
        await new Promise(resolve => rl.once('line', resolve)); // Tunggu pengguna menekan Enter
    }
}

// Mulai kalkulator saat script dijalankan
startCalculator();