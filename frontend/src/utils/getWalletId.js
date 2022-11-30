export const getWalletId = () => JSON.parse(localStorage.wallet).id;

export const getWalletAvaiableBalance = () =>
	JSON.parse(localStorage.wallet).availableBalance;
