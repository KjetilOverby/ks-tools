"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "~/trpc/react";
import { NewInputComponent } from "./newblades/NewInputComponent";

export function CreatePost() {
  const router = useRouter();
  const [bladeData, setBladeData] = useState({
    type: "",
    IdNummer: "",
    note: "",
    deleted: false,
    kunde: "",
  });

  const createPost = api.sawblades.create.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createPost.mutate({
          IdNummer: bladeData.IdNummer,
          type: bladeData.type,
          note: bladeData.note,
          deleted: false,
          kunde: "",
        });
      }}
      className="flex flex-col gap-2"
    >
      <p>Legg til nye</p>
      <NewInputComponent bladeData={bladeData} setBladeData={setBladeData} />

      <input
        type="text"
        placeholder="ID nummer"
        value={bladeData.IdNummer}
        onChange={(e) =>
          setBladeData({ ...bladeData, IdNummer: e.currentTarget.value })
        }
        className="w-full rounded-xl bg-secondary px-4 py-2 text-sm text-neutral"
      />
      <button
        type="submit"
        className="btn-xl rounded-xl bg-secondary px-10 py-3 text-xs font-semibold transition hover:bg-white/20"
        disabled={createPost.isLoading}
      >
        {createPost.isLoading ? "Lagrer..." : "Lagre"}
      </button>
    </form>
  );
}
