import * as R from 'ramda';
export const sortHeaders = (e, data) => {
	const key = e.target.innerText;
	const _key = key.replace(' ', '_');
	return _key === 'Comunicación' ||
	_key === 'Pasarela_Clima' ||
	_key === 'Alumbrado' ||
	_key === 'Clima' ||
	_key === 'Banderola' ||
	_key === 'Rótulo' ||
	_key === 'Consumo_Clima' ||
	_key === 'Confort'
		? data
				.filter((e) => {
					return e[_key] !== 0;
				})
				.sort((a, b) => {
					return a[_key] - b[_key];
				})
				.concat(data.filter((e) => e[_key] === 0))
		: _key === 'Tipología'
			? R.sort(R.ascend(R.prop(key.replace(' ', '_'))), data)
			: R.sort(R.descend(R.prop(key.replace(' ', '_'))), data);
};
