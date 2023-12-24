"use client";
import React, { useState } from "react";
import dateFormat from "dateformat";
import HistorikkInput from "./HistorikkInput";
import Deletehistorikkpost from "./deletehistorikkpost";
import HistorikkInputKS from "./HistorikkInputKS";
import { CiEdit } from "react-icons/ci";
import DeactivateBlade from "./DeactivateBlade";

interface bandProps {
  bandhistorikkData: {
    side: string;
    id: string;
    updatedAt: Date;
    IdNummer: string;
    type: string;

    bandhistorikk: {
      creator: string;
      feilkode: string;
      handling: string;
      historikkId: string;
      id: string;
      datoInn: Date;
      datoUt: Date;
      sagNr: string;
      sideklaring: number;
      updatedAt: Date;
      sagtid: number;
      klInn: Date;
      klUt: Date;
      anmSag: string;
      anmKS: string;
      sgKS: string;
      sgSag: string;
      datoSrv: Date;
      temperatur: number;
      activePost: boolean;
    }[];
  };

  setOpenBandhistorikkData: React.Dispatch<React.SetStateAction<boolean>>;
}

const BandDetails = ({
  bandhistorikkData,
  setOpenBandhistorikkData,
  blade,
  updatePost,
  deactivateStatusHandler,
  handleCloseModal,
}: bandProps) => {
  const [openInput, setOpenInput] = useState(false);
  const [openMessage, setOpenMessage] = useState<string | null>(null);
  const [openMessageKS, setOpenMessageKS] = useState<string | null>(null);
  const [openInputKS, setOpenInputKS] = useState<boolean>(false);
  const [postId, setPostId] = useState("");

  const [openDeactivateModal, setOpenDeactivateModal] = useState(false);

  const [historikkKs, setHistorikkKs] = useState({
    anmKS: "",
    sgKS: "",
    datoSrv: new Date(),
    handling: "",
  });

  const messageHander = (postID: string) => {
    setOpenMessage(postID);
  };
  const closeMessageHandler = () => {
    setOpenMessage(null);
  };
  const closeMessageKSHandler = () => {
    setOpenMessageKS(null);
  };
  const messageKShandler = (postID: string) => {
    setOpenMessageKS(postID);
  };

  return (
    <div className="z-50 w-full bg-gradient-to-r from-base-100 via-blue-500 to-green-300">
      {openInput && (
        <HistorikkInput
          setOpenInput={setOpenInput}
          bandId={bandhistorikkData.id}
          setOpenBandhistorikkData={setOpenBandhistorikkData}
          side={bandhistorikkData.side}
          bladType={bandhistorikkData.type}
        />
      )}
      {openInputKS && (
        <HistorikkInputKS
          setOpenBandhistorikkData={setOpenBandhistorikkData}
          setOpenInputKS={setOpenInputKS}
          postId={postId}
          historikkKs={historikkKs}
          setHistorikkKs={setHistorikkKs}
        />
      )}

      <div className="">
        <div>
          <button
            onClick={() => setOpenInput(true)}
            className="btn btn-xs mt-5"
          >
            Ny post
          </button>
        </div>
      </div>
      <div>
        <table className="table table-xs w-full bg-neutral">
          <thead>
            <tr>
              <th className="text-sm text-accent">Sag</th>
              <th className="text-sm text-accent">Innpostet</th>
              <th className="text-sm text-accent">Utpostet</th>

              <th className="text-sm text-accent">T</th>

              <th className="text-sm text-accent">Temp</th>
              <th className="text-sm text-accent">Ampere</th>
              <th className="text-sm text-accent">SK</th>
              <th className="text-sm text-accent">Feilkode</th>
              <th className="text-sm text-accent">Anm</th>
              <th className="text-sm text-accent">Sign</th>
              <th className="text-sm text-blue-500"></th>
              <th className="text-sm text-blue-500">Service</th>
              <th className="text-sm text-blue-500">Anm KS</th>
              <th className="text-sm text-blue-500">SG</th>
              <th className="text-sm text-blue-500">Dato srv</th>
            </tr>
          </thead>
          <tbody>
            {bandhistorikkData.bandhistorikk.map((post) => {
              const openKSinput = () => {
                setOpenInputKS(true);
                setPostId(post.id);
                // setHistorikkKs({
                //   anmKS: post.anmKS,
                //   handling: post.handling,
                //   sgKS: post.sgKS,
                //   datoSrv: post.datoSrv,
                // });
              };

              const editHistorikkPost = () => {
                setOpenInput(true);
              };

              return (
                <>
                  <tr
                    className={post.activePost ? "bg-teal-800" : "bg-secondary"}
                  >
                    <td>
                      <div className="text-xs text-neutral">{post.sagNr}</div>
                    </td>
                    <td>
                      <div className="text-xs text-neutral">
                        {dateFormat(post.datoInn, "dd.mm.yyyy")},{" "}
                        {dateFormat(post.klInn, "HH:MM")}
                      </div>
                    </td>
                    <td>
                      {!post.activePost ? (
                        <div className="text-xs text-neutral">
                          {dateFormat(post.datoUt, "dd.mm.yyyy")},{" "}
                          {dateFormat(post.klUt, "HH:MM")}
                        </div>
                      ) : (
                        "Aktiv"
                      )}
                    </td>
                    <td className="font-bold text-neutral">{post.sagtid}</td>

                    <td className="text-primary">{post.temperatur}</td>
                    <td className="text-primary">Rutine</td>
                    <td className="text-primary">{post.sideklaring}</td>
                    <td className="text-primary">{post.feilkode}</td>

                    <td className="max-w-56  relative text-primary">
                      {post.anmSag && (
                        <button
                          onClick={() => messageHander(post.id)}
                          className="btn btn-xs bg-accent"
                        >
                          Vis
                        </button>
                      )}
                      {openMessage === post.id && (
                        <>
                          {openMessage && <p></p>}
                          <div className="card absolute top-0 z-50 w-96 bg-primary text-primary-content">
                            <div className="card-body">
                              <h2 className="card-title">Melding fra sag</h2>
                              <p>{post.anmSag}</p>
                              <div className="card-actions justify-end">
                                <button
                                  onClick={closeMessageHandler}
                                  className="btn btn-xs"
                                >
                                  Lukk
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </td>
                    <td className="text-primary">{post.sgSag}</td>
                    <td className="text-primary">
                      {post.activePost && (
                        <div
                          onClick={() => setOpenDeactivateModal(true)}
                          className="h-3 w-3 rounded-full bg-green-400"
                        >
                          {openDeactivateModal && (
                            <DeactivateBlade
                              blade={blade}
                              updatePost={updatePost}
                              updateStatusHandler={deactivateStatusHandler}
                              handleCloseModal={handleCloseModal}
                            />
                          )}
                        </div>
                      )}
                      {/* 
                      {openStatus === blade.id && blade.active && (
                        <DeactivateBlade
                          blade={blade}
                          updatePost={updatePost}
                          updateStatusHandler={deactivateStatusHandler}
                          handleCloseModal={handleCloseModal}
                        />
                      )} */}
                    </td>
                    <td className="text-primary">
                      <button
                        onClick={editHistorikkPost}
                        className="btn btn-xs mr-5 bg-base-100"
                      >
                        <CiEdit
                          style={{ color: "orange", fontSize: ".8rem" }}
                        />
                      </button>

                      <button onClick={openKSinput} className="btn btn-xs">
                        KS
                      </button>
                    </td>
                    <td className="text-primary">{post.handling}</td>
                    <td className="max-w-56 relative text-primary">
                      {post.anmKS && (
                        <>
                          <button
                            onClick={() => messageKShandler(post.id)}
                            className="btn btn-xs bg-accent"
                          >
                            Vis
                          </button>
                          {openMessageKS === post.id && (
                            <div className="card absolute right-0 top-0 z-50 w-96 bg-primary text-primary-content">
                              <div className="card-body">
                                <h2 className="card-title">
                                  Melding fra Stridbergs
                                </h2>
                                <p>{post.anmKS}</p>
                                <div className="card-actions justify-end">
                                  <button
                                    onClick={closeMessageKSHandler}
                                    className="btn btn-xs"
                                  >
                                    Lukk
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </td>
                    <td className="text-primary">{post.sgKS}</td>
                    <td className="text-primary">
                      {dateFormat(post.datoSrv, "dd.mm.yyyy")}
                    </td>
                    <td className="text-primary">
                      <Deletehistorikkpost
                        post={post.id}
                        setOpenBandhistorikkData={setOpenBandhistorikkData}
                      />
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BandDetails;
