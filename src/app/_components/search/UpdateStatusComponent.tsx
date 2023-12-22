import React from "react";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";

interface AnyProps {
  id: string;
}

export const DeleteComponent = ({ id }: AnyProps) => {
  const router = useRouter();
  const updateStatus = api.sawblades.updateStatus.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });
  return (
    <div
      onClick={() =>
        void updateStatus.mutate({
          id: id,
          active: true,
        })
      }
    >
      <button>SLETT</button>
    </div>
  );
};
