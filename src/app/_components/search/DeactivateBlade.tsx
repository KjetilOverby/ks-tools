import React from "react";

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
  }[];
}

interface BladeProps {
  sawblades: Blade[];
}

const ActivateBlade = ({
  updatePost,
  blade,
  updateStatusHandler,
  handleCloseModal,
}: BladeProps) => {
  return (
    <div>
      <div className="card z-40 w-96 bg-neutral text-neutral-content">
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              updatePost.mutate({
                sagNr: "3",
                activePost: false,
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
                feilkode: "Deactivated",
                antTimer: 0,
                datoUt: new Date(),
                datoInn: new Date(),
                klUt: new Date(),
                klInn: new Date(),
                bladedata: "clqhqqaln000z1p8ufx2gnqdq",
                id: "clqhqqaln000z1p8ufx2gnqdq",
              });
              //   updateStatusHandler();
            }}
          >
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                <span className="text-orange-600">{blade.IdNummer}</span>
              </h2>
              <p>Deaktiver blad</p>
              <div>
                <div>
                  <p>Antall timer:</p>
                  <input
                    type="number"
                    className="input input-bordered input-xs w-full max-w-xs bg-white"
                  />
                </div>
                <div>
                  <p>Temperatur:</p>
                  <input
                    type="number"
                    className="input input-bordered input-xs w-full max-w-xs bg-white"
                  />
                </div>
                <div>
                  <p>Ampere:</p>
                  <input
                    type="text"
                    className="input input-bordered input-xs w-full max-w-xs bg-white"
                  />
                </div>
                <div>
                  <p>Anm sag:</p>
                  <input
                    type="text"
                    className="input input-bordered input-xs w-full max-w-xs bg-white"
                  />
                </div>
                <div>
                  <p>Feilkode:</p>
                  <select className="select select-bordered select-xs w-full max-w-xs bg-white">
                    <option value="Ingen anmerkning">Ingen anmerkning</option>
                    <option value="Bølger">Bølger</option>
                    <option value="Vandrer på hjul">Vandrer på hjul</option>
                    <option value="Sprekk">Sprekk</option>
                    <option value="Tannbrudd">Tannbrudd</option>
                    <option value="Sponpåliming">Sponpåliming</option>
                    <option value="Sløv">Sløv</option>
                    <option value="River">Riper</option>
                    <option value="Ytre faktorer">Ytre faktorer</option>
                    <option value="Reklamasjon">Reklamasjon</option>
                    <option value="Havari">Havari</option>
                    <option value="Ikjøring">Ikjøring</option>
                    <option value="Riper/bølger">Riper/bølger</option>
                    <option value="Riper/sprekk">Riper/sprekk</option>
                    <option value="Riper/vandrer">Riper/vandrer</option>
                    <option value="Bølger/sprekk">Bølger/sprekk</option>
                    <option value="Bølger/vandrer">Bølger/vandrer</option>
                    <option value="Ikjøring/riper">Ikjøring/riper</option>
                  </select>
                </div>

                <div>
                  <p>Sideklaring:</p>
                  <select className="select select-bordered select-xs w-full max-w-xs bg-white">
                    <option value={0}>Velg</option>
                    <option value={0.4}>0.4</option>
                    <option value={0.45}>0.45</option>
                    <option value={0.5}>0.5</option>
                    <option value={0.55}>0.55</option>
                    <option value={0.6}>0.6</option>
                    <option value={0.65}>0.65</option>
                    <option value={0.7}>0.7</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="btn btn-primary btn-xs">Deaktiver</button>
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
