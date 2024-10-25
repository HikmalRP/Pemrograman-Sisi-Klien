import './App.css'

function App() {
  return <Web/>
}
function Web(){
  return (<div className='flex flex-row min-h-screen bg-gray-100'>
      <Sider/>
      <Content/>
  </div>
  );
}

function Sider(){
return (<aside className="bg-indigo-900 w-64 text-white">
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

function Content(){
return (<div className="flex flex-col flex-1">
<Header/>
<Main/>
<Footer/>
</div>
);
}

function Header(){
return (<header className="bg-gray-200 p-4">
<div className="flex justify-end">
  <button className="bg-blue-500 text-white px-4 py-2 rounded">
    Logout
  </button>
</div>
</header>
);
}

function Main(){
return (
<div className="p-4 flex flex-col flex-1">
  <div className="flex justify-between mb-4">
    <h2 className="font-bold">List Mahasiswa</h2>
    <button id="btn-tambah" className="bg-green-500 text-white px-4 py-2 rounded">
      Tambah Mahasiswa
    </button>
    </div>
    <Tabel />
</div>
);
}
function Tabel(){
return  (<div className="bg-white flex-grow">
          <div className="bg-white p-6 rounded-lg shadow">
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
                <Baris
                  no="1"
                  nim="A11.2022.14001"
                  nama="Budiono Siregar"
                />
                <Baris
                  no="2"
                  nim="A11.2022.14002"
                  nama="Donkam Harder"
                />
                <Baris
                  no="3"
                  nim="A11.2022.14003"
                  nama="Rusdi Ardiansyah"
                />
              </tbody>
            </table>
          </div>
        </div>
);

function Baris(props) {
  return <tr>
    <td className="border px-4 py-2">{ props.no }</td>
    <td className="border px-4 py-2">{ props.nim }</td>
    <td className="border px-4 py-2">{ props.nama }</td>
    <td className="border px-4 py-2">
      <button id="btn-edit" className="bg-yellow-500 text-white px-4 py-2 rounded">Edit</button>
      <button id="btn-delete" className="bg-red-500 text-white px-4 py-2 rounded">Edit</button>
    </td>
  </tr>

}

}
function Footer(){
return (<footer className="bg-indigo-900 text-center text-white">
&copy; Aku Admin
</footer>
);
}
export default App
