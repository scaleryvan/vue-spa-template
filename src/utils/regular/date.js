export default (value) => {
	return !!/^\d{4}[/-]\d{1,2}[/-]\d{1,2}$/.test(value);
}