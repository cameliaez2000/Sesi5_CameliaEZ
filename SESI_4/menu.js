const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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

function getUserInput(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, (choice) => {
            resolve(choice);
        });
    });
}

async function getNumbers() {
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
        const choice = await getUserInput("Pilih operasi (1-5): ");

        if (choice === '5') {
            console.log("Terima kasih telah menggunakan kalkulator!");
            running = false;
            rl.close();
            break;
        }

        let num1, num2; 

        switch (choice) {
            case '1':
            case '2':
            case '3':
            case '4':
                // Hanya minta angka jika pilihan operasi valid
                ({ num1, num2 } = await getNumbers());
                // Lakukan perhitungan
                if (choice === '1') {
                    console.log(`Hasil: ${num1} + ${num2} = ${tambah(num1, num2)}`);
                } else if (choice === '2') {
                    console.log(`Hasil: ${num1} - ${num2} = ${kurang(num1, num2)}`);
                } else if (choice === '3') {
                    console.log(`Hasil: ${num1} * ${num2} = ${kali(num1, num2)}`);
                } else { // choice === '4'
                    if (num2 === 0) {
                        console.log("Error: Tidak bisa membagi dengan nol!");
                    } else {
                        console.log(`Hasil: ${num1} / ${num2} = ${bagi(num1, num2)}`);
                    }
                }
                break;
            default:
                // Jika pilihan tidak valid, langsung tampilkan pesan error
                console.log("Pilihan tidak valid. Silakan coba lagi.");
                // Dan langsung tanyakan apakah ingin melanjutkan, tanpa meminta angka
                break; // Penting: keluar dari switch
        }

        // Hanya tanyakan lanjut/tidak jika bukan opsi keluar (5)
        if (choice !== '5') {
            const continueChoice = await getUserInput("Lanjutkan perhitungan? (y/n): ");
            if (continueChoice.toLowerCase() !== 'y') {
                console.log("Terima kasih telah menggunakan kalkulator!");
                running = false;
                rl.close();
            }
        }
    }
}

startCalculator();