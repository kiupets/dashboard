import React from "react";
import {Dot} from '../../components/shared/'
import {Widget} from "../../components/";
import './Top.css'

const Top = () => {

    const widgetData = [
        {
            number: "123",
            string: "1dashboard",
            icon: <Dot style={{ backgroundColor: "red" }} />,
        },
        {
            number: "123",
            string: "1dashboard",
            icon: <Dot style={{ backgroundColor: "red" }} />,
        },
        { number: "123", string: "1dashboard" },
        { number: "123", string: "1dashboard" },
        { number: "123", string: "1dashboard" },

    ];
    const widgets = widgetData.map((w) => (
        <Widget number={w.number} string={w.string} icon={w.icon} />
    ));
    return (
        <div className='top'>
            {widgets}
        </div>
    )
}

export default Top