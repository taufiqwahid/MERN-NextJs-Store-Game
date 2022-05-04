import React from "react";
import cx from "classnames";
import Image from "next/image";
import Link from "next/link";

interface MenuSidebarProps {
  active?: boolean;
  title: string;
  src: string;
  href: string;
}
export default function MenuSidebarItem(props: MenuSidebarProps) {
  const { active, title, src, href } = props;
  let classMenu = cx({ item: true, "mb-30": true, active: active });

  return (
    <div className={classMenu}>
      <div className="me-3">
        <Image src={src} width={25} height={25} />
      </div>
      <p className="item-title m-0">
        <Link href={href}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
}
