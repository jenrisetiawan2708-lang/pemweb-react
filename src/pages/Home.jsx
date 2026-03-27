import Navbar from "../components/Navbar";
import bgHome from "../aset/backgroundbareng.jpeg";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgHome})` }}
    >
      <div className="min-h-screen bg-black/20">
        
        <Navbar />

        <div className="flex items-center justify-center px-6 py-16">
          <div className="w-full max-w-4xl bg-white/20 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/30 p-8 md:p-12 text-white">
            
            <p className="text-sm uppercase mb-3 text-center">
              PROJECT IMPLEMENTASI REACT
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
              PROFILE KELOMPOK AJR
            </h1>

            <p className="text-lg text-center mb-6 leading-relaxed">
              Website ini merupakan hasil dari project implementasi ReactJS yang
              dirancang untuk menampilkan profil kelompok secara modern dan interaktif.
              Dalam pengembangannya, kami menggunakan React sebagai library utama
              serta Tailwind CSS untuk menciptakan tampilan yang responsif dan menarik.
              <br />
              Website ini bertujuan untuk memperkenalkan anggota kelompok serta
              menunjukkan kemampuan dalam membangun antarmuka web yang rapi,
              terstruktur, dan user-friendly. Dengan desain yang minimalis namun
              elegan, website ini diharapkan dapat memberikan pengalaman pengguna
              yang nyaman saat menjelajah setiap halaman profil anggota.
            </p>

            {/* 🔥 Footer kecil */}
            <div className="grid grid-cols-3 text-sm mt-6 text-white/80 text-center">
              <span className="text-left">Pemrograman Web</span>
              <span>T2H</span>
              <span className="text-right">Teknologi Informasi</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}