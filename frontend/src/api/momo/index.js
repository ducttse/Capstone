import axios from "axios";

// const url = "http://localhost:8080/";
const url = process.env.REACT_APP_MOMO_PROXY_ENDPOINT;

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
