// Manipulasi Array

// 1. Menambah isi array
// var arr = [];
// arr[0] = "Maulidya";
// arr[1] = "Putri";
// arr[2] = "Natasya";
// arr[6] = "Zulfa";

// console.log(arr);

// 2. Menghapus isi array
// var arr = ["Maulidya","Putri","Natasya","Zulfa"];
// arr[1] = undefined;
// console.log(arr);


// 3. Menampilkan isi array
// var arr = ["Maulidya","Putri","Natasya"];

// for( var i = 0; i < arr.length; i++ ) {
//  console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
// }

// Method pada array
// 1. join
// var arr = ['Maulidya', 'Putri', 'Natasya'];
// console.log(arr.join(' - '));

// 2. push & pop
// arr.push('Zulfa', 'Azizah');
// arr.pop();
// arr.pop();
// console.log(arr.join(' - '));

// 3. unshift & shift
// arr.unshift('Zulfa');
// arr.shift();
// console.log(arr.join(' - '));


// 4. splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// arr.splice(1, 2, 'Zulfa', 'Azizah');
// console.log(arr.join(' - '));

// 5. slice
// slice(awal,akhir);
// var arr = ['Maulidya', 'Putri', 'Natasya', 'Zulfa', 'Azizah'];
// var arr2 = arr.slice(1,4);
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));


// 6. forEach
// var nama = ['Maulidya', 'Putri', 'Natasya'];
// for( var i = 0; i < angka.lenght; i++ ) {
// console.log(angka[i]);
// }

// angka.forEach(function(e) {
// console.log(e);
// });
// nama.forEach(function(e, i) {
// console.log('Mahasiswa ke-' + (i+1) + ' adalah : ' + e)
// })

// 7. map
// var angka = [1,2,5,3,6,8,4];
// var angka2 = angka.map(function(e) {
// return e * 2;
// });
// console.log(angka2.join(' - ' ));


// 8. sort
// var angka = [1,2,10,5,20,3,6,8,4];
// angka.sort(function(a,b) {
// return a-b;
// });
// console.log(angka.join(' - '));


// 9. filter & find
var angka = [1,2,10,5,20,3,6,8,4];
var angka2 = angka.find(function(x) {
    return x > 5;
});
console.log(angka2);

