import './App.css'

function App() {
  return <Web/>
}
function Web(){
  return (
    <div className='flex flex-row min-h-screen bg-gray-100'>
      <Sider />
      <Content />
    </div>
  );
}

function Sider(){
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

function Content(){
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header(){
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
return (
        <div className="bg-white flex-grow">
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
              <tbody id="table-body">
                <tr>
                  <td className="border px-4 py-2">1</td>
                  <td className="border px-4 py-2">A11.2022.14001</td>
                  <td className="border px-4 py-2">Budiono Siregar</td>
                  <td className="border px-4 py-2">
                    <button
                      className="btn-edit bg-yellow-500 text-white px-4 py-2 rounded"
                      data-index="0"
                    >
                      Edit
                    </button>
                    <button
                      className="btn-delete bg-red-500 text-white px-4 py-2 rounded"
                      data-index="0"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                <tr className="bg-gray-200">
                  <td className="border px-4 py-2">2</td>
                  <td className="border px-4 py-2">A11.2022.14002</td>
                  <td className="border px-4 py-2">Donkam Harder</td>
                  <td className="border px-4 py-2">
                    <button
                      className="btn-edit bg-yellow-500 text-white px-4 py-2 rounded"
                      data-index="1"
                    >
                      Edit
                    </button>
                    <button
                      className="btn-delete bg-red-500 text-white px-4 py-2 rounded"
                      data-index="1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">3</td>
                  <td className="border px-4 py-2">A11.2022.14003</td>
                  <td className="border px-4 py-2">Rusdi Ardiansyah</td>
                  <td className="border px-4 py-2">
                    <button
                      className="btn-edit bg-yellow-500 text-white px-4 py-2 rounded"
                      data-index="2"
                    >
                      Edit
                    </button>
                    <button
                      className="btn-delete bg-red-500 text-white px-4 py-2 rounded"
                      data-index="2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
}
function Footer(){
  return (
    <footer className="bg-indigo-900 text-center text-white py-4">
      &copy; Aku Admin
    </footer>
  );
}
export default App
