import { fakeCallApi } from "../../fakeCallApi.js";
const mockedMajor = [
	{
		id: 1,
		name: "test",
		subjects: [
			{
				id: 1,
				name: "test subject"
			},
			{
				id: 2,
				name: "test subject 2"
			}
		]
	},
	{
		id: 2,
		name: "test 2",
		subjects: [
			{
				id: 6,
				name: "test subject"
			},
			{
				id: 8,
				name: "test subject 2"
			}
		]
	}
];

export const getMajors = async () => {
	await fakeCallApi(1000);
	return mockedMajor;
};
