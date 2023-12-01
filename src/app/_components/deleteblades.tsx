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
        <button onClick={deleteBlade}>Delete</button>
      </div>
      <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        {/* <button
          className="btn"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          open modal
        </button> */}
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Hello!</h3>
            <p className="py-4">
              <div>
                <button onClick={deleteBlade}>Delete</button>
              </div>
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Deleteblades;
