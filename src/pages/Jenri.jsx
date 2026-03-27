import Navbar from "../components/Navbar";
import bg from "../aset/backgroundbareng.jpeg";
import foto from "../aset/jenrifoto.jpeg";

import instagramIcon from "../aset/instagram.jpg";
import emailIcon from "../aset/email.jpg";
import officeIcon from "../aset/office.png";
import canvaIcon from "../aset/canva.jpg";
import figmaIcon from "../aset/figma.png";
import vscodeIcon from "../aset/vscode.jpg";

export default function Jenri() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="min-h-screen bg-black/15">
        <Navbar />

        <div className="px-6 py-10 flex justify-center">
          <div className="w-full max-w-5xl bg-white/85 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-blue-500 text-white px-8 py-6">
              <h1 className="text-3xl md:text-4xl font-bold">
                Jenri Setiawan Sitepu
              </h1>
              <p className="mt-2 text-white/90">
                Mahasiswa Teknologi Informasi
              </p>
            </div>

            <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {/* BAGIAN KIRI */}
              <div className="md:col-span-1 space-y-6">
                <img
                  src={foto}
                  alt="Foto Jenri"
                  className="w-full h-80 object-cover object-top rounded-2xl shadow-lg"
                />

                {/* SOSIAL MEDIA */}
                <div className="bg-blue-50 rounded-2xl p-5 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">
                    Sosial Media
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={instagramIcon}
                        alt="Instagram"
                        className="w-10 h-10 rounded-xl object-cover"
                      />
                      <div>
                        <p className="text-sm text-gray-500">Instagram</p>
                        <a
                          href="https://www.instagram.com/jenriii_stp/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 font-medium hover:underline"
                        >
                          @jenriii_stp
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <img
                        src={emailIcon}
                        alt="Email"
                        className="w-10 h-10 rounded-xl object-cover"
                      />
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="text-gray-800 font-medium break-all">
                          jenrisetiawan2708@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SOFTWARE */}
                <div className="bg-blue-50 rounded-2xl p-5 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">
                    Software
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm">
                      <img
                        src={officeIcon}
                        alt="Microsoft Office"
                        className="w-12 h-12 rounded-xl object-cover"
                      />
                      <span className="text-gray-800 font-medium text-lg">
                        Microsoft Office
                      </span>
                    </div>

                    <div className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm">
                      <img
                        src={canvaIcon}
                        alt="Canva"
                        className="w-12 h-12 rounded-xl object-cover"
                      />
                      <span className="text-gray-800 font-medium text-lg">
                        Canva
                      </span>
                    </div>

                    <div className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm">
                      <img
                        src={figmaIcon}
                        alt="Figma"
                        className="w-12 h-12 rounded-xl object-cover"
                      />
                      <span className="text-gray-800 font-medium text-lg">
                        Figma
                      </span>
                    </div>

                    <div className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm">
                      <img
                        src={vscodeIcon}
                        alt="Visual Studio Code"
                        className="w-12 h-12 rounded-xl object-cover"
                      />
                      <span className="text-gray-800 font-medium text-lg">
                        Visual Studio Code
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* BAGIAN KANAN */}
              <div className="md:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-2xl p-4 shadow-sm">
                    <p className="text-gray-500 text-sm">Kelas</p>
                    <p className="text-lg font-semibold text-gray-800">T2H</p>
                  </div>

                  <div className="bg-blue-50 rounded-2xl p-4 shadow-sm">
                    <p className="text-gray-500 text-sm">Prodi</p>
                    <p className="text-lg font-semibold text-gray-800">
                      Teknologi Informasi
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-2xl p-4 shadow-sm md:col-span-2">
                    <p className="text-gray-500 text-sm">Domisili</p>
                    <p className="text-lg font-semibold text-gray-800">
                      Malang, Jawa Timur
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Tentang Diri
                  </h2>

                  <div className="text-gray-700 leading-8 text-justify space-y-4">
                    <p>
                      Saya adalah mahasiswa semester 2 Program Studi Teknologi
                      Informasi di Fakultas Vokasi Universitas Brawijaya yang
                      memiliki ketertarikan besar dalam dunia teknologi,
                      khususnya pengembangan web. Saya dikenal sebagai pribadi
                      yang memiliki rasa ingin tahu tinggi serta semangat untuk
                      terus belajar hal-hal baru. Dalam proses pembelajaran,
                      saya selalu berusaha memahami konsep secara mendalam,
                      bukan hanya sekadar menyelesaikan tugas.
                    </p>

                    <p>
                      Saya tertarik pada bidang frontend development karena
                      dapat menggabungkan logika dengan kreativitas dalam
                      membangun tampilan aplikasi yang menarik dan interaktif.
                      Selain itu, saya juga mulai mengeksplorasi berbagai
                      teknologi modern seperti React dan Tailwind CSS untuk
                      meningkatkan kemampuan saya dalam membuat aplikasi web
                      yang responsif.
                    </p>

                    <p>
                      Saya percaya bahwa kerja keras, konsistensi, dan kemauan
                      untuk terus berkembang merupakan kunci utama dalam
                      mencapai tujuan. Oleh karena itu, saya selalu berusaha
                      memanfaatkan setiap kesempatan untuk belajar, baik melalui
                      perkuliahan, proyek kelompok, maupun eksplorasi mandiri.
                      Ke depannya, saya ingin menjadi seorang developer yang
                      tidak hanya mampu membangun aplikasi, tetapi juga
                      memberikan solusi yang bermanfaat bagi banyak orang.
                    </p>
                    {/* SKILLS */}
                <div className="bg-blue-50 rounded-2xl p-5 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">
                    Skills
                  </h2>

                  {/* HARD SKILL */}
                  <div className="mb-4">
                    <p className="text-gray-600 font-semibold mb-2">
                      Hard Skills
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white px-3 py-1 rounded-xl shadow text-sm">
                        HTML & CSS
                      </span>
                      <span className="bg-white px-3 py-1 rounded-xl shadow text-sm">
                        JavaScript
                      </span>
                      <span className="bg-white px-3 py-1 rounded-xl shadow text-sm">
                        React JS
                      </span>
                    </div>
                  </div>

                  {/* SOFT SKILL */}
                  <div>
                    <p className="text-gray-600 font-semibold mb-2">
                      Soft Skills
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white px-3 py-1 rounded-xl shadow text-sm">
                        Teamwork
                      </span>
                      <span className="bg-white px-3 py-1 rounded-xl shadow text-sm">
                        Problem Solving
                      </span>
                      <span className="bg-white px-3 py-1 rounded-xl shadow text-sm">
                        Communication
                      </span>
                    </div>
                  </div>
                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}