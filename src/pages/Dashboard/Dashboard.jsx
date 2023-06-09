import React, { useEffect, useState, useRef } from "react";
import { DotTable } from "../../components/shared/dotTable/DotTable";
import { Dots, } from "@dexma/ui-components";
import { colorScale, headersData, sortHeaders } from "../../utils";
import * as R from "ramda";
import { ExcelTable } from "../../utils/exelData";
import { useSelector } from "react-redux";
import './Dashboard.css'
import { bottomTable } from "../../utils/bottomData";
import { Top } from '../Top/Top'
import downExe from './downExe.png'
import { dummyData } from "../../utils";

console.log(dummyData)

const even = (n) => n % 2 === 0;
export const Dashboard = () => {

    const { table, incidents,
        uncommunicated_stores,
        perc_stores_without_incidents } = useSelector((state) => state.table.data);
    const { total_locations, location_tags } = useSelector((state) => state.table)

    const [dataSort, setDataSort] = useState(dummyData);

    useEffect(() => {
        table?.length !== 0 && setDataSort(dummyData);
    }, [table]);

    const tableDataApi = R.map(table => R.values(R.pick(
        [
            "ID",
            "Ciudad",
            "Tipologia",
            "Comunicacion",
            "Pasarela_Clima",
            "Alumbrado",
            "Clima",
            "Banderola",
            "Rotulo",
            "Consumo_Clima",
            "Confort",
            "Total_Anomalias",
            "Impacto_Anomalias",
            "Detected_Score",
            "Ahorro_Potencial",

        ], table)),
        dataSort.map(item => {

            return ({ ...item, Total_Anomalias: item.Total_Anomalías, Impacto_Anomalias: item.Impacto_Anomalias, Ahorro_Potencial: item.Ahorro_Potencial, })
        }))
    // Total_Anomalias: item.Total_Anomalias, Impacto_Anomalias: item.Impacto_Anomalias
    // Detected_Score: item.Detected_Score, Ahorro_Potencial: item.Ahorro_Potencial, Total_Anomalias: item.Total_Anomalias, Impacto_Anomalias: item.Impacto_Anomalias,
    const headers = headersData.map(header => {
        return <div
            onClick={(e) => setDataSort(sortHeaders(e, dataSort))}
            className={header === 'Impacto Anomalías' ? 'headers' : 'headers'}>
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
                            : row === 0
                                ? '-'
                                : row === false
                                    ? <DotTable className='red' />
                                    : col === 12 || col === 14
                                        ? `${row}€`
                                        : col === 13
                                            ? row
                                            : col === 14
                                                ? `${row}€`
                                                : row.length !== 0
                                                    ? row
                                                    : '-'
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
                        <span className="span-estado-store"></span>
                        <div
                            className="span-download"
                            onClick={ExcelTable(
                                table,
                                [location_tags, total_locations, uncommunicated_stores,
                                    incidents,
                                    `${perc_stores_without_incidents}%`]
                            )
                            }
                        >
                            <img className="img-download" src={downExe} alt="excel" />
                        </div>
                    </div>
                    {/* ///////////HEADERS-GRID/////////////////////////////// */}
                    <div className="headers-magic">
                        <div className="headers-super-scroll">
                            <div className='grid-container-headers'>
                                {headers}
                            </div>
                        </div>
                        {/* ///////////CENTRAL-TABLE-GRID/////////////////////////////// */}

                        {/* para que se vean los puntos sino carga la tabla inicial en redux */}
                        {dummyData
                            ? <div style={{ position: 'relative', overflowY: 'auto', height: '650px' }}>
                                <div className='grid-container'>
                                    {info}
                                </div>

                                <div className="bottom-bottom-grid">
                                    {table.length !== 0 ?
                                        <div className="bottom-grid-container" >
                                            {
                                                bottomTable(table).map((column, i) => column.map((row, j) => {
                                                    const colorValue = i === 2 && row !== '% Incidencias' && row.length !== 0
                                                    return (

                                                        <div
                                                            className={row === 'Total Incidencias' ||
                                                                row === 'Total Stores' ||
                                                                row === '% Incidencias' ? 'bottom-bottom-grid-headers' : ''}
                                                            style={{
                                                                zIndex: 99,
                                                                backgroundColor: `${colorValue
                                                                    ? `white`
                                                                    : i === 1 ? '#f5f5f5'
                                                                        : 'white'}`
                                                            }}>
                                                            <div
                                                                style={{
                                                                    zIndex: 99,
                                                                    backgroundColor: `${colorValue
                                                                        ? `rgba(255, 99, 71,${(row / 100).toFixed(2)} )`
                                                                        : i === 1 ? '#f5f5f5'
                                                                            : 'white'}`
                                                                }} className={
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


                            : <div className="loading-container">
                                <Dots steps="3" size="5" />
                            </div>}

                    </div>


                </div>
                {/* ///////////BOTTOM GRID/////////////////////////////// */}

            </div>
        </div>

    )
};