"use client";
import React from "react";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";

interface bladeProps {
  blade: string;
}

const Deleteblades = ({ blade }: bladeProps) => {
  const router = useRouter();

  const deleteBladeApi = api.sawblades.delete.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  const deleteBlade = () => {
    deleteBladeApi.mutate({ id: blade });
  };
  return (
    <>
      <div>
        <button onClick={deleteBlade}>SLETT</button>
      </div>
      <div></div>
    </>
  );
};

export default Deleteblades;
