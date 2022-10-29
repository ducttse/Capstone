const { LOAD_EDIT_QUESTION } = require("../constants/questionForm.constant.js");

export const loadEditQuestionForm = (payload) => {
	return {
		type: LOAD_EDIT_QUESTION,
		payload: payload
	};
};
