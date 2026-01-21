import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white font-sans text-black grid grid-rows-[60px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Navbar />
      <main className="flex items-center justify-center px-4 sm:px-12">
        <div className="max-w-4xl w-full grid gap-10 sm:grid-cols-2 items-center">
          {/* TEXT */}
          <div className="text-center sm:text-left">
            <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">My Name is</p>

            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Usep <br />
              <span className="text-gray-600 dark:text-gray-300">Sofyan</span>
            </h1>

            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Revs Your Heart</p>

            {/* BUTTON */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <button
                className="
                  px-6 py-3 rounded-lg font-semibold
                  bg-black text-white
                  dark:bg-white dark:text-black
                  hover:scale-105 transition-transform
                "
              >
                Resume
              </button>

              <button
                className="
                  px-6 py-3 rounded-lg font-semibold
                  border border-black dark:border-white
                  hover:bg-black hover:text-white
                  dark:hover:bg-white dark:hover:text-black
                  transition-all
                "
              >
                Contacts
              </button>
            </div>
          </div>

          {/* IMAGE / DECORATION */}
          <div className="hidden sm:flex justify-center">
            <div
              className="
                w-64 h-64 rounded-full
                bg-gradient-to-br from-gray-300 to-gray-500
                dark:from-gray-700 dark:to-gray-500
              "
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
