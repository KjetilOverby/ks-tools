"use client";
import React from "react";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";

const deleteblades = () => {
  const router = useRouter();

  const deleteBladeApi = api.sawblades.delete.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  const deleteBlade = () => {
    deleteBladeApi.mutate({ id: api.sawblades.id });
  };
  return (
    <>
      <div>
        <button onClick={deleteBlade}>Delete</button>
      </div>
    </>
  );
};

export default deleteblades;
