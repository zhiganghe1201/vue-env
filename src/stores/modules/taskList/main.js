const initialState = {
	LOGIN_NAME: ''
};

const mutations = {
	SET_HZCITY_LOGIN_NAME(state, v) {
		state.LOGIN_NAME = v;
	}
};

export const taskList = {
	state: { ...initialState },
	mutations
};