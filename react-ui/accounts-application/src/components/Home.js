import React, { lazy, Suspense } from "react";
import { useData } from "../utils/Data";

const SpentMoney = lazy(() => import("./SpentMoney"));
const BasicRating = lazy(() => import("./charts/BasicRating"));
const EarningExpenses = lazy(() => import("./EarningExpenses"));
const RecentTransactionsList = lazy(() => import("./RecentTransactionsList"));


function Home() {
  const { getDataCache } = useData();
  const Data = getDataCache();

  return (
    <div className="container-md">
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button className="nav-link active" id="nav-dashboard-tab" data-bs-toggle="tab" data-bs-target="#nav-dashboard" type="button" role="tab" aria-controls="nav-dashboard" aria-selected="true">Dashboard</button>
          <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Spending money</button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-dashboard" role="tabpanel" aria-labelledby="nav-dashboard-tab">
          <div>
            <div className="row">
              <div className="col-sm-4">
                <Suspense fallback={<div>Spent money is loading please wait...</div>} >
                  <SpentMoney />
                </Suspense>
              </div>
              <div className="col-sm-8">
                <Suspense fallback={<div>Earning and expenses is loading please wait...</div>} >
                  <EarningExpenses />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
          <div>
            <div className="row">
              <div className="col-sm">
                <Suspense fallback={<div>Recent transactions list is loading please wait...</div>} >
                  <RecentTransactionsList />
                </Suspense>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-sm">
                <Suspense fallback={<div>Rating is loading please wait...</div>} >
                  <BasicRating spendingHabits={Data.rating} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;