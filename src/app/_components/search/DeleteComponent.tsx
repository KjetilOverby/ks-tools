import React from "react";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";

export const DeleteComponent = ({ id }) => {
  const router = useRouter();
  const updateBlade = api.sawblades.update.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });
  return (
    <div
      onClick={() =>
        void updateBlade.mutate({
          id: id,
          deleted: true,
        })
      }
    >
      <button>SLETT</button>
    </div>
  );
};
