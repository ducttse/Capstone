import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { checkPayment } from "../../../api/momo/index.js";
import { markSuccedPayment } from "../../../api/wallet/index.js";

const PaymentConfirm = () => {
	const history = useHistory();

	const handleConfirm = async (id) => {
		const { orderId, amount, resultCode } = await checkPayment(id);
		await markSuccedPayment(orderId, amount, resultCode);
	};

	useEffect(() => {
		const id = localStorage.getItem("orderId");
		console.log(id);
		if (id) {
			handleConfirm(id);
		}
		history.push("/wallet");
		// handleConfirm();
	}, []);

	return <>test</>;
};

export default PaymentConfirm;
