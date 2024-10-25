import './App.css';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

function App() {
  return <Web />;
}

function Web() {
  return (
    <div className="flex flex-row min-h-screen bg-gray-100">
      <Sider />
      <Content />
    </div>
  );
}

function Sider() {
  return (
    <aside className="bg-indigo-900 w-64 text-white">
      <div className="p-4">
        <h2 className="font-bold">Aplikasi Siakad</h2>
        <nav className="mt-4 ml-4">
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Mahasiswa</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

function Content() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="bg-gray-200 p-4">
      <div className="flex justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>
    </header>
  );
}

function Main() {
  const [mahasiswaList, setMahasiswaList] = useState([
    { nama: 'Budiono Siregar', nim: 'A11.2022.14001' },
    { nama: 'Donkam Harder', nim: 'A11.2022.14002' },
    { nama: 'Rusdi Ardiansyah', nim: 'A11.2022.14003' },
  ]);
  const [isTambahModalOpen, setTambahModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [nama, setNama] = useState('');
  const [nim, setNim] = useState('');

  const handleTambah = () => {
    setTambahModalOpen(true);
    setNama('');
    setNim('');
  };

  const handleEdit = (index) => {
    setCurrentIndex(index);
    setNama(mahasiswaList[index].nama);
    setNim(mahasiswaList[index].nim);
    setEditModalOpen(true);
  };

  const handleSaveTambah = () => {
    if (nama && nim) {
      setMahasiswaList([...mahasiswaList, { nama, nim }]);
      setTambahModalOpen(false);
    } else {
      Swal.fire('Error', 'Nama dan NIM harus diisi!', 'error');
    }
  };

  const handleSaveEdit = () => {
    if (nama && nim) {
      const updatedList = [...mahasiswaList];
      updatedList[currentIndex] = { nama, nim };
      setMahasiswaList(updatedList);
      setEditModalOpen(false);
    } else {
      Swal.fire('Error', 'Nama dan NIM harus diisi!', 'error');
    }
  };

  const handleDelete = (index) => {
    Swal.fire({
      title: 'Apakah Anda yakin?',
      text: 'Anda tidak bisa mengembalikan data yang telah dihapus!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Ya, hapus!',
      cancelButtonText: 'Batal',
    }).then((result) => {
      if (result.isConfirmed) {
        setMahasiswaList(mahasiswaList.filter((_, i) => i !== index));
        Swal.fire('Dihapus!', 'Data mahasiswa telah dihapus.', 'success');
      }
    });
  };

  return (
    <div className="p-4 flex flex-col flex-1">
      <div className="flex justify-between mb-4">
        <h2 className="font-bold">List Mahasiswa</h2>
        <button
          onClick={handleTambah}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Tambah Mahasiswa
        </button>
      </div>
      <Tabel
        mahasiswaList={mahasiswaList}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {isTambahModalOpen && (
        <Modal
          title="Tambah Mahasiswa"
          nama={nama}
          nim={nim}
          setNama={setNama}
          setNim={setNim}
          onSave={handleSaveTambah}
          onClose={() => setTambahModalOpen(false)}
        />
      )}
      {isEditModalOpen && (
        <Modal
          title="Edit Mahasiswa"
          nama={nama}
          nim={nim}
          setNama={setNama}
          setNim={setNim}
          onSave={handleSaveEdit}
          onClose={() => setEditModalOpen(false)}
        />
      )}
    </div>
  );
}

function Tabel({ mahasiswaList, onEdit, onDelete }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">No.</th>
            <th className="px-4 py-2">NIM</th>
            <th className="px-4 py-2">Nama</th>
            <th className="px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {mahasiswaList.map((mahasiswa, index) => (
            <tr key={index} className={index % 2 === 1 ? 'bg-gray-100' : ''}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{mahasiswa.nim}</td>
              <td className="border px-4 py-2">{mahasiswa.nama}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => onEdit(index)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(index)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Modal({ title, nama, nim, setNama, setNim, onSave, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h1 className="font-bold text-2xl mb-4">{title}</h1>
        <div className="mb-4">
          <label htmlFor="input-nama" className="block mb-2">
            Nama:
          </label>
          <input
            type="text"
            id="input-nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="input-nim" className="block mb-2">
            NIM:
          </label>
          <input
            type="text"
            id="input-nim"
            value={nim}
            onChange={(e) => setNim(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
          >
            Batal
          </button>
          <button
            onClick={onSave}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-indigo-900 text-center text-white p-2">
      <p>&copy; Aku Admin</p>
    </footer>
  );
}

export default App;
