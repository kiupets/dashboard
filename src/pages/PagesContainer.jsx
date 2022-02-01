import React, { useContext, useEffect } from 'react';
import { Context } from '../context/tableContext';
import { Top } from './Top/Top';
import { Bottom } from './bottom/Bottom';
import { api } from '../api/api';
import './line.css'


export const PagesContainer = () => {
    const { state, setData } = useContext(Context);
    const { data } = state

    useEffect(() => {
        api.getDataTable().then((res) => setData(res));
    }, []);


    return (
        <div className="App">
            <Top />
            <div className="line"> </div>
            <Bottom />
        </div>
    );







};
