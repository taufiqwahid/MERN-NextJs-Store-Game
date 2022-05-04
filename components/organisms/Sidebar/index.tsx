import React from "react";
import SidebarFooter from "./Footer";
import MenuSidebar from "./Menu";
import ProfileSidebar from "./Profile";
interface SidebarProps {
  activeMenu: string;
}
export default function Sidebar(props: SidebarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <ProfileSidebar />
        <MenuSidebar activeMenu={activeMenu} />
        <SidebarFooter />
      </div>
    </section>
  );
}
