"use client";
import React, { useState } from "react";
import dateFormat from "dateformat";
import Deleteblades from "../deleteblades";

const SearchMain = ({ sawblades }) => {
  const [showDeletedBlades, setShowDeletedBlades] = useState(false);
  return (
    <div>
      <div>
        <table className="table table-xs bg-secondary">
          <thead>
            <tr>
              <th className="text-sm text-accent">Dato</th>
              <th className="text-sm text-accent">Type</th>

              <th className="text-sm text-accent">Serienummer</th>

              <th className="text-sm text-accent">Opprettet av</th>
              <th className="text-sm text-accent"></th>
            </tr>
          </thead>
          <tbody>
            {sawblades.map((blade) => {
              return (
                <>
                  {!blade.deleted && (
                    <tr className="bg-accent">
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar"></div>
                          <div>
                            <div className="text-xs text-primary">
                              {dateFormat(
                                blade.updatedAt,
                                "dd.mm.yyyy , HH:MM",
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar"></div>
                          <div>
                            <div className="text-xs text-neutral">
                              {blade.type}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="font-bold text-neutral">{blade.serial}</td>

                      <td className="text-primary">{blade.creator}</td>

                      <td>
                        <th className="text-secondary">Delete</th>
                      </td>
                    </tr>
                  )}
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <button onClick={() => setShowDeletedBlades(!showDeletedBlades)}>
        {showDeletedBlades ? "Skjul slettede blad" : "Vis slettede blad"}
      </button>
      {showDeletedBlades && (
        <div>
          <h1>Slettede blad</h1>
          <table className="table table-xs bg-secondary">
            <thead>
              <tr>
                <th className="text-sm text-accent">Dato</th>
                <th className="text-sm text-accent">Type</th>

                <th className="text-sm text-accent">Serienummer</th>

                <th className="text-sm text-accent">Opprettet av</th>
                <th className="text-sm text-accent">Slettet av</th>
                <th className="text-sm text-accent"></th>
              </tr>
            </thead>
            <tbody>
              {sawblades.map((blade) => {
                return (
                  <>
                    {blade.deleted && (
                      <tr className="bg-base-100">
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar"></div>
                            <div>
                              <div className="text-xs text-primary">
                                {dateFormat(
                                  blade.updatedAt,
                                  "dd.mm.yyyy , HH:MM",
                                )}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar"></div>
                            <div>
                              <div className="text-xs text-neutral">
                                {blade.type}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="font-bold text-neutral">
                          {blade.serial}
                        </td>

                        <td className="text-primary">{blade.creator}</td>
                        <td className="text-primary">KTl</td>

                        <td>
                          <th className="text-secondary">Gjenopprett</th>
                        </td>
                      </tr>
                    )}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SearchMain;
