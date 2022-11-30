import axios from "axios";

const url = "http://localhost:8080/";
// const url = "https://momo-payment-app.vercel.app/";

export const checkPayment = async (orderId) => {
	const queryParams = {
		orderId: orderId,
		requestId: orderId
	};
	try {
		const { data } = await axios.get(`${url}check`, {
			params: queryParams
		});
		console.log(data);
		return data;
	} catch (err) {
		console.log(err);
	}
};

export const createPayment = async (orderInfo, amount) => {
	try {
		const res = await axios.get(
			`${url}?orderInfo=${orderInfo}&amount=${amount}`
		);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};
