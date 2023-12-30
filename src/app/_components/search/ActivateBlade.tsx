import React, { useState } from "react";

interface Blade {
  type: string;
  IdNummer: string;
  deleted: boolean;
  creator: string;
  updatedAt: Date;
  createdAt: Date;
  id: string;
  kunde: string;
  side: string;
  active: boolean;
  deleteReason: string;
  _count: {
    bandhistorikk: number;
  };

  bandhistorikk: {
    creator: string;

    feilkode: string;
    handling: string;
    historikkId: string;
    id: string;
    datoInn: Date;
    klInn: Date;
    datoUt: Date;
    klUt: Date;
    sagNr: string;
    sagtid: number;
    sideklaring: number;
    anmSag: string;
    updatedAt: Date;
    anmKS: string;
    temperatur: number;
    sgSag: string;
    sgKS: string;
    datoSrv: Date;
    activePost: boolean;
    bladedata: string;
    ampere: number;
    alt: string;
  }[];
}

interface BladeProps {
  sawblades: Blade[];
  blade: {
    type: string;
    IdNummer: string;
    deleted: boolean;
    creator: string;
    updatedAt: Date;
    createdAt: Date;
    id: string;
    kunde: string;
    side: string;
    active: boolean;
    deleteReason: string;
    _count: {
      bandhistorikk: number;
    };
  };
  updateStatusHandler: () => void;
  handleCloseModal: () => void;
  createPost: (bandhistorikk: {
    creator: string;

    feilkode: string;
    handling: string;
    historikkId: string;
    id: string;
    datoInn: Date;
    klInn: Date;
    datoUt: Date;
    klUt: Date;
    sagNr: string;
    sagtid: number;
    sideklaring: number;
    anmSag: string;
    updatedAt: Date;
    anmKS: string;
    temperatur: number;
    sgSag: string;
    sgKS: string;
    datoSrv: Date;
    activePost: boolean;
    ampere: number;
    alt: string;
  }) => void;
}

const ActivateBlade = ({
  createPost,
  blade,
  updateStatusHandler,
  handleCloseModal,
}: BladeProps) => {
  const [sagNrInput, setsagNrInput] = useState("");

  return (
    <div>
      <div className="card z-40 w-96 bg-neutral text-neutral-content">
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              if (sagNrInput === "") {
                alert("Sagnummer er påkrevd");
              } else {
                createPost.mutate({
                  sagNr: sagNrInput,
                  activePost: true,
                  bladeRelationId: "",
                  bladType: "",
                  side: "",
                  creatorImg: "",
                  sgKS: "",
                  sagtid: 0,
                  createdBy: "",
                  anmKS: "",
                  createdById: "",
                  datoSrv: new Date(),
                  sgSag: "",
                  sideklaring: 0,
                  handling: "",
                  userId: "",
                  temperatur: 0,
                  anmSag: "",
                  feilkode: "Aktivt blad",
                  ampere: 0,
                  datoUt: new Date(),
                  datoInn: new Date(),
                  klUt: new Date(),
                  klInn: new Date(),
                  bladedata: blade.id,
                  alt: "",
                });
                updateStatusHandler();
              }
            }}
          >
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                <span className="text-orange-600">{blade.IdNummer}</span>
              </h2>
              <p>Aktiver blad</p>

              <select
                onChange={(e) => setsagNrInput(e.currentTarget.value)}
                className="bg-white"
                name=""
                id=""
              >
                <option value="">Velg sag</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>
            <button className="btn btn-primary btn-xs">Aktiver</button>
          </form>
        </div>
        <div className="card-actions justify-end">
          <button
            onClick={() => {
              setTimeout(() => {
                handleCloseModal();
              }, 100);
            }}
            className="btn btn-xs"
          >
            Avbryt
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivateBlade;
