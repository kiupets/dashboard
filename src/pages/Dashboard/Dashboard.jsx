import React, { useEffect, useState } from "react";
import { DotTable } from "../../components/shared/dotTable/DotTable";
import { Dots } from "@dexma/ui-components";
import { colorScale, headersData, sortHeaders } from "../../utils";
import * as R from "ramda";
import { ExcelTable } from "../../utils/exelData";
import { useSelector } from "react-redux";
import './Dashboard.css'
import { bottomTable } from "../../utils/bottomData";
import { Top } from '../Top/Top'

const even = (n) => n % 2 === 0;
export const Dashboard = () => {
    const { table, incidents,
        uncommunicated_stores,
        perc_stores_without_incidents } = useSelector((state) => state.table.data);
    const { total_locations, location_tags } = useSelector((state) => state.table)

    const [dataSort, setDataSort] = useState(table);

    useEffect(() => {
        table?.length !== 0 && setDataSort(table);
    }, [table]);

    const tableDataApi = R.map(table => R.values(table),
        dataSort.map(item => ({ ...item, Score:item.Detected_Score, Ahorro:item.Ahorro_Potencial  })))

    const headers = headersData.map(header => {
        return <div
            onClick={(e) => setDataSort(sortHeaders(e, dataSort))}
            className={header === 'Impacto Anomalías' ? 'header-impacto' : 'headers'}>
            <div className="header-in">
                {header}
            </div>

        </div>
    })

    const info = tableDataApi.map((item, i) => {
        return item.map((row, col) => {
            return (
                <div className="table-info"
                    style={{ backgroundColor: `${even(i) ? '#f5f5f5' : 'white'}` }}>
                    <div className="table-data"
                        style={{
                            backgroundColor: `${col === 13
                                ? colorScale(row)
                                : even(i) ? '#f5f5f5' : 'white'}`,
                            textDecoration: `${col === 0 ? 'underline' : 'none'}`
                        }}>

                        {row === true
                        ? <DotTable className='green' />
                        : row === false
                            ? <DotTable className='red' />
                            : col === 11 || col === 12
                            ? '-'
                            : col === 13    
                            ? row     
                            : col === 14
                            ? `${row}€`       
                            : row.length !== 0 
                                ? row
                                :'-'
                        }
                    </div>
                </div>
            )

        }
        )
    })
    return (

        <div className="dashboad-container" >
            <div style={{ backgroundColor: '#F1F2F3', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Top />
            </div>
            <div className="bottom">
                <div className="top-bottom">
                    <div className="headers-top">
                        <span className="span-estado-store">Estados por store</span>
                        <span className="span-estado-store"
                            onClick={ExcelTable(
                                table,
                                [location_tags, total_locations, 'tags', uncommunicated_stores,
                                    incidents,
                                    `${perc_stores_without_incidents}%`]
                            )
                            }>
                            ...
                        </span>
                    </div>

                    {/* ///////////HEADERS-GRID/////////////////////////////// */}

                    <div className="headers-magic">
                        <div className="headers-super-scroll">
                            <div className='grid-container-headers'>
                                {headers}
                            </div>
                        </div>
                        {/* ///////////CENTRAL-TABLE-GRID/////////////////////////////// */}
                        <div className="table-container">
                            {/* para que se vean los puntos sino carga la tabla inicial en redux */}
                            {table[0].ID !== '-'
                                ? <div className='grid-container'>
                                    {info}
                                </div>
                                : <div className="loading-container">
                                    <Dots steps="3" size="5" />
                                </div>}
                        </div>
                    </div>

                    {/* ///////////BOTTOM GRID/////////////////////////////// */}
                    <div className="bottom-bottom-grid">

                        {table?.length !== 0
                            ? <div className="bottom-grid-container">

                                {
                                    bottomTable(table).map((column, i) => column.map((row, j) => {
                                        const colorValue = i === 2 && row !== '% Incidencias' && row.length !== 0
                                        return (
                                            <div

                                                className={row === 'Total Incidencias' ||
                                                    row === 'Total Stores' ||
                                                    row === '% Incidencias' ? 'bottom-bottom-grid-headers' : ''}
                                                style={{
                                                    backgroundColor: `${colorValue
                                                        ? `rgba(255, 99, 71,${(row / 100).toFixed(2)} )`
                                                        : i === 1 ? '#f5f5f5'
                                                            : 'white'}`
                                                }}>

                                                <div className={
                                                    row === 'Total Incidencias' ||
                                                        row === 'Total Stores' ||
                                                        row === '% Incidencias' ? 'table-data-bottom-headers' : 'table-data-bottom-headers2'
                                                }>
                                                    {i === 2
                                                        ? `${row === '% Incidencias'
                                                            ? '% Incidencias'
                                                            : row.length !== 0
                                                                ? `${row}%`
                                                                : '-'}`
                                                        : (i === 1 || i === 0) && row.length !== 0
                                                            ? row
                                                            : '-'}
                                                </div>
                                            </div>
                                        )
                                    }))
                                }
                            </div>
                            : <div className="loading-container">
                                <Dots steps="3" size="5" />
                            </div>}
                    </div>
                </div>
            </div>

        </div >
    )
};
