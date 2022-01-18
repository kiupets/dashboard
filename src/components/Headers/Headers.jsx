import React from 'react'
import * as R from 'ramda'
import { Span, TableRow, Dot, TableData, TableHeader } from "../shared/";

import { headersData } from './headersData';
// import { Span } from '../shared/';
// import '../table/Table.css'
import './headers.css'

// const orderData = (e) => {
//     const key = e.target.innerText;
//     key === "Ciudad" || key === "Tipologia"
//         ? setDataSort(R.sort(R.ascend(R.prop(key)), dataSort))
//         : setDataSort(R.sort(R.descend(R.prop(key.replace(" ", "_"))), dataSort));
// };

export const Headers = () => {

    // const headers = headersData.map(header => <div className='header'>{header}</div>)

    return (
        <div className='div-container'>
            <table className="table">
                <thead>
                    <TableRow style={{ width: "100%" }}>
                        {headersData?.map((header, i) => (
                            <TableHeader key={i}>
                                <Span
                                    style={{ cursor: "pointer" }}
                                    // onClick={orderData}
                                    className={`span-header  ${header === "ID" ? "index" : ""}`}
                                    label={header}
                                />
                            </TableHeader>
                        ))}
                    </TableRow>
                </thead>
            </table>
        </div>







        // <div className='headers'>
        //     {headers}
        // </div>
    )
}
