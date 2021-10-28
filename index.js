// Load the full build.
var _ = require('lodash');
// Load the core build.
// var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');
 
// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');
 
// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');


console.log("================= NO 1 ============================");
const anggota_kelas = ["budi", "sita", "ayu", "rena", "omen"];
let mengumpulkan_tugas = ["rena", "omen"];

// NO A - Buatlah variabel yang berisikan siswa yang belum mengumpulkan tugas. Gunakan fitur di lodash
let belum_kumpulkan = _.difference(anggota_kelas, mengumpulkan_tugas);
console.log("Orang yang belum mengumpulkan tugas : ", belum_kumpulkan);
// NO B - Buatlah variabel kelompok dari array anggota kelas. Setiap kelompok berisikan 2 anggota kelas. Sehingga tampilan console akan seperti berikut. Gunakan fitur di lodash
let kelompok = _.chunk(anggota_kelas, 2);
console.log("Kelompok : ", kelompok);
// NO C -  Buatlah variabel baru dari anggota kelas. Sehingga, ketika variabel tersebut dipanggil akan mengeluarkan nama siswa dalam bentuk array(Gunakan fitur di lodash). Seperti berikut
let anggotaBaru = _.join(anggota_kelas, '-');
console.log("Anggota baru :", anggotaBaru);
// NO D - Dengan menggunakan fitur di lodash buatlah sebuah variabel yang tidak berisikan nama pertama yang ada di anggota kelas.
console.log("No first name : ", _.takeRight(anggota_kelas, 4))
// NO E - Dengan menggunakan fitur lodash buatlah variabel yang dapat membalik urutan dari anggota kelas dari belakang ke depan. 
console.log("Reversed : ", _.reverse(anggota_kelas));

console.log("================= NO 2 ============================");







console.log("================= NO 3 ============================");
class Orang{
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
        
    }

    perkenalanDiri() {
        return `Halo, saya ${this.nama}. ${this.umur > 17 ? 'Saya sudah dewasa' : 'Saya Masih di Bawah Umur'}`
    }
}

class Pelajar extends Orang{
    constructor(nama, umur) {
        super(nama, umur);
        this.pekerjaan = "Siswa/Mahasiswa"
    }
    perkenalanDiri() {
        return `Halo, saya ${this.nama}, saya belum bekerja`;
    }
}

class Pekerja extends Orang{
    constructor(nama, umur, pekerjaan) {
        super(nama, umur);
        this.pekerjaan = pekerjaan;
    }
    perkenalanProfesi() {
        return `Halo, saya seorang ${this.pekerjaan}`;
   }
}
const ana = new Orang('Ana', 10);
const ini = new Pelajar('ini', 18);
const budi = new Pekerja('Budi', 20, 'Koki');

console.log(ana.perkenalanDiri());
console.log(ini.perkenalanDiri());
console.log(ini.pekerjaan);
console.log(budi.perkenalanDiri());
console.log(budi.perkenalanProfesi());
console.log(budi.pekerjaan);
