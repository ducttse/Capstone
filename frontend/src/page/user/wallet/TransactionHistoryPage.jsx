import { Typography } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomSpin from "../../../common/CustomSpin.jsx";
import { loadTransactionAsync } from "../../../redux/wallet/actions/transactions.action.js";
import TransactionsTable from "./components/TransactionsTable.jsx";
const { Title } = Typography;

const TransactionHistoryPage = () => {
	const { data, loading, error, pagination } = useSelector(
		(state) => state.transactions
	);

	const dispatch = useDispatch();

	const dispatchLoadTrans = (page) => dispatch(loadTransactionAsync(10, page));

	const handleChangePage = (page) => {
		dispatchLoadTrans(page);
	};

	useEffect(() => {
		dispatchLoadTrans(1);
	}, []);
	return loading ? (
		<CustomSpin />
	) : (
		<>
			<Title level={5}>Lịch sử giao dịch</Title>
			<TransactionsTable
				data={data}
				pagination={pagination}
				onChange={handleChangePage}
			/>
		</>
	);
};

export default TransactionHistoryPage;
