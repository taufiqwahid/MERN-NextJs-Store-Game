import React from "react";
import Sidebar from "../../../components/organisms/Sidebar";
import TransactionContent from "../../../components/organisms/TransactionContent";

export default function TransactionDetail() {
  return (
    <section className="transactions-detail overflow-auto">
      <Sidebar activeMenu="Transactions" />
      <TransactionContent />
    </section>
  );
}
