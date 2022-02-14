import * as R from 'ramda'

export const sortHeaders = (e, data) => {
    const key = e.target.innerText;
    // return key === "Ciudad" || key === "Tipologia"
    // ? R.sort(R.ascend(R.prop(key)), data)
    return R.sort(R.ascend(R.prop(key.replace(" ", "_"))), data)
};