import React from "react";
interface RowItemProps {
  title: string;
  value: string;
}
export default function RowItem(props: RowItemProps) {
  const { title, value } = props;
  return (
    <p
      className={`text-lg  mb-20 ${
        title == "Total" ? "color-palette-4" : "color-palette-1"
      }`}
    >
      {title} <span className="purchase-details">{value}</span>
    </p>
  );
}
