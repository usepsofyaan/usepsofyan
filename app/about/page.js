import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div
      className="
        min-h-screen
        bg-gray-900 text-white font-sans
        grid grid-rows-[60px_1fr_auto]
        gap-16
        p-6 sm:p-20
      "
    >
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex flex-col gap-24">
        {/* HERO */}
        <section className="flex flex-col gap-4 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold">Tentang Saya</h1>
          <p className="text-gray-400 text-lg">
            Hi, saya <span className="text-white font-semibold">Usep Sofyan</span> — Web & Mobile Developer yang fokus membangun aplikasi modern, scalable, dan user-friendly.
          </p>
        </section>

        {/* ABOUT ME */}
        <section className="grid sm:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Siapa Saya?</h2>
            <p className="text-gray-400 leading-relaxed">
              Saya adalah mahasiswa Teknik Informatika dengan minat besar di bidang pengembangan web dan aplikasi mobile. Saat ini saya aktif mengembangkan berbagai proyek menggunakan teknologi modern seperti Next.js dan React Native.
            </p>
            <p className="text-gray-400 leading-relaxed">Saya terbiasa mengerjakan proyek dari tahap perencanaan, desain UI, implementasi fitur, hingga aplikasi siap digunakan.</p>
          </div>

          {/* SKILLS */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold">Skills & Teknologi</h2>

            <div className="grid grid-cols-2 gap-4">
              <Skill title="Frontend">Next.js, React, Tailwind CSS</Skill>

              <Skill title="Mobile">React Native</Skill>

              <Skill title="Backend & Database">Firebase, Supabase</Skill>

              <Skill title="Tools">Git, GitHub, Bitbucket, Figma</Skill>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="flex flex-col gap-6 max-w-4xl">
          <h2 className="text-2xl font-semibold">Pengalaman & Proyek</h2>
          <p className="text-gray-400 leading-relaxed">Saya telah mengerjakan berbagai proyek seperti:</p>

          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Aplikasi Android manajemen kegiatan berbasis React Native</li>
            <li>Website portofolio pribadi menggunakan Next.js</li>
            <li>Aplikasi CRUD dengan autentikasi dan database cloud</li>
          </ul>

          <p className="text-gray-400 leading-relaxed">Pada setiap proyek, saya berfokus pada clean code, performa aplikasi, serta tampilan yang responsif di berbagai perangkat.</p>
        </section>

        {/* VALUES */}
        <section className="grid sm:grid-cols-3 gap-6">
          <ValueCard title="Clean Code" desc="Struktur kode rapi, mudah dibaca, dan siap dikembangkan." />
          <ValueCard title="Responsive Design" desc="Tampilan optimal di desktop, tablet, dan mobile." />
          <ValueCard title="Profesional" desc="Komunikasi jelas, tepat waktu, dan fokus pada solusi." />
        </section>

        {/* CTA */}
        <section className="text-center flex flex-col gap-4">
          <h2 className="text-3xl font-bold">Mari Bekerja Sama</h2>
          <p className="text-gray-400">Tertarik melihat hasil karya saya atau ingin bekerja sama?</p>

          <div className="flex justify-center gap-4">
            <a href="/projects" className="px-6 py-3 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-200 transition">
              Lihat Projects
            </a>
            <a href="/contact" className="px-6 py-3 rounded-xl border border-gray-600 hover:bg-gray-800 transition">
              Hubungi Saya
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* ================= COMPONENTS ================= */

function Skill({ title, children }) {
  return (
    <div className="p-4 rounded-xl bg-gray-800">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{children}</p>
    </div>
  );
}

function ValueCard({ title, desc }) {
  return (
    <div className="p-6 rounded-2xl bg-gray-800 hover:bg-gray-700 transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
}
