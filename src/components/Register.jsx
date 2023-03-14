import React from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="py-10 md:px-10">
      <h1 className="px-8 md:px-12 font-bold text-cyan-600 text-3xl">
        Register!
      </h1>
      <h4 className="px-8 md:px-12 font-bold text-cyan-600 text-md pt-1">
        Silahkan Untuk Mengisi Form Tersebut
      </h4>
      <form className="px-8 pt-6 pb-8 mb-4 mr-4">
        <div className="grid md:grid-cols-2">
          <div className="md:px-4">
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
                Jenis Pemohon
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="jenis Pemohon"
                type="text"
              >
                <option selected>Jenis Pemohon</option>
                <option value="1">Permohonan 1</option>
                <option value="2">Permohonan 2</option>
                <option value="3">Permohonan 3</option>
              </select>
              {/* <p className="text-red-500 text-xs italic">
                Please choose a Masukan No KTP.
              </p> */}
            </div>
            <div className="mb-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="Masukan No KTP"
              >
                Jenis NIK
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="jenis Pemohon"
                type="text"
              >
                <option selected>Jenis NIK</option>
                <option value="1">NIK 1</option>
                <option value="2">NIK 2</option>
                <option value="3">NIK 3</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="NIK"
              >
                NIK
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="NIK"
                type="email"
                placeholder="Masukan NIK"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="NPWP"
              >
                NPWP
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="NPWP"
                type="text"
                placeholder="Masukan NPWP"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="Pekerjaan"
              >
                Pekerjaan
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Pekerjaan"
                type="text"
                placeholder="Masukan Pekerjaan"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="Telp"
              >
                Telp
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Telp"
                type="text"
                placeholder="Masukan Telp"
              />
            </div>
          </div>

          <div className="md:px-4">
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
                for="Fax"
              >
                Fax
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Fax"
                type="text"
                placeholder="Masukan Fax"
               
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="Keterangan"
              >
                Keterangan
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Keterangan"
                type="text"
                placeholder="Masukan Keterangan"
               
              />
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
                for="Password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Password"
                type="password"
                placeholder="**********"
              />
            </div>
            <div className="flex items-center justify-between">
                  <Link
                    className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 md:px-24 px-12 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                 
                  >
                    Register
                  </Link>
                  <Link
                    className="border border-cyan-600 hover:border-cyan-700 text-cyan-600 hover:text-cyan-700 font-bold py-2 px-12 md:px-28 rounded focus:outline-none focus:shadow-outline"
                    to="/login"
                  >
                    Sign In
                  </Link>
                </div>
          </div>
        </div>
      </form>
    </div>
  );
};
