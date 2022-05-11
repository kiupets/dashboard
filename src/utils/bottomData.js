import * as R from 'ramda'
export const bottomTable = (data) => {
    const incidentsDataReduce = data?.map(item =>
        R.values(R.pick(
            [
                "Comunicacion",
                "Pasarela_Clima",
                "Alumbrado",
                "Clima",
                "Banderola",
                "Rotulo",
                "Consumo_Clima",
                "Confort"], item))
    )

    const totalIncidencias = incidentsDataReduce?.map(item =>
        item?.map(ite => ite === false ? 1 : ite === true ? 0 : '')
    )
    const totalStores = incidentsDataReduce?.map(item =>
        item?.map(ite => ite === false ? 1 : ite === true ? 1 : '')
    )

    const mapI = R.addIndex(R.map);
    const zipNReduce = R.curry(function (fn, lists) {
        return mapI(function (_, n) {
            return fn(R.pluck(n, lists));
        }, R.head(lists));
    });

    const sumByIndex = zipNReduce(R.sum);
    const totalInci = sumByIndex(totalIncidencias)
    const totalScore = sumByIndex(totalStores)
    const f = (a, b) => {
        return ((a / b) * 100).toFixed(2
            )
    }
    const percentage = R.zipWith(f, totalInci, totalScore)

    //para modificar cuando este toda la data
    const finalPercentage = percentage.map(p => {
        return p === 'NaN' ? 0 : p
    })

    const inciArray = ['Total Incidencias', 'Total Stores', '% Incidencias',]
    //AGREGAR DOS 2 COLUMNAS EN CADA R.FLATTEN ('', '') PARA AHORRO Y DETECTED SCORE
    const excelArray = R.zip(inciArray, [R.flatten([totalInci, '', '', ]), R.flatten([totalScore, '', '', ]), R.flatten([finalPercentage, '', '', ])])

    const superExcelArray = excelArray.map(arr => R.flatten(arr))
    return superExcelArray
}