"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const projects = [
  {
    id: 1,
    title: "Masjid App",
    description: "Aplikasi media informasi berbasis Android menggunakan React Native dan Firebase.",
    tech: ["React Native", "Firebase", "Cloudinary"],
    category: "android",
    link: "#",
  },
  {
    id: 2,
    title: "Website Undangan Digital",
    description: "Website undangan pernikahan modern menggunakan Next.js dan Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS"],
    category: "web",
    link: "#",
  },
  {
    id: 3,
    title: "Admin Dashboard",
    description: "Dashboard admin untuk manajemen data user dan konten.",
    tech: ["React", "Firestore"],
    category: "web",
    link: "#",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter);

  return (
    <div className="bg-gray-900 text-white font-sans text-black grid grid-rows-[60px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Navbar />

      <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-3">My Projects</h1>
          <p className="text-gray-600">Kumpulan project Web dan Android yang pernah saya kerjakan.</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {["all", "web", "android"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition
                ${filter === item ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}
              `}
            >
              {item === "all" ? "All" : item === "web" ? "Web" : "Android"}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div key={project.id} className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>

              <p className="text-gray-600 mb-4">{project.description}</p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((item, index) => (
                  <span key={index} className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                    {item}
                  </span>
                ))}
              </div>

              <a href={project.link} className="inline-block text-sm font-medium text-white bg-black px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                Lihat Project
              </a>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && <p className="text-center text-gray-500 mt-12">Project belum tersedia.</p>}
      </main>

      <Footer />
    </div>
  );
}
