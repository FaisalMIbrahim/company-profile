import React from "react";

export const Footer = () => {
  return (
    <footer className="">
      <div className="bg-cyan-300 bg-opacity-40 py-16 grid grid-cols-2 ">
        <div className="mx:auto lg:mx-32 w-full md:mx-10 mx-6">
          <h2 className="w-full font-bold">Hubungi Kami!</h2>
          <p>
            Alamat : JL. Medan Merdeka Selatan No.13 Jakarta 10110 Indonesia
          </p>
          <p>Telp : (021) 29935678</p>
          <p>Email : ppid@bumn.go.id</p>
        </div>
        <div className="mx:auto md:mx-60 space-x-1 md:space-x-2 mx-8 w-1/2">
          <h1 className="pb-3 pl-2">Follow US</h1>
          <span className="bg-cyan-800 box-border rounded-full py:auto py-1 p-2">
            IG
          </span>
          <span className="bg-cyan-800 box-border rounded-full py:auto py-1 p-2">
            FB
          </span>
          <span className="bg-cyan-800 box-border rounded-full py:auto py-1 p-2">
            GIT
          </span>
        </div>
      </div>
      <div className="bg-cyan-900 py-3 text-center text-white text-sm">
        {" "}
        Copyright 2022 All Right Reserved
      </div>
    </footer>
  );
};
