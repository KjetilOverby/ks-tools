"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "~/trpc/react";
import { NewInputComponent } from "./newblades/NewInputComponent";

export function CreatePost() {
  const router = useRouter();
  const [bladeData, setBladeData] = useState({
    type: "",
    serial: "",
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
          serial: bladeData.type,
          type: bladeData.serial,
        });
      }}
      className="flex w-52 flex-col gap-2 p-5 "
    >
      <p>Legg til nye</p>
      <NewInputComponent bladeData={bladeData} setBladeData={setBladeData} />

      <input
        type="text"
        placeholder="Serial"
        value={bladeData.serial}
        onChange={(e) =>
          setBladeData({ ...bladeData, serial: e.currentTarget.value })
        }
        className="w-full rounded-xl px-4 py-2 text-white"
      />
      <button
        type="submit"
        className="btn-xl rounded-xl bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        disabled={createPost.isLoading}
      >
        {createPost.isLoading ? "Lagrer..." : "Lagre"}
      </button>
    </form>
  );
}
