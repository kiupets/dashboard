import * as R from 'ramda';
export const sortHeaders = (e, data) => {
	const key = e.target.innerText;
	const noAccentKey = key.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
	const _key = noAccentKey.replace(' ', '_');
	return _key === 'Comunicacion' ||
	_key === 'Pasarela_Clima' ||
	_key === 'Alumbrado' ||
	_key === 'Clima' ||
	_key === 'Banderola' ||
	_key === 'Rotulo' ||
	_key === 'Consumo_Clima' ||
	_key === 'Confort'
		? data
				.filter((e) => {
					return e[_key] === 0;
				})
				.concat(data.filter((e) => e[_key] !== 0))
				.sort((a, b) => {
					return a[_key] - b[_key];
				})
		: R.sort(R.descend(R.prop(_key.replace(' ', '_'))), data);
};
