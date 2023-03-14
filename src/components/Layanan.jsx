import React from "react";
import { Link } from "react-router-dom";

export const Layanan = () => {
  return (
    <div className="container mx-auto md:px-32 py-16">
      <div className="font-bold text-4xl text-center">
        <h1 className="">Layanan</h1>
      </div>
      <div className="py-10 m-4 ">
        <div className="grid md:grid-cols-3 lg:grid-cols-3 ">
          <div className="p-6 max-w-sm bg-white ">
            <svg
              className="mb-2 w-10 h-10 text-gray-50 dark:text-gray-400 bg-cyan-600 rounded-md"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                clip-rule="evenodd"
              ></path>
              <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
            </svg>
            <Link to="/">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-cyan-600 dark:text-white">
                Permohonan Informasi
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Pengajuan permohonan informasi yang belum terpublikasi.
            </p>

            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
          </div>

          <div className="p-6  max-w-sm bg-gray-200 ">
            <svg
              className="mb-2 w-10 h-10 text-gray-50 dark:text-gray-400 bg-cyan-600 rounded-md"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                clip-rule="evenodd"
              ></path>
              <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
            </svg>
            <Link to="/">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-cyan-600 dark:text-white">
                Pengajuan Keberatan
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Pengajuan keberatan atas permohonan atau informasi.
            </p>

            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
          </div>

          <div className="p-6 max-w-sm bg-white ">
            <svg
              className="mb-2 w-10 h-10 text-gray-50 dark:text-gray-400 bg-cyan-600 rounded-md"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                clip-rule="evenodd"
              ></path>
              <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
            </svg>
            <Link to="/">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-cyan-600 dark:text-white">
                Regulasi
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Regulasi yang diatur oleh Kementeran BUMN.
            </p>

            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
          </div>
        </div>
        <div className="grid md:grid-cols-3 object-center lg:grid-cols-3 ">
          <div className="p-6 max-w-sm bg-gray-200 ">
            <svg
              className="mb-2 w-10 h-10 text-gray-50 dark:text-gray-400 bg-cyan-600 rounded-md"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                clip-rule="evenodd"
              ></path>
              <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
            </svg>
            <Link to="/">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-cyan-600 dark:text-white">
                Regulasi
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Informasi yang disajikan secara berkala.
            </p>

            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
          </div>

          <div className="p-6  max-w-sm bg-white ">
            <svg
              className="mb-2 w-10 h-10 text-gray-50 dark:text-gray-400 bg-cyan-600 rounded-md"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                clip-rule="evenodd"
              ></path>
              <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
            </svg>
            <Link to="/">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-cyan-600 dark:text-white">
                Informasi Serta Merta
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Informasi yang tersaji tidak dalam waktu yang tetap.
            </p>

            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
          </div>

          <div className="p-6 max-w-sm bg-gray-200 ">
            <svg
              className="mb-2 w-10 h-10 text-gray-50 dark:text-gray-400 bg-cyan-600 rounded-md"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                clip-rule="evenodd"
              ></path>
              <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
            </svg>
            <Link to="/">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-cyan-600 dark:text-white">
                Informasi Setiap Saat
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Informasi yang selalu tersedia setiap saat.
            </p>

            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
          </div>
        </div>
      </div>
    </div>
  );
};
