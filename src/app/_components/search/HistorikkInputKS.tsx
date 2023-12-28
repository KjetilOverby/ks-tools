"use client";
import React, { useEffect, useState } from "react";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";

interface historikkInputProps {
  postId: string;
  setOpenBandhistorikkData: React.Dispatch<React.SetStateAction<boolean>>;

  historikkKs: {
    anmKS: string;
    handling: string;
    sgKS: string;
    datoSrv: Date;
  };
  setOpenInputKS: React.Dispatch<React.SetStateAction<boolean>>;
  setHistorikkKs: React.Dispatch<
    React.SetStateAction<{
      anmKS: string;
      sgKS: string;
      datoSrv: Date;
      handling: string;
    }>
  >;
}

const HistorikkInputKS = ({
  postId,
  historikkKs,
  setHistorikkKs,
  setOpenInputKS,
}: historikkInputProps) => {
  const router = useRouter();
  const updatePost = api.bandhistorikk.updateKS.useMutation({
    onSuccess: () => {
      router.refresh();
      setOpenInputKS(false);
    },
  });

  const [bfs, setBfs] = useState([]);

  const [bfsValue, setBfsValue] = useState({
    bfs1: "",
    bfs2: "",
    bfs3: "",
    bfs4: "",
    bfs5: "",
    bfs6: "",
  });
  useEffect(() => {
    setBfs([bfsValue]);
  }, [bfsValue]);

  const nonEmptyValues = Object.values(bfsValue).filter(
    (value) => value !== "",
  );
  const concatenatedString = nonEmptyValues.join(", ");

  console.log(concatenatedString);

  return (
    <div className="absolute z-40">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          void updatePost.mutate({
            id: postId,
            anmKS: historikkKs.anmKS,
            handling: concatenatedString,
            sgKS: historikkKs.sgKS,
            datoSrv: historikkKs.datoSrv,
          });
        }}
        className="card w-96 bg-slate-500 text-neutral-content"
      >
        <div className="card-body">
          <h2 className="card-title">Oppdater post</h2>
          <div>
            <p>Servicedato:</p>
            <input
              onChange={(e) =>
                setHistorikkKs({
                  ...historikkKs,
                  datoSrv: new Date(e.currentTarget.value),
                })
              }
              type="date"
              className="input input-bordered input-xs w-full max-w-xs bg-white"
            />
          </div>

          <div>
            <p>Anm K&S:</p>
            <input
              value={historikkKs.anmKS}
              onChange={(e) =>
                setHistorikkKs({
                  ...historikkKs,
                  anmKS: e.currentTarget.value,
                })
              }
              type="text"
              className="input input-bordered input-xs w-full max-w-xs bg-white"
            />
          </div>

          <div className="rounded-xl border p-1">
            <label className="label cursor-pointer">
              <span className="label-text">BFS423 EKSTRA RETTING BÅND</span>
              <input
                onChange={(e) =>
                  setBfsValue({
                    ...bfsValue,
                    bfs1: e.currentTarget.value,
                  })
                }
                type="checkbox"
                className="checkbox"
                value="BFS423"
              />
            </label>
            <label className="label cursor-pointer">
              <span className="label-text">BFS426 BUNNSTUK BÅND</span>
              <input
                onChange={(e) =>
                  setBfsValue({
                    ...bfsValue,
                    bfs2: e.currentTarget.value,
                  })
                }
                type="checkbox"
                className="checkbox"
                value="BFS426"
              />
            </label>
            <label className="label cursor-pointer">
              <span className="label-text">
                BFS427 RETTING-STREKKING-SLIPING METER
              </span>
              <input
                onChange={(e) =>
                  setBfsValue({
                    ...bfsValue,
                    bfs3: e.currentTarget.value,
                  })
                }
                value="BFS427"
                type="checkbox"
                className="checkbox"
              />
            </label>
            <label className="label cursor-pointer">
              <span className="label-text">
                BFS429 STELL.FERDIG SLIP OG RETT f.o.m 100mm bredde TANN
              </span>
              <input
                onChange={(e) =>
                  setBfsValue({
                    ...bfsValue,
                    bfs4: e.currentTarget.value,
                  })
                }
                value="BFS429"
                type="checkbox"
                className="checkbox"
              />
            </label>
            <label className="label cursor-pointer">
              <span className="label-text">BSF438 REP.SVEIST STELLIT TANN</span>
              <input
                onChange={(e) =>
                  setBfsValue({
                    ...bfsValue,
                    bfs5: e.currentTarget.value,
                  })
                }
                value="BSF438"
                type="checkbox"
                className="checkbox"
              />
            </label>
            <label className="label cursor-pointer">
              <span className="label-text">
                BFS442 SLIPESERVICE AV REP.TENNER METER
              </span>
              <input
                onChange={(e) =>
                  setBfsValue({
                    ...bfsValue,
                    bfs6: e.currentTarget.value,
                  })
                }
                value="BFS442"
                type="checkbox"
                className="checkbox"
              />
            </label>
          </div>
          {/* 
          <div>
            <p>Service:</p>
            <select
              value={historikkKs.handling}
              onChange={(e) =>
                setHistorikkKs({
                  ...historikkKs,
                  handling: e.currentTarget.value,
                })
              }
              className="select select-bordered select-xs w-full max-w-xs bg-white"
            >
              <option value="">Velg</option>
              <option value="BFS423 EKSTRA RETTING BÅND">
                BFS423 EKSTRA RETTING BÅND
              </option>
              <option value="BFS426 BUNNSTUK BÅND">BFS426 BUNNSTUK BÅND</option>
              <option value="BFS427 RETTING-STREKKING-SLIPING METER">
                BFS427 RETTING-STREKKING-SLIPING METER
              </option>
              <option value="BFS429 STELL.FERDIG SLIP OG RETT f.o.m 100mm bredde TANN">
                BFS429 STELL.FERDIG SLIP OG RETT f.o.m 100mm bredde TANN
              </option>
              <option value="BSF438 REP.SVEIST STELLIT TANN">
                BSF438 REP.SVEIST STELLIT TANN
              </option>
              <option value="BFS442 SLIPESERVICE AV REP.TENNER METER">
                BFS442 SLIPESERVICE AV REP.TENNER METER
              </option>
            </select>
          </div> */}
          <div>
            <p>Sign:</p>
            <input
              value={historikkKs.sgKS}
              onChange={(e) =>
                setHistorikkKs({
                  ...historikkKs,
                  sgKS: e.currentTarget.value,
                })
              }
              type="text"
              className="input input-bordered input-xs w-full max-w-xs bg-white"
            />
          </div>

          <div className="card-actions">
            <button className="btn btn-primary btn-xs">Lagre</button>
            <button
              onClick={() => setOpenInputKS(false)}
              className="btn btn-xs"
            >
              Avbryt
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HistorikkInputKS;
