const { default: axios } = require("axios");

const checkPayment = async (orderId) => {
	const queryParams = {
		orderId: orderId,
		requestId: orderId
	};
	const { data } = await axios.get(
		"https://momo-payment-app.vercel.app/check",
		{
			params: queryParams
		}
	);
	console.log(data);
};
