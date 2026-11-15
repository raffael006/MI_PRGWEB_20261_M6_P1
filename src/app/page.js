"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [nama, setNama] = useState("");
  const [error, setError] = useState(""); // State untuk pesan error

  function handleSubmit(e) {
    e.preventDefault();
    const namaBersih = nama.trim().replace(/\s+/g, " ");

    // Validasi: Cek apakah nama cuma spasi atau kurang dari 3 karakter (Latihan No. 1)
    if (namaBersih.length < 3) {
      setError("Nama harus terdiri dari minimal 3 karakter.");
      return;
    }

    setError(""); // Bersihkan error jika lolos validasi
    router.push(
      `/${"Kesehatan/PenghitungBMI/" + encodeURIComponent(namaBersih)}`
    );
  }

  return (
    <main style={{ maxWidth: 360, margin: "40px auto", padding: "0 16px" }}>
      <h1>Hai, perkenalkan dirimu</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: 12, marginTop: 16 }}
      >
        <label>
          <span>Nama lengkap</span>
          <input
            type="text"
            value={nama}
            onChange={(e) => {
              setNama(e.target.value);
              setError(""); // Hapus pesan error otomatis saat user mulai mengetik ulang
            }}
            required
            style={{ display: "block", width: "100%", padding: 6 }}
          />
        </label>

        {/* Menampilkan pesan error jika ada (Latihan No. 1) */}
        {error && (
          <p style={{ color: "red", fontSize: 14, margin: 0 }}>{error}</p>
        )}

        <button type="submit" style={{ padding: 8 }}>
          Lanjut
        </button>
      </form>
    </main>
  );
}