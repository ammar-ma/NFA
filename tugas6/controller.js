// controller.js
const data = require("./data");

// Fungsi melihat data
function lihatData() {
  console.log("Daftar Data:");
  data.map((item, index) => {
    console.log(`${index + 1}. Nama: ${item.nama}, Umur: ${item.umur}, Alamat: ${item.alamat}, Email: ${item.email}`);
  });
}

// Fungsi menambah data
function tambahData(nama, umur, alamat, email) {
  data.push({ nama, umur, alamat, email });
  console.log(`Data ${nama} berhasil ditambahkan!`);
}

// Fungsi menghapus data berdasarkan nama
function hapusData(nama) {
  const index = data.findIndex(item => item.nama === nama);
  if (index !== -1) {
    data.splice(index, 1);
    console.log(`Data ${nama} berhasil dihapus!`);
  } else {
    console.log(`Data dengan nama ${nama} tidak ditemukan.`);
  }
}

// Menambahkan minimal 2 data
tambahData("Budi", 27, "Solo", "budi@mail.com");
tambahData("Siti", 24, "Medan", "siti@mail.com");

// Menampilkan data setelah penambahan
lihatData();

// Menghapus salah satu data
hapusData("Ammar");

// Menampilkan data setelah penghapusan
lihatData();
