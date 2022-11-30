import { Descriptions } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomSpin from "../../../common/CustomSpin.jsx";
import { loadWalletAsync } from "../../../redux/wallet/actions/wallet.action.js";

const WalletPage = () => {
	const { data, loading, error } = useSelector((state) => state.wallet);
	const dispatch = useDispatch();

	const dispatchLoadWallet = () => dispatch(loadWalletAsync());

	useEffect(() => {
		dispatchLoadWallet();
	}, []);

	return loading ? (
		<CustomSpin />
	) : (
		<Descriptions title="Thông tin ví" bordered>
			<Descriptions.Item label="Số dư">{data.balance} VND</Descriptions.Item>
			<Descriptions.Item label="Số dư khả dụng">
				{data.availableBalance} VND
			</Descriptions.Item>
		</Descriptions>
	);
};

export default WalletPage;
