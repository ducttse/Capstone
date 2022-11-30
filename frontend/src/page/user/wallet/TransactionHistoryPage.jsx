import { Typography } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomSpin from "../../../common/CustomSpin.jsx";
import { loadTransactionAsync } from "../../../redux/wallet/actions/transactions.action.js";
import TransactionsTable from "./components/TransactionsTable.jsx";
const { Title } = Typography;

const TransactionHistoryPage = () => {
	const { data, loading, error } = useSelector((state) => state.transactions);
	const dispatch = useDispatch();

	const dispatchLoadTrans = () => dispatch(loadTransactionAsync());

	useEffect(() => {
		dispatchLoadTrans();
	}, []);
	return loading ? (
		<CustomSpin />
	) : (
		<>
			<Title level={5}>Lịch sử giao dịch</Title>
			<TransactionsTable data={data} />
		</>
	);
};

export default TransactionHistoryPage;