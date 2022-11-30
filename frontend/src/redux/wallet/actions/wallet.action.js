import {
	LOAD_WALLET,
	LOAD_WALLET_ASYNC
} from "../constants/wallet.constant.js";

export const loadWalletAsync = () => {
	return {
		type: LOAD_WALLET_ASYNC
	};
};

export const loadWallet = (payload) => {
	return {
		type: LOAD_WALLET,
		payload
	};
};
