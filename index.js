
// ----------------- NO 1 -----------------------------//
var nilai1 = [2, 5, 3, 4, 1];

var value2 = nilai1.reduce((acc,key) => {
    return acc + key;
}, 0)
console.log("No 1, penjumalahan value adalah", value2);

// ----------------- NO 2 ------------------------------//

var filterValue = [-4, 3, 2, -21, 1];

var newFilter = filterValue.filter((x) =>{
    return x >= 0
})
console.log("No 2, filter : ", newFilter);

// --------------- NO 3 ------------------------------ //
var data = [
    { name : 'daniel' , age:45 },
    { name: 'john', age: 30 },
    { name: 'robert', age: null },
    { name: 'jen', age: undefined },
    { name : null, age: undefined },
];
var newArr = [];
for (i = 0; i < data.length; i++){
    if (data[i].name !== null && data[i].age !== null && data[i].age !== undefined) {
        newArr.push(data[i]);
    }
}
console.log(newArr);

// --------------- NO 4 ---------------------------////////////////

const konfersiMenit = (x) => {
    var number = x;
    var minute = (number / 60);
    var rminute = Math.floor(minute);
    var second = (minute - rminute) * 60;
    var rsecond = Math.round(second);
    return (rsecond > 10) ? rminute + ":" + rsecond : rminute + ":" + "0"+rsecond;
}
console.log(konfersiMenit(88));
console.log(konfersiMenit(53));
console.log(konfersiMenit(120));
console.log(konfersiMenit(124));

// ---------- NO 5 ----------------------------------////////////////////////////////

function inputHarusGenap(angka) {
    if (angka % 2 == 0) {
        return 'Valid'
    }
    return 'Invalid'
}

try {
    console.log(inputHarusGenap(7));
} catch (e) {
    console.log(e);
}

try {
    console.log(inputHarusGenap(4));
} catch (e) {
    console.log(e);
}

// --------- NO 6 ------------------------////////////////////////////////

function perkalianUnik(arr) {
    const newArray = arr.reduce((acc,key) => {
        return acc*key
    }, 1)

    return arr.map((value) => newArray / value);
}
console.log(perkalianUnik([2, 4, 6]));
console.log(perkalianUnik([1, 2, 3, 4, 5]));
console.log(perkalianUnik([1,4,3,2,5]));
console.log(perkalianUnik([1,3,3,1]));
console.log(perkalianUnik([2,1,8,10,2]));
