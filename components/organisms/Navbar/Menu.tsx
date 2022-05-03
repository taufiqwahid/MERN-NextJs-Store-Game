import cx from "classnames";
import Link from "next/link";
import React from "react";

interface MenuProps {
  title: string;
  active?: boolean;
  href: string;
}

export default function Menu(props: Partial<MenuProps>) {
  const { title, active, href = "/" } = props;
  const classTitle = cx({ "nav-link": true, active: active });
  return (
    <li className="nav-item my-auto">
      <Link href={href}>
        <a className="nav-link active" aria-current="page" href="">
          {title}
        </a>
      </Link>
    </li>
  );
}
