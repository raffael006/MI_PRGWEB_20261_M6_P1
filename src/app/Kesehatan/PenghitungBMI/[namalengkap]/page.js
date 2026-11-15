"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link"; // Import komponen Link (Latihan No. 5)
import { hitungBMI } from "@/lib/bmi"; // Import fungsi eksternal (Latihan No. 2)

export default function Page() {
    const params = useParams();
    const nama = decodeURIComponent(params.namalengkap).replaceAll("-", " ");

    const [berat, setBerat] = useState("");
    const [tinggi, setTinggi] = useState("");
    const [hasil, setHasil] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        setHasil(hitungBMI(Number.parseFloat(berat), Number.parseFloat(tinggi)));
    }

    // Fungsi mengosongkan nilai form dan hasil (Latihan No. 4)
    function handleReset() {
        setBerat("");
        setTinggi("");
        setHasil(null);
    }

    return (
        <main style={{ maxWidth: 360, margin: "40px auto", padding: "0 16px" }}>
            <h1>Halo, {nama}</h1>
            <p>Silakan masukkan berat badan dan tinggi kamu!</p>

            <form
                onSubmit={handleSubmit}
                style={{ display: "grid", gap: 12, marginTop: 16 }}
            >
                <label>
                    <label htmlFor="berat">Berat (kg)</label>
                    <input
                        id="berat"
                        type="number"
                        step="any"
                        min="1"
                        value={berat}
                        onChange={(e) => setBerat(e.target.value)}
                        required
                        style={{ display: "block", width: "100%", padding: 6 }}
                    />
                </label>
                <label>
                    <label htmlFor="tinggi">Tinggi (cm)</label>
                    <input
                        id="tinggi"
                        type="number"
                        step="any"
                        min="1"
                        value={tinggi}
                        onChange={(e) => setTinggi(e.target.value)}
                        required
                        style={{ display: "block", width: "100%", padding: 6 }}
                    />
                </label>

                <div style={{ display: "flex", gap: 8 }}>
                    <button type="submit" style={{ padding: 8, flex: 1 }}>
                        Hitung
                    </button>
                    {/* Tombol Reset (Latihan No. 4) */}
                    <button
                        type="button"
                        onClick={handleReset}
                        style={{ padding: 8, flex: 1 }}
                    >
                        Reset
                    </button>
                </div>
            </form>

            {hasil && (
                <p style={{ marginTop: 16 }}>
                    BMI kamu: <strong>{hasil.bmi}</strong>{" "}
                    {/* Terapkan dynamic color sesuai hasil BMI (Latihan No. 3) */}
                    <span style={{ color: hasil.warna, fontWeight: "bold" }}>
                        ({hasil.kategori})
                    </span>
                </p>
            )}

            {/* Tautan kembali ke halaman utama (Latihan No. 5) */}
            <div style={{ marginTop: 32 }}>
                <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>
                    Bukan kamu? Ganti nama
                </Link>
            </div>
        </main>
    );
}