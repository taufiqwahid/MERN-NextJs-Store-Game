import React from "react";
import ButtonActive from "../../../components/atoms/Button/ButtonActive";
import TableTransactionItems from "../../../components/molecules/TableTransactionItem";
import Sidebar from "../../../components/organisms/Sidebar";

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu="Transactions" />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">
            My Transactions
          </h2>
          <div className="mb-30">
            <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
            <h3 className="text-5xl fw-medium color-palette-1">
              Rp 4.518.000.500
            </h3>
          </div>
          <div className="row mt-30 mb-20">
            <div className="col-lg-12 col-12 main-content">
              <div id="list_status_title">
                <ButtonActive title="All Trx" active />
                <ButtonActive title="Success" />
                <ButtonActive title="Pending" />
                <ButtonActive title="Failed" />
              </div>
            </div>
          </div>
          <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">
              Latest Transactions
            </p>
            <div className="main-content main-content-table overflow-auto">
              <table className="table table-borderless">
                <thead>
                  <tr className="color-palette-1">
                    <th className="" scope="col">
                      Game
                    </th>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody id="list_status_item">
                  <TableTransactionItems
                    title="Mobile Legends: The New Battle 2021"
                    subtitle="desktop"
                    item="200 Gold"
                    price="Rp 290.000"
                    status="pending"
                    src="/img/overview-1.png"
                    detail={true}
                  />
                  <TableTransactionItems
                    title="Call of Duty:Modern"
                    subtitle="desktop"
                    item="200 Gold"
                    price="Rp 290.000"
                    status="Success"
                    src="/img/overview-2.png"
                    detail={true}
                  />
                  <TableTransactionItems
                    title="Mobile Legends: The New Battle 2021"
                    subtitle="desktop"
                    item="200 Gold"
                    price="Rp 290.000"
                    status="Failed"
                    src="/img/overview-3.png"
                    detail={true}
                  />
                  <TableTransactionItems
                    title="The Royal Game"
                    subtitle="desktop"
                    item="200 Gold"
                    price="Rp 290.000"
                    status="pending"
                    src="/img/overview-4.png"
                    detail={true}
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
