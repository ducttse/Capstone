import axios from "axios";
import cryptoJs from "crypto-js";

const secretkey = process.env.REACT_APP_MOMO_SECRET_KEY;
const accessKey = process.env.REACT_APP_MOMO_ACCESS_KEY;
const partnerCode = process.env.REACT_APP_MOMO_PARTNER_CODE;

const createSignature = ({
	accessKey,
	amount,
	extraData,
	ipnUrl,
	orderId,
	orderInfo,
	partnerCode,
	redirectUrl,
	requestId,
	requestType
}) => {
	const raw =
		"accessKey=" +
		accessKey +
		"&amount=" +
		amount +
		"&extraData=" +
		extraData +
		"&ipnUrl=" +
		ipnUrl +
		"&orderId=" +
		orderId +
		"&orderInfo=" +
		orderInfo +
		"&partnerCode=" +
		partnerCode +
		"&redirectUrl=" +
		redirectUrl +
		"&requestId=" +
		requestId +
		"&requestType=" +
		requestType;

	return cryptoJs.HmacSHA256(raw, secretkey).toString(cryptoJs.enc.Hex);
};

export const createPayment = async (orderInfo, amount) => {
	const url = "https://momo-payment-app.vercel.app/";
	try {
		const res = await axios.get(
			`${url}?orderInfo=${orderInfo}&amount=${amount}`
		);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};
