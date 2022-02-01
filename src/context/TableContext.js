import createDataContext from './createDataContext'
import * as R from 'ramda'


const MSGS = {
    LOCATION: 'LOCATION',
    DATA: 'DATA',

}
const setData = dispatch => data => {
    dispatch({
        type: MSGS.DATA,
        data
    })
}
const setLocations = dispatch => location => {
    dispatch({
        type: MSGS.DATA,
        location
    })
}

const tableContext = (state, msg) => {
    switch (msg.type) {
        case MSGS.DATA: {
            const { data } = msg
            return { ...state, data }
        }
        case MSGS.LOCATION: {
            const { location } = msg
            return { ...state, location }
        }
        default:
            return state
    }
}
export const { Context, Provider } = createDataContext(
    tableContext,
    {
        setData,
        setLocations
    },
    {
        data: {
            incidents: null,
            uncommunicated_stores: null,
            perc_stores_without_incidents: null,
            table: [
                {
                    ID: "-",
                    Ciudad: "-",
                    Tipologia: "-",
                    Comunicacion: "",
                    Pasarela_Clima: "",
                    Alumbrado: "",
                    Clima: "",
                    Banderola: "",
                    Rotulo: "",
                    Consumo_Clima: "",
                    Confort: "",
                },
            ],
        },
        locations: '',

    }
)
