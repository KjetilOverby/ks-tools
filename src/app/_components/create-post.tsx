// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";

import { Prisma } from "@prisma/client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { api } from "~/trpc/react";
import { KundeSelector } from "./newblades/KundeSelector";
import { NewInputComponent } from "./newblades/NewInputComponent";

export function CreatePost() {
  const router = useRouter();
  const [bladeData, setBladeData] = useState({
    type: "",
    IdNummer: "",
    note: "",
    deleted: false,
    kunde: "",
    side: "",
    active: false,
    deleteReason: "",
    produsent: "",
    creatorImg: "",
    deleter: "",
    deleterImg: "",
  });

  const createPost = api.sawblades.create.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  const [inputID, setInputID] = useState("");
  const [kundeID, setKundeID] = useState("");

  const [duplicateError, setDuplicateError] = useState("");
  console.log(duplicateError);

  useEffect(() => {
    if (bladeData.kunde === "Moelven Soknabruket") {
      setKundeID("MS");
    } else if (bladeData.kunde === "Moelven Østerdalsbruket") {
      setKundeID("MØ");
    } else if (bladeData.kunde === "Moelven Mjøsbruket") {
      setKundeID("MM");
    }
  }, [bladeData]);

  return (
    <div className="rounded-xl bg-accent p-5">
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          try {
            if (bladeData.kunde === "") {
              alert("Du må legge inn kunde.");
            } else if (bladeData.type === "") {
              alert("Du må legge inn bladtype.");
            } else if (inputID === "") {
              alert("Du må legge inn ID nummer.");
            } else if (bladeData.side === "") {
              alert("Side er påkrevd");
            } else {
              const response = await createPost.mutateAsync({
                IdNummer: `${kundeID}-${inputID}`,
                type: bladeData.type,
                note: bladeData.note,
                deleted: false,
                kunde: bladeData.kunde,
                side: bladeData.side,
                active: false,
                deleteReason: "",
                produsent: "Munkfors",
                creatorImg: "",
                deleter: "",
                deleterImg: "",
              });
              console.log(response);
            }
          } catch (e) {
            alert("Dette ID nummeret finnes allerde.");

            if (e instanceof Prisma.PrismaClientKnownRequestError) {
              // The .code property can be accessed in a type-safe manner
              if (e) {
                setDuplicateError(
                  "There is a unique constraint violation, a new user cannot be created with this email",
                );
              }
            }
            throw e;
          }
        }}
        className="flex flex-col gap-2"
      >
        <p>Legg til nye</p>
        <KundeSelector bladeData={bladeData} setBladeData={setBladeData} />
        <NewInputComponent bladeData={bladeData} setBladeData={setBladeData} />
        <select
          onChange={(e) =>
            setBladeData({ ...bladeData, side: e.currentTarget.value })
          }
          className="select select-info select-sm bg-accent text-lg text-neutral"
        >
          <option disabled selected>
            Velg side
          </option>

          <option value="Høyre">Høyre</option>

          <option value="Venstre">Venstre</option>
        </select>

        <input
          type="text"
          placeholder={"Notat (optional)"}
          onChange={(e) =>
            setBladeData({ ...bladeData, note: e.currentTarget.value })
          }
          className="w-full rounded-xl bg-gray-800 px-4 py-2 text-sm text-neutral"
        />
        <div className="flex">
          <div className="flex items-center justify-center">{kundeID}-</div>
          <input
            type="text"
            placeholder={"ID nummer"}
            value={inputID}
            onChange={(e) => setInputID(e.currentTarget.value)}
            className="w-full rounded-xl bg-secondary px-4 py-2 text-sm text-neutral"
          />
        </div>
        <button
          type="submit"
          className="btn-xl rounded-xl bg-secondary px-10 py-3 text-xs font-semibold transition hover:bg-white/20"
          disabled={createPost.isLoading}
        >
          {createPost.isLoading ? "Lagrer..." : "Lagre"}
        </button>
      </form>
    </div>
  );
}
