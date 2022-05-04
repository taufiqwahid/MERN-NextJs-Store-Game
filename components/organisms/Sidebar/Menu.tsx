import React from "react";
import MenuSidebarItem from "../../molecules/MenuSidebarItem";
interface MenuSidebarProps {
  activeMenu: string;
}
export default function MenuSidebar(props: MenuSidebarProps) {
  const { activeMenu } = props;
  return (
    <div className="menus">
      <MenuSidebarItem
        href="/member"
        title="Overview"
        src="/icon/overview.svg"
        active={activeMenu === "Overview"}
      />
      <MenuSidebarItem
        href="/member/transactions"
        title="Transactions"
        active={activeMenu === "Transactions"}
        src="/icon/transaction.svg"
      />
      <MenuSidebarItem
        href="/messages"
        title="Messages"
        active={activeMenu === "Messages"}
        src="/icon/messages.svg"
      />

      <MenuSidebarItem
        href="/cards"
        title="Cards"
        active={activeMenu === "Cards"}
        src="/icon/card.svg"
      />
      <MenuSidebarItem
        href="/rewards"
        title="Rewards"
        active={activeMenu === "Rewards"}
        src="/icon/rewards.svg"
      />
      <MenuSidebarItem
        href="/member/edit-profile"
        title="Settings"
        active={activeMenu === "Settings"}
        src="/icon/settings.svg"
      />
      <MenuSidebarItem
        href="/log-out"
        title="Log Out"
        active={activeMenu === "Log Out"}
        src="/icon/logout.svg"
      />
    </div>
  );
}
