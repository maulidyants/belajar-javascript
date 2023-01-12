// Membuat Object
// Object Literal
var mhs1 = {
    nama : 'Maulidya',
    nrp : '082746298',
    email : 'maulidyants@gmail.com',
    jurusan : 'Teknik Informatika'
}

var mhs2 = {
    nama : 'Putri',
    nrp : '045375617',
    email : 'putri@gmail.com',
    jurusan : 'Teknik Industri'
}

// Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Natasya', '045526547', 'natasya@gmail.com', 'Teknik Pangan');


// Constructor
function Mahasiswa(nama, nrp, email, jurusan) {
    // var this = {};
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
    // return this;
}

var mhs4 = new Mahasiswa('Erik', '069937466', 'erik@gmail.com', 'Teknik Mesin');

    
