import { Checkbox } from "@material-tailwind/react";
import React from "react";
import { Layanan } from "./Layanan";
import { Section } from "./Section";
import { Section2 } from "./Section2";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Formulir1 = () => {
  return (
    <div>
      <Section />
      <div className="container py-9">
        <ul className="items-center justify-center space-y-1 sm:flex lg:flex md:space-x-2 md:space-y-0">
          <li className="text-blue-900 hover:text-indigo-400 font-bold">
            <a href="/">Formulir Permohonan Umum</a>
          </li>
          <li className="text-blue-900 hover:text-indigo-400 font-bold">
            <a href="/formulir1">Formulir Permohonan Difabel</a>
          </li>
        </ul>
        <div className="grid grid-cols-2 py-16 mx:auto md:px-32">
          <div className="-mx-5">
            <form className="px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="Nama"
                >
                  Nama
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Nama"
                  type="text"
                  placeholder="Masukan Nama"
                />
              </div>
              <div className="mb-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="Masukan No KTP"
                >
                  NO KTP / NIK
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="Masukan No KTP"
                  type="text"
                  placeholder="Masukan No KTP"
                />
                {/* <p className="text-red-500 text-xs italic">
              Please choose a Masukan No KTP.
            </p> */}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="Email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Email"
                  type="email"
                  placeholder="Masukan Email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="Kontak"
                >
                  Kontak
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Kontak"
                  type="text"
                  placeholder="Masukan Kontak"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="Password"
                >
                  Password ( Jika belum terdaftar )
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Password"
                  type="password"
                  placeholder="**********"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="Alamat"
                >
                  Alamat
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Alamat"
                  type="text"
                  placeholder="Masukan Alamat"
                  rows="5"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="Permintaan Informasi"
                >
                  Permintaan Informasi
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Permintaan Informasi"
                  type="text"
                  placeholder="Masukan Permintaan Informasi"
                  rows="7"
                />
              </div>

              <div className="md:flex items-center justify-between">
                <button
                  className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-2 px-9 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Kirim
                </button>
                <button
                  className="bg-gray-400 mt-3 md:mb-3 hover:bg-gray-500 text-black py-2 px-5 rounded focus:outline-none focus:shadow-outline"
                  href="#"
                >
                  Unduh Formulir Keberatan Informasi Publik
                </button>
              </div>
            </form>
          </div>
          <div className="pl-7">
            <form className="pl-2 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="Nama"
                >
                  Tujuan
                </label>
                <textarea
                  className="shadow appearance-none border rounded md:w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Nama"
                  type="text"
                  placeholder="Masukan Nama"
                  rows="7"
                />
              </div>
              <div class="flex flex-wrap mb-6">
                <div class="md:w-full mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Upload KTP
                  </label>
                  <input
                    class="shadow appearance-none border rounded md:w-1/2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="grid-first-name"
                    type="File"
                    placeholder="Jane"
                  />
                </div>
                <div class="">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-5"
                    for="grid-last-name"
                  >
                    Tanda Tangan
                  </label>
                  <a
                    class="shadow appearance-none border rounded w-full py-2.5 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="grid-last-name"
                    type=""
                    placeholder="Doe"
                    href="/"
                  >
                    Klik untuk TTD
                  </a>
                </div>
              </div>
              <div class="md:flex flex-wrap mb-3">
                <div class="md:w-1/2 px-3 md:mb-2">
                  <label
                    class="block  text-gray-700 text-sm font-bold mb-2"
                    for="grid-first-name"
                  >
                    Cara Mendapatkan
                  </label>
                  <Checkbox label="Lihat / Baca / Dengar / Catat." />
                </div>
                <div class="md:w-1/2 px-3 pb-3 md:py-7 mb-3 pt-2">
                  <Checkbox label="Mendapatkan Salin Informasi" />
                </div>
              </div>
              <div class="flex flex-wrap mb-3 -mt-6">
                <div class="md:w-1/2 px-3 md:mb-2">
                  <label
                    class="block  text-gray-700 text-sm font-bold mb-2"
                    for="grid-first-name"
                  >
                    Cara Memberikan
                  </label>
                  <Checkbox label="Mengambil Langsung" />
                  <Checkbox label="Email" />
                </div>
                <div class=" md:mb-2 mb-3 md:py-7 px-3">
                  <Checkbox label="Faksimili" />
                  <br />
                  <Checkbox label="Dikirim" />
                </div>
                <span className="pl-2 -mt-3">
                  * Apakah anda terkendala dengan pengisian formulir ? Silahkan
                  unduh dan unggah formulir permohonan umum di bawah ini.
                </span>
                <a
                  class="shadow appearance-none border rounded bg-gray-400 hover:bg-gray-500 ml-3 mt-3 py-1 px-2 text-black leading-tight focus:outline-none focus:shadow-outline"
                  id="grid-last-name"
                  type=""
                  href="/"
                >
                  Unduh Formulir
                </a>
              </div>

              <div className="md:flex flex-wraps md:items-center justify-between">
                <div class="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  ></label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="grid-first-name"
                    type="File"
                    placeholder="Jane"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3 md:mt-7">
                  <button
                    className="bg-cyan-700 hover:bg-cyan-800 text-white  py-2 px-10 rounded focus:outline-none focus:shadow-outline"
                    href="#"
                  >
                    Unggah
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Section2/>
      <Layanan/>
    </div>
  );
};
