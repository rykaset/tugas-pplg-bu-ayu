// variabel dengan let
let nama = "Agus Salim";

// tampilkan data
console.log(nama);

// kita ubah nilai variabel nama
let tersangka = "Agus Buntung";
console.log(tersangka);

// variabel dengan var
var namaDepan = "Gus";
console.log(namaDepan);
namaDepan = "Maulana";
console.log(namaDepan);

// bedanya dengan let
let jajan = "Seblak";
{
  let jajan = "Ayam Geprek";
  console.log(jajan);
}
console.log(jajan);

// jika dengan var
let traktir = "Bakso Mercon";
{
  let traktir = "es teh jumbo";
  console.log(traktir);
}
console.log(traktir);

// variabel dengan const
const TTL = "1 Januari 2025";
console.log(TTL);
// const TTL = "1 Pebruari 2025";
// ini tidak boleh dilakukan karena const nilainya tetap