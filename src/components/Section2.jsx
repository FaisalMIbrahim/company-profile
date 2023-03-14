import React from "react";

export const Section2 = () => {
  return (
    <div className="py-10">
      <div className="grid md:grid-cols-2 gap-10 mx:auto mx-2 md:mx-32">
        <div>
          <img src="/1.png"></img>
        </div>
        <div className="md:pl-12">
          <div className="text-4xl ">
            <h1 className="pb-5 ">Ajukan !</h1>
            <b className="bg-cyan-900 text-white py-1 px-2 rounded-md">
              Permohonan
            </b>{" "}
            atau
            <div className="pt-5 mx md:mx-60 md:pl-20 md:-mt-14">
              {" "}
              <b className="bg-cyan-900 text-white py-1 px-2 rounded-md py-auto space-y">
                Keberatan
              </b>
            </div>{" "}
            <h1 className="pt-1">Informasi dan Dokumentasi</h1>
          </div>
          <p className="pt-2">
            Silahkan mengajukan permohonan atau kebertan informasi yang belum
            tersedia atau tidak dipublikasikan oleh Kementerian Badan Usaha
            Milik Negara Republik Indonesia{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
