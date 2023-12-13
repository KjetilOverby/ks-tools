"use client";
import React from "react";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";

interface PostProps {
  post: string;
  setOpenBandhistorikkData: React.Dispatch<React.SetStateAction<boolean>>;
}

const Deletehistorikkpost = ({ post, setOpenBandhistorikkData }: PostProps) => {
  const router = useRouter();

  const deleteBladeApi = api.bandhistorikk.delete.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  const deletePost = () => {
    deleteBladeApi.mutate({ id: post });
    setOpenBandhistorikkData(false);
  };
  return (
    <>
      <div>
        <button onClick={deletePost}>SLETT</button>
      </div>
      <div></div>
    </>
  );
};

export default Deletehistorikkpost;
