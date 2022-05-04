import React from "react";
import RowItem from "../../atoms/RowItem";

export default function TransactionDetailContent() {
  return (
    <div className="purchase pt-30">
      <h2 className="fw-bold text-xl color-palette-1 mb-20">
        Purchase Details
      </h2>
      <RowItem title="Your Game ID" value="masayoshizero" />
      <RowItem title="Order ID" value="#GG001" />
      <RowItem title="Item" value="250 Diamonds" />
      <RowItem title="Price" value="Rp 42.280.500" />
      <RowItem title="Tax (10%)" value="Rp 4.228.000" />
      <RowItem title="Total" value="Rp 55.000.600" />
    </div>
  );
}
