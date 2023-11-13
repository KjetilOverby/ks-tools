"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "~/trpc/react";

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
      <input
        type="text"
        placeholder="Type"
        value={bladeData.type}
        onChange={(e) =>
          setBladeData({ ...bladeData, type: e.currentTarget.value })
        }
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <input
        type="text"
        placeholder="Serial"
        value={bladeData.serial}
        onChange={(e) =>
          setBladeData({ ...bladeData, serial: e.currentTarget.value })
        }
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <button
        type="submit"
        className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        disabled={createPost.isLoading}
      >
        {createPost.isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
