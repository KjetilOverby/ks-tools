import React from "react";
import HeaderComponent from "../_components/HeaderComponent";
import AdminContent from "./AdminContent";

const AdminStartpage = () => {
  return (
    <div className="min-h-screen bg-gray-400">
      <HeaderComponent />
      <AdminContent />
    </div>
  );
};

export default AdminStartpage;
