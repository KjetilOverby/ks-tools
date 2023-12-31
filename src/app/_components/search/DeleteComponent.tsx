import React from "react";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";

interface AnyProps {
  id: string;
}

export const DeleteComponent = ({ id, wasteReasonInput }: AnyProps) => {
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
          deleteReason: wasteReasonInput,
        })
      }
    >
      <button>SLETT</button>
    </div>
  );
};
