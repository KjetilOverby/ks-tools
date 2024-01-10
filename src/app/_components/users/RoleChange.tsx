"use client";
import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";

const RoleChange = () => {
  const router = useRouter();
  const updateRoles = api.users.updateRole.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  return (
    <div>
      <select
        onChange={(e) => {
          e.preventDefault();
          void updateRoles.mutate({
            id: "clqt4w9mk000ff286j60a7fzi",
            role: e.currentTarget.value as
              | "ADMIN"
              | "USER"
              | "LOGIN"
              | "MO_ADMIN"
              | "MM_ADMIN"
              | "MS_ADMIN"
              | "KV_ADMIN",
          });
        }}
        className="select select-bordered select-xs w-full max-w-xs"
      >
        <option value="">Velg kunde</option>
        <option value="ADMIN">Alle</option>
        <option value="MO_ADMIN">Østerdalsbruket</option>
        <option value="MM_ADMIN">Mjøsbruket</option>
        <option value="MS_ADMIN">Soknabruket</option>
      </select>
    </div>
  );
};

export default RoleChange;
