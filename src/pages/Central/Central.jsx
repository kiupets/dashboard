import React, { useEffect, useState } from "react";
import { Table } from "../../components/";
import { BottomTable } from "../../components/BottomTable/BottomTable";
import { Span } from "../../components/shared";
import { Dots } from "@dexma/ui-components";
import { api } from "../../api/api";
import "./Central.css";

const Central = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    api.getDataTable().then((res) => setData(res));
  }, []);
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
          <Table data={data} />
          <BottomTable tableInfo={data} />
        </>
      ) : (
        <Dots steps={3} size={10} />
      )}
    </div>
  );
};

export default Central;
