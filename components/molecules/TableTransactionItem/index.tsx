import React from "react";

interface TransactionsItemProps {
  title: string;
  subtitle: string;
  item: string;
  price: string;
  status: string;
  src: string;
  detail: boolean;
}

export default function TableTransactionItems(
  props: Partial<TransactionsItemProps>,
) {
  const { title, subtitle, item, price, status, src, detail = false } = props;
  return (
    <>
      <tr className="align-middle">
        <th scope="row">
          <img
            className="float-start me-3 mb-lg-0 mb-3"
            src={src}
            width="80"
            height="60"
            alt=""
          />
          <div className="game-title-header">
            <p className="game-title fw-medium text-start color-palette-1 m-0">
              {title}
            </p>
            <p className="text-xs fw-normal text-start color-palette-2 m-0">
              {subtitle}
            </p>
          </div>
        </th>
        <td>
          <p className="fw-medium color-palette-1 m-0">{item}</p>
        </td>
        <td>
          <p className="fw-medium text-start color-palette-1 m-0">{price} </p>
        </td>
        <td>
          <div>
            <span
              className={`float-start icon-status ${status?.toLowerCase()}`}
            ></span>
            <p className="fw-medium text-start color-palette-1 m-0 position-relative">
              {status}
            </p>
          </div>
        </td>
        {detail && (
          <td>
            <a
              href="/member/transactions/detail"
              className="btn btn-status rounded-pill text-sm"
            >
              Details
            </a>
          </td>
        )}
      </tr>
    </>
  );
}
