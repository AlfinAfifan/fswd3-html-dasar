let tanya = true;
while (tanya) {

    // Menangkap pilihan player
    let player = prompt('Masukkan pilihan anda: (Kertas, Batu, Gunting)');

    // Menangkap pilihan komputer
    // Membangkitkan bilangan random
    let comp = Math.random();

    if(comp < 0.34) {
        comp = 'batu';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'kertas';
    } else {
        comp = 'gunting';
    };


    // Menentukan rules
    let hasil = '';

    if (player == comp) {
        hasil = 'SERI'
    } else if (player == 'kertas') {
        hasil = (comp == 'batu') ? 'MENANG' : 'KALAH';
    } else if (player == 'batu') {
        hasil = (comp == 'kertas') ? 'KALAH' : 'MENANG';
    } else if (player == 'gunting') {
        hasil = (comp == 'kertas') ? 'MENANG' : 'KALAH';
    } else {
        hasil = 'Memasukan pilihan salah';
    }


    // Menampilkan hasil
    alert(`Kamu memilih ${player} dan Komputer memilih ${comp}.
Hasilnya : Kamu ${hasil}`);

    tanya = confirm('Ingin bermain lagi?');
}

alert('Terimakasih sudah bermain');