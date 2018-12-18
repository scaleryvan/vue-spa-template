export default (value) => {
	return !!/^[1-9][0-9]{4,10}$/.test(value);
}