
// export const headers = [
//     'Id',
//     'Ciudad',
//     'Tipología',
//     'Comunicación',
//     'Pasarela clima',
//     'Alumbrado',
//     'Clima',
//     'Banderola',
//     'Rótulo',
//     'Consumo Clima',
//     'Confort',
//     'Anomalias',
//     'Impacto anomalias',
//     'Detect score',
//     'Ahorro Potencial'


// ]

export const headers = (data) => data[0].keys()
export const sortBy = (key) => (a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
};

export const orderBy = (type, data) => {
    return data.sort(sortBy(type));
}
