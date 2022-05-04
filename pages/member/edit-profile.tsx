import Image from "next/image";
import React from "react";
import EditProfileForm from "../../components/organisms/EditProfileForm";
import Sidebar from "../../components/organisms/Sidebar";
interface EditProfileProps {
  name: string;
}
export default function EditProfile() {
  return (
    <section className="edit-profile overflow-auto">
      <Sidebar activeMenu="Settings" />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <EditProfileForm />
          </div>
        </div>
      </main>
    </section>
  );
}
