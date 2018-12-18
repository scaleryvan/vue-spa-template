export default (value) => {
	return !!/^1[3456789]\d{9}$/.test(value);
}