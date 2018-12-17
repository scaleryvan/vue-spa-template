export default (value) => {
	return !!/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(value);
}