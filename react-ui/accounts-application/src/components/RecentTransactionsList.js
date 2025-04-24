import React from 'react'
import Transaction from './Transaction';
import { useData } from '../utils/Data';

function RecentTransactionsList({ data }) {
    const { getDataCache } = useData();
    const Data = getDataCache();

    const content = Data.spentMoneyByCategoriesList.map((data) =>
        <Transaction srno={data.id} description={data.categories} amount={data.spentMoney} />
    );

    return (
        <div class="container">
            <div className="row text-white bg-secondary">
                <div className="col-2 border border-white">Sr. No.</div>
                <div className="col-6 border border-white">Description</div>
                <div className="col-4 border border-white">Amount</div>
            </div>
            {content}
        </div>
    );
};
export default RecentTransactionsList;