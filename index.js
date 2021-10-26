var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = false;
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
    let asal = "Indonesia";
    return console.log("Perkenalkan nama saya " + nama + " nomor urut " + a + " sekarang mengikuti " + b + " berasalah dari " + asal);
}

terdaftar = true;
if (terdaftar === true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
// nama = b;

// console.log("asal diakses = " + asal);
console.log("a adalah = " + a);
console.log("b adalah = " + b);

//---------NO 1--------------------//

// Ambillah index ke 2 dalam array di baris 5 dan tampilkan dalam console
console.log("Array :",lengkap_arr[2]);

//memakai fungsim
perkenalan();


//**** *////////
// NO 2 ///////// 
////////////////
//a . baris 21,22,23 (kalau sesuai codingan disini adalah baris 12-14 function terdaftar==true) tidak muncul karena tidak ada kondisi yang membuat variabel terdaftar bernilai true. Kondisi di baris 12-14 hanya menyatakan JIKA terdaftar bernilai true, bukan membuat kondisi si terdaftar dari false menjadi true.
//b. Karena, constant variabel tidak bisa di rubah
//c. bisa, karena tipe data sudah benar, dan hal yg error sudah di comment, karena javascript berjalan secara syncronus ( baris per baris) jadi seharusnya code yg error sudah tidak terbaca lagi.


//NO 3 - DECONSTRUCTING //
const foo = ['Budi', 'Sita', 'Ayu'];

const A = foo[0];
const B = foo[1];
const C = foo[2];
console.log(A);

//NO 4 - let Be day
let bdays = ['10-17', '05-19', '20-19'];
const tempDay = ['-'];
let bdaysNewValue = [];

for (i = 0; i < bdays.length; i++) {
    bdaysNew = bdays[i].replace('-', '/');
    bdaysNewValue.push(bdaysNew);
}
console.log(bdaysNewValue);

//NO 5- VALUE MAPPING
let value = [1, 2, 3, 4, 5, 6];
const newValue = value.map((num) => num * 2)
console.log(newValue);

//NO 6 - bulatkan value 
let arrays = [1.5, 2.56, 5.1, 12.33]
const newArrays = arrays.map((num) => Math.ceil(num));
console.log(newArrays);