import { fakeCallApi } from "./fakeCallApi.js";

const questions = [
	{
		id: "1",
		title: "Lorem ipsum dolor sit amet ",
		shortContent:
			"Proin rutrum metus at massa tincidunt ultricies. Mauris laoreet sagittis sodales.",
		content: `<p class="ql-align-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p class="ql-align-justify">Aliquam vel sem in diam dictum auctor consequat non neque. Fusce mollis consectetur ligula, ac euismod elit finibus fnsalknklad eu. <strong>Mauris nunc turpis</strong>, facilisis quis purus non, sollicitudin cursus enim. Integer non tortor bibendum, euismod orci nec, fermentum urna.</p><ul><li class="ql-align-justify">Proin rutrum metus at massa tincidunt ultricies. Mauris laoreet sagittis sodales. Nunc ultricies nulla sed dolor aliquam ultrices. Vivamus at hendrerit augue, ut dignissim tortor. Aenean enim neque, vehicula sed dignissim sit amet, consectetur ac nisi. Cras orci nisl, viverra id augue at, pellentesque tempor odio. Duis cursus ac lectus vitae ultricies. Mauris at fermentum nulla.</li><li class="ql-align-justify">Nullam in laoreet eros, sollicitudin euismod augue. Quisque ante ex, lobortis consectetur lectus ac, varius condimentum sem. Vestibulum elementum sapien ut vehicula cursus. Cras in tincidunt diam, id euismod purus. Suspendisse sit amet nulla hendrerit ex ultrices accumsan a vel magna. In metus diam, feugiat pretium hendrerit non, lobortis vitae lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam quis sollicitudin eros, vitae condimentum nulla. Mauris cursus bibendum nunc, sit amet egestas magna lobortis sodales. </li></ul><p class="ql-align-justify">Nam ullamcorper finibus ligula vitae tincidunt. Donec sed nisi ac neque elementum scelerisque. Vestibulum ante odio, tempus eu mollis aliquet, porttitor eu enim. Etiam tincidunt ornare massa, non tempor est vulputate ut. Phasellus ut felis vel orci semper lacinia.</p><p><br></p>`,
		user: {
			id: "1",
			name: "Từ Trọng Đức"
		},
		createdTime: "2022-09-08 03:13:10",
		comments: [
			{
				id: "1",
				name: "Vũ Thị Thuỳ Dương",
				createdTime: "2022-09-08 06:46:10",
				avatar: "",
				content: `"<p><span style="color: rgb(252, 229, 102);">auris nunc turpis, facilisis quis purus non, sollicitudin cursus enim. Integer non tortor bibendum, euismod orci nec, fermentum urna.</span></p>"`
			},
			{
				id: "2",
				name: "Trần Bảo Long",
				createdTime: "2022-09-08 06:46:10",
				avatar: "",
				content: `"<p><span style="color: rgb(252, 229, 102);">auris nunc turpis, facilisis quis purus non, sollicitudin cursus enim. Integer non tortor bibendum, euismod orci nec, fermentum urna.</span></p>"`
			}
		]
	},
	{
		id: "2",
		title: "Câu hỏi về cách mạng tháng ",
		shortContent:
			"Proin rutrum metus at massa tincidunt ultricies. Mauris laoreet sagittis sodales.",
		content: "Cách mạng tháng 8 xảy ra lúc nào, có ý nghĩa là gì?",
		user: {
			id: "1",
			name: "Từ Trọng Đức"
		},
		createdTime: "2022-09-08 03:13:10",
		comments: [
			{
				id: "1",
				name: "Vũ Thị Thuỳ Dương",
				createdTime: "2022-09-08 06:46:10",
				avatar: "",
				content: `"<p><span style="color: rgb(252, 229, 102);">auris nunc turpis, facilisis quis purus non, sollicitudin cursus enim. Integer non tortor bibendum, euismod orci nec, fermentum urna.</span></p>"`
			},
			{
				id: "2",
				name: "Trần Bảo Long",
				createdTime: "2022-09-08 06:46:10",
				avatar: "",
				content: `"<p><span style="color: rgb(252, 229, 102);">auris nunc turpis, facilisis quis purus non, sollicitudin cursus enim. Integer non tortor bibendum, euismod orci nec, fermentum urna.</span></p>"`
			}
		]
	},
	{
		id: "3",
		title: "Câu hỏi về cách mạng tháng ",
		shortContent:
			"Proin rutrum metus at massa tincidunt ultricies. Mauris laoreet sagittis sodales.",
		content: "Cách mạng tháng 8 xảy ra lúc nào, có ý nghĩa là gì?",
		user: {
			id: "1",
			name: "Từ Trọng Đức"
		},
		createdTime: "2022-09-08 03:13:10",
		comments: [
			{
				id: "1",
				name: "Vũ Thị Thuỳ Dương",
				createdTime: "2022-09-08 06:46:10",
				avatar: "",
				content: `"<p><span style="color: rgb(252, 229, 102);">auris nunc turpis, facilisis quis purus non, sollicitudin cursus enim. Integer non tortor bibendum, euismod orci nec, fermentum urna.</span></p>"`
			},
			{
				id: "2",
				name: "Trần Bảo Long",
				createdTime: "2022-09-08 06:46:10",
				avatar: "",
				content: `"<p><span style="color: rgb(252, 229, 102);">auris nunc turpis, facilisis quis purus non, sollicitudin cursus enim. Integer non tortor bibendum, euismod orci nec, fermentum urna.</span></p>"`
			}
		]
	},
	{
		id: "4",
		title: "Câu hỏi về cách mạng tháng ",
		shortContent:
			"Proin rutrum metus at massa tincidunt ultricies. Mauris laoreet sagittis sodales.",
		content: "Cách mạng tháng 8 xảy ra lúc nào, có ý nghĩa là gì?",
		user: {
			id: "1",
			name: "Từ Trọng Đức"
		},
		createdTime: "2022-09-08 03:13:10",
		comments: [
			{
				id: "1",
				name: "Vũ Thị Thuỳ Dương",
				createdTime: "2022-09-08 06:46:10",
				avatar: "",
				content: `"<p><span style="color: rgb(252, 229, 102);">auris nunc turpis, facilisis quis purus non, sollicitudin cursus enim. Integer non tortor bibendum, euismod orci nec, fermentum urna.</span></p>"`
			},
			{
				id: "2",
				name: "Trần Bảo Long",
				createdTime: "2022-09-08 06:46:10",
				avatar: "",
				content: `"<p><span style="color: rgb(252, 229, 102);">auris nunc turpis, facilisis quis purus non, sollicitudin cursus enim. Integer non tortor bibendum, euismod orci nec, fermentum urna.</span></p>"`
			}
		]
	},
	{
		id: "5",
		title: "Câu hỏi về cách mạng tháng ",
		shortContent:
			"Proin rutrum metus at massa tincidunt ultricies. Mauris laoreet sagittis sodales.",
		content: "Cách mạng tháng 8 xảy ra lúc nào, có ý nghĩa là gì?",
		user: {
			id: "1",
			name: "Từ Trọng Đức"
		},
		createdTime: "2022-09-08 03:13:10",
		comments: [
			{
				id: "1",
				name: "Vũ Thị Thuỳ Dương",
				createdTime: "2022-09-08 06:46:10",
				avatar: "",
				content: `"<p><span style="color: rgb(252, 229, 102);">auris nunc turpis, facilisis quis purus non, sollicitudin cursus enim. Integer non tortor bibendum, euismod orci nec, fermentum urna.</span></p>"`
			},
			{
				id: "2",
				name: "Trần Bảo Long",
				createdTime: "2022-09-08 06:46:10",
				avatar: "",
				content: `"<p><span style="color: rgb(252, 229, 102);">auris nunc turpis, facilisis quis purus non, sollicitudin cursus enim. Integer non tortor bibendum, euismod orci nec, fermentum urna.</span></p>"`
			}
		]
	},
	{
		id: "6",
		title: "Câu hỏi về cách mạng tháng ",
		shortContent:
			"Proin rutrum metus at massa tincidunt ultricies. Mauris laoreet sagittis sodales.",
		content: "Cách mạng tháng 8 xảy ra lúc nào, có ý nghĩa là gì?",
		user: {
			id: "1",
			name: "Từ Trọng Đức"
		},
		createdTime: "2022-09-08 03:13:10",
		comments: [
			{
				id: "1",
				name: "Vũ Thị Thuỳ Dương",
				createdTime: "2022-09-08 06:46:10",
				avatar: "",
				content: `"<p><span style="color: rgb(252, 229, 102);">auris nunc turpis, facilisis quis purus non, sollicitudin cursus enim. Integer non tortor bibendum, euismod orci nec, fermentum urna.</span></p>"`
			},
			{
				id: "2",
				name: "Trần Bảo Long",
				createdTime: "2022-09-08 06:46:10",
				avatar: "",
				content: `"<p><span style="color: rgb(252, 229, 102);">auris nunc turpis, facilisis quis purus non, sollicitudin cursus enim. Integer non tortor bibendum, euismod orci nec, fermentum urna.</span></p>"`
			}
		]
	},
	{
		id: "7",
		title: "Câu hỏi về cách mạng tháng ",
		shortContent:
			"Proin rutrum metus at massa tincidunt ultricies. Mauris laoreet sagittis sodales.",
		content: "Cách mạng tháng 8 xảy ra lúc nào, có ý nghĩa là gì?",
		user: {
			id: "1",
			name: "Từ Trọng Đức"
		},
		createdTime: "2022-09-08 03:13:10",
		comments: [
			{
				id: "1",
				name: "Vũ Thị Thuỳ Dương",
				createdTime: "2022-09-08 06:46:10",
				avatar: "",
				content: `"<p><span style="color: rgb(252, 229, 102);">auris nunc turpis, facilisis quis purus non, sollicitudin cursus enim. Integer non tortor bibendum, euismod orci nec, fermentum urna.</span></p>"`
			},
			{
				id: "2",
				name: "Trần Bảo Long",
				createdTime: "2022-09-08 06:46:10",
				avatar: "",
				content: `"<p><span style="color: rgb(252, 229, 102);">auris nunc turpis, facilisis quis purus non, sollicitudin cursus enim. Integer non tortor bibendum, euismod orci nec, fermentum urna.</span></p>"`
			}
		]
	},
	{
		id: "8",
		title: "Câu hỏi về cách mạng tháng ",
		shortContent:
			"Proin rutrum metus at massa tincidunt ultricies. Mauris laoreet sagittis sodales.",
		content: "Cách mạng tháng 8 xảy ra lúc nào, có ý nghĩa là gì?",
		user: {
			id: "1",
			name: "Từ Trọng Đức"
		},
		createdTime: "2022-09-08 03:13:10",
		comments: [
			{
				id: "1",
				name: "Vũ Thị Thuỳ Dương",
				createdTime: "2022-09-08 06:46:10",
				avatar: "",
				content: `"<p><span style="color: rgb(252, 229, 102);">auris nunc turpis, facilisis quis purus non, sollicitudin cursus enim. Integer non tortor bibendum, euismod orci nec, fermentum urna.</span></p>"`
			},
			{
				id: "2",
				name: "Trần Bảo Long",
				createdTime: "2022-09-08 06:46:10",
				avatar: "",
				content: `"<p><span style="color: rgb(252, 229, 102);">auris nunc turpis, facilisis quis purus non, sollicitudin cursus enim. Integer non tortor bibendum, euismod orci nec, fermentum urna.</span></p>"`
			}
		]
	},
	{
		id: "9",
		title: "Câu hỏi về cách mạng tháng ",
		shortContent:
			"Proin rutrum metus at massa tincidunt ultricies. Mauris laoreet sagittis sodales.",
		content: "Cách mạng tháng 8 xảy ra lúc nào, có ý nghĩa là gì?",
		user: {
			id: "1",
			name: "Từ Trọng Đức"
		},
		createdTime: "2022-09-08 03:13:10",
		comments: [
			{
				id: "1",
				name: "Vũ Thị Thuỳ Dương",
				createdTime: "2022-09-08 06:46:10",
				avatar: "",
				content: `"<p><span style="color: rgb(252, 229, 102);">auris nunc turpis, facilisis quis purus non, sollicitudin cursus enim. Integer non tortor bibendum, euismod orci nec, fermentum urna.</span></p>"`
			},
			{
				id: "2",
				name: "Trần Bảo Long",
				createdTime: "2022-09-08 06:46:10",
				avatar: "",
				content: `"<p><span style="color: rgb(252, 229, 102);">auris nunc turpis, facilisis quis purus non, sollicitudin cursus enim. Integer non tortor bibendum, euismod orci nec, fermentum urna.</span></p>"`
			}
		]
	},
	{
		id: "10",
		title: "Câu hỏi về cách mạng tháng ",
		shortContent:
			"Proin rutrum metus at massa tincidunt ultricies. Mauris laoreet sagittis sodales.",
		content: "Cách mạng tháng 8 xảy ra lúc nào, có ý nghĩa là gì?",
		user: {
			id: "1",
			name: "Từ Trọng Đức"
		},
		createdTime: "2022-09-08 03:13:10",
		comments: [
			{
				id: "1",
				name: "Vũ Thị Thuỳ Dương",
				createdTime: "2022-09-08 06:46:10",
				avatar: "",
				content: `"<p><span style="color: rgb(252, 229, 102);">auris nunc turpis, facilisis quis purus non, sollicitudin cursus enim. Integer non tortor bibendum, euismod orci nec, fermentum urna.</span></p>"`
			},
			{
				id: "2",
				name: "Trần Bảo Long",
				createdTime: "2022-09-08 06:46:10",
				avatar: "",
				content: `"<p><span style="color: rgb(252, 229, 102);">auris nunc turpis, facilisis quis purus non, sollicitudin cursus enim. Integer non tortor bibendum, euismod orci nec, fermentum urna.</span></p>"`
			}
		]
	}
];

export const getQuestions = async () => {
	await fakeCallApi(1000);
	return questions ? questions : [];
};

export const getQuestionByID = async (id) => {
	await fakeCallApi(1000);
	return questions.filter((q) => q.id == id)[0];
};
