import React from "react";
import TableTransactionItems from "../../molecules/TableTransactionItem";
import TopUpCategoriesItem from "../../molecules/TopUpCategoriesItem";

export default function ContentOverview() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              <TopUpCategoriesItem
                title="Desktop"
                totalSpent="Rp 18.000.500"
                src="/icon/gamedesktop.svg"
              />
              <TopUpCategoriesItem
                title="Mobile"
                totalSpent="Rp 8.455.000"
                src="/icon/gamemobile.svg"
              />
              <TopUpCategoriesItem
                title="Others"
                totalSpent="Rp 18.000.500"
                src="/icon/gamedesktop.svg"
              />
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
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <TableTransactionItems
                  title="Mobile Legends: The New Battle 2021"
                  subtitle="desktop"
                  item="200 Gold"
                  price="Rp 290.000"
                  status="pending"
                  src="/img/overview-1.png"
                />
                <TableTransactionItems
                  title="Call of Duty:Modern"
                  subtitle="desktop"
                  item="200 Gold"
                  price="Rp 290.000"
                  status="Success"
                  src="/img/overview-2.png"
                />
                <TableTransactionItems
                  title="Mobile Legends: The New Battle 2021"
                  subtitle="desktop"
                  item="200 Gold"
                  price="Rp 290.000"
                  status="Failed"
                  src="/img/overview-3.png"
                />
                <TableTransactionItems
                  title="The Royal Game"
                  subtitle="desktop"
                  item="200 Gold"
                  price="Rp 290.000"
                  status="pending"
                  src="/img/overview-4.png"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
