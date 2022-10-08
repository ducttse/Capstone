export const fakeCallApi = async (time) => {
	console.log("Call API");
	await new Promise((resolve) => setTimeout(resolve, time));
	console.log("Call API success after " + time);
};
