import Navbar from "../components/Navbar";
import bg from "../aset/backgroundbareng.jpeg";
import foto from "../aset/rajafoto.jpeg";

import instagramIcon from "../aset/instagram.jpg";
import emailIcon from "../aset/email.jpg";
import officeIcon from "../aset/office.png";
import canvaIcon from "../aset/canva.jpg";
import figmaIcon from "../aset/figma.png";
import vscodeIcon from "../aset/vscode.jpg";

export default function Raja() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="min-h-screen bg-black/15">
        <Navbar />

        <div className="px-6 py-10 flex justify-center">
          <div className="w-full max-w-5xl bg-white/85 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-indigo-500 text-white px-8 py-6">
              <h1 className="text-3xl md:text-4xl font-bold">
                Raja Esa Abdilah
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
                  alt="Foto Raja"
                  className="w-full h-80 object-cover object-top rounded-2xl shadow-lg"
                />

                {/* SOSIAL MEDIA */}
                <div className="bg-indigo-50 rounded-2xl p-5 shadow-sm">
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
                          href="https://www.instagram.com/rajaesa_/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 font-medium hover:underline"
                        >
                          @rajaesa_
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
                          rajaesa06@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SOFTWARE */}
                <div className="bg-indigo-50 rounded-2xl p-5 shadow-sm">
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
                  <div className="bg-indigo-50 rounded-2xl p-4 shadow-sm">
                    <p className="text-gray-500 text-sm">Kelas</p>
                    <p className="text-lg font-semibold text-gray-800">T2H</p>
                  </div>

                  <div className="bg-indigo-50 rounded-2xl p-4 shadow-sm">
                    <p className="text-gray-500 text-sm">Prodi</p>
                    <p className="text-lg font-semibold text-gray-800">
                      Teknologi Informasi
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded-2xl p-4 shadow-sm md:col-span-2">
                    <p className="text-gray-500 text-sm">Domisili</p>
                    <p className="text-lg font-semibold text-gray-800">
                      Malang, Jawa Timur
                    </p>
                  </div>
                </div>

                {/* DESKRIPSI */}
                <div className="bg-gray-50 rounded-2xl p-6 shadow-sm mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Tentang Diri
                  </h2>

                  <div className="text-gray-700 leading-8 text-justify space-y-4">
                    <p>
                      Saya merupakan mahasiswa semester 2 Teknologi Informasi di
                      Fakultas Vokasi Universitas Brawijaya yang memiliki minat
                      dalam pengembangan teknologi digital, khususnya dalam
                      bidang web development. Saya memiliki karakter yang
                      adaptif dan mudah bekerja sama dalam tim, sehingga mampu
                      berkontribusi secara aktif dalam setiap proyek yang
                      dikerjakan bersama.
                    </p>

                    <p>
                      Saya tertarik untuk mempelajari bagaimana sebuah aplikasi
                      dapat dibangun dari nol hingga menjadi sebuah sistem yang
                      fungsional dan user-friendly. Dalam perjalanan belajar
                      saya, saya mulai memahami pentingnya desain antarmuka yang
                      baik serta pengalaman pengguna yang nyaman. Oleh karena
                      itu, saya terus mengasah kemampuan saya dalam menggunakan
                      berbagai tools dan framework modern.
                    </p>

                    <p>
                      Selain fokus pada pengembangan teknis, saya juga berusaha
                      meningkatkan kemampuan komunikasi dan problem solving agar
                      dapat menghadapi tantangan dalam dunia teknologi yang
                      terus berkembang. Saya percaya bahwa kolaborasi dan
                      inovasi merupakan kunci dalam menciptakan solusi yang
                      efektif.
                    </p>

                    <p>
                      Ke depannya, saya ingin mengembangkan diri menjadi seorang
                      profesional di bidang teknologi yang mampu beradaptasi
                      dengan perubahan serta memberikan kontribusi nyata melalui
                      karya yang saya hasilkan.
                    </p>
                  </div>
                </div>

                {/* SKILLS */}
                <div className="bg-indigo-50 rounded-2xl p-5 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">
                    Skills
                  </h2>

                  <div className="mb-4">
                    <p className="text-gray-600 font-semibold mb-2">
                      Hard Skills
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white px-3 py-1 rounded-xl shadow text-sm">
                        UI/UX Design
                      </span>
                      <span className="bg-white px-3 py-1 rounded-xl shadow text-sm">
                        Tailwind CSS
                      </span>
                      <span className="bg-white px-3 py-1 rounded-xl shadow text-sm">
                        Git & GitHub
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-600 font-semibold mb-2">
                      Soft Skills
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white px-3 py-1 rounded-xl shadow text-sm">
                        Leadership
                      </span>
                      <span className="bg-white px-3 py-1 rounded-xl shadow text-sm">
                        Adaptability
                      </span>
                      <span className="bg-white px-3 py-1 rounded-xl shadow text-sm">
                        Collaboration
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
  );
}