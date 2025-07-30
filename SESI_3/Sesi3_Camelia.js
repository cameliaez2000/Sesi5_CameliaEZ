// Membuat segitiga bintang menggunakan loop statement

let tinggi = 4; // tinggi segitiga sebanyak 4 baris

for (let i = 1; i <= tinggi; i++) {
    let baris = '';
    for (let j = 1; j <= i; j++) {
        baris += '*';
    }
    console.log(baris);
}
