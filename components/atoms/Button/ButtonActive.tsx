import classNames from "classnames";
import Link from "next/link";
import React from "react";
interface ButtonActiveProps {
  title: string;
  active?: boolean;
}
export default function ButtonActive(props: ButtonActiveProps) {
  const { title, active } = props;
  const classButton = classNames({
    btn: true,
    "btn-status": true,
    "rounded-pill": true,
    "text-sm": true,
    " me-3": true,
    "btn-active": active,
  });
  return (
    <Link href="#">
      <a data-filter="*" className={classButton}>
        {title}
      </a>
    </Link>
  );
}
