import React from "react";
import RowItem from "../../atoms/RowItem";

export default function TransactionPaymentInfo() {
  return (
    <div className="payment pt-10 pb-10">
      <h2 className="fw-bold text-xl color-palette-1 mb-20">
        Payment Informations
      </h2>
      <RowItem title="Your Account Name" value="Masayoshi Angga Zero" />
      <RowItem title="Type" value="Worldwide Transfer" />
      <RowItem title="Bank Name" value="Mandiri" />
      <RowItem title="Bank Account Name" value="PT Store GG Indonesia" />
      <RowItem title="Bank Number" value="1800 - 9090 - 2021" />
    </div>
  );
}
