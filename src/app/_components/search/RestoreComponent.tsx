import React from "react";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";

export const RestoreComponent = ({ id }) => {
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
          deleted: false,
        })
      }
    >
      <button>GJENOPPRETT</button>
    </div>
  );
};
