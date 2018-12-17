export default (value) => {
	return !!/^1[345678]\d{9}$/.test(value);
}