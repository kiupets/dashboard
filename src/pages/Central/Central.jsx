import React, { useEffect, useState } from "react";
import { Table,BottomTable,Headers } from "../../components/";
import { Span } from "../../components/shared";
import { Dots } from "@dexma/ui-components";
import * as R from 'ramda'
import { api } from "../../api/api";
import "./Central.css";
// import data1 from '../../data.json'


const Central = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    api.getDataTable().then((res) => setData(res));
  }, []);

  const orderData = (e) => {
    const key = e.target.innerText;
    key === "Ciudad" || key === "Tipologia"
      ? setData(R.sort(R.ascend(R.prop(key)), data))
      : setData(R.sort(R.descend(R.prop(key.replace(" ", "_"))), data));
  };

  return (
    <div className="central">
      {data.length !== 0 ? (
        <>
          <div className="header-table">
            <Span
              style={{ fontSize: "18px", fontWeight: "bold" }}
              label="Estados por store"
            />
            <div className="dots">
              <Dots steps={3} size={2} />
            </div>
          </div>
          <div className="header-container">
            <Headers orderData={orderData} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="table-scroll">
              <Table data={data} />
            </div>
            <div className="bottom-table">
              <BottomTable tableInfo={data} />
            </div>
          </div>

        </>
      ) : (
        <Dots steps={3} size={10} />
      )}
    </div>
  );
};

export default Central;
