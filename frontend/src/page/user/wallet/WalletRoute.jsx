import { Route, useRouteMatch } from "react-router-dom";
import DepositPage from "./DepositPage.jsx";
import TransactionHistoryPage from "./TransactionHistoryPage.jsx";
import WalletPage from "./WalletPage.jsx";
import WithdrawPapge from "./WithdrawPage.jsx";

const WalletRoute = () => {
	const { path } = useRouteMatch();
	return (
		<>
			<Route path={`${path}/withdraw`}>
				<WithdrawPapge />
			</Route>
			<Route path={`${path}/deposit`}>
				<DepositPage />
			</Route>
			<Route path={`${path}/transactions`}>
				<TransactionHistoryPage />
			</Route>
			<Route exact path="/wallet">
				<WalletPage />
			</Route>
		</>
	);
};

export default WalletRoute;
