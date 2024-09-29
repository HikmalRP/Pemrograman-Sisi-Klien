    var currentRow = null;

    // Buka Modal Tambah/Edit
    function openModal(type, element = null) {
        const modal = document.getElementById('modal');
        modal.style.display = 'block';

        const modalTitle = document.getElementById('modal-title');
        const nimField = document.getElementById('nim');
        const namaField = document.getElementById('nama');

        if (type === 'edit' && element) {
            modalTitle.textContent = 'Edit Mahasiswa';
            currentRow = element.closest('tr');
            nimField.value = currentRow.cells[1].textContent;
            namaField.value = currentRow.cells[2].textContent;
        } else {
            modalTitle.textContent = 'Tambah Mahasiswa';
            nimField.value = '';
            namaField.value = '';
            currentRow = null;
        }
    }

    // Tutup Modal
    function closeModal() {
        document.getElementById('modal').style.display = 'none';
    }

    // Simpan Data (Tambah atau Edit)
    function saveData() {
        const nim = document.getElementById('nim').value;
        const nama = document.getElementById('nama').value;

        if (currentRow) {
            // Update data mahasiswa (Edit)
            currentRow.cells[1].textContent = nim;
            currentRow.cells[2].textContent = nama;
        } else {
            // Tambah data mahasiswa baru
            const tableBody = document.querySelector('tbody');
            const newRow = document.createElement('tr');

            // Kolom nomor urut (akan dihitung ulang)
            const tdNo = document.createElement('td');
            newRow.appendChild(tdNo);

            // Kolom NIM
            const tdNim = document.createElement('td');
            tdNim.textContent = nim;
            newRow.appendChild(tdNim);

            // Kolom Nama
            const tdNama = document.createElement('td');
            tdNama.textContent = nama;
            newRow.appendChild(tdNama);

            // Kolom Aksi (Edit dan Hapus)
            const tdAction = document.createElement('td');
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.className = 'edit-btn';
            editButton.onclick = () => openModal('edit', editButton);
            tdAction.appendChild(editButton);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Hapus';
            deleteButton.className = 'delete-btn';
            deleteButton.onclick = () => deleteData(deleteButton);
            tdAction.appendChild(deleteButton);

            newRow.appendChild(tdAction);
            tableBody.appendChild(newRow);

            // Perbarui nomor urut setelah penambahan
            updateRowNumbers();
        }

        closeModal();
    }

    // Buka Popup Konfirmasi Hapus
    function deleteData(element) {
        currentRow = element.closest('tr');
        document.getElementById('deleteModal').style.display = 'block';
    }

    // Tutup Popup Konfirmasi Hapus
    function closeDeleteModal() {
        document.getElementById('deleteModal').style.display = 'none';
    }

    // Konfirmasi Hapus Data
    function confirmDelete() {
        if (currentRow) {
            currentRow.remove();
            updateRowNumbers(); // Perbarui nomor urut setelah penghapusan
        }
        closeDeleteModal();
    }

    // Perbarui nomor urut setiap kali ada perubahan di tabel
    function updateRowNumbers() {
        const rows = document.querySelectorAll('tbody tr');
        rows.forEach((row, index) => {
            row.cells[0].textContent = index + 1;
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        updateRowNumbers(); // Inisialisasi nomor urut saat halaman dimuat
    });
