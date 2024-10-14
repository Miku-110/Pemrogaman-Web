function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();

    if (name === '' || email === '' || address === '') {
        alert('Semua kolom harus diisi!');
        return false; // Mencegah form dikirim jika ada input yang kosong
    }
    return true; // Jika validasi sukses, form dapat dikirim
}