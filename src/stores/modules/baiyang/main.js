const initialState = {
	LOGIN_NAME: ''
};

const mutations = {
	SET_BAIYANG_LOGIN_NAME(state, v) {
		state.LOGIN_NAME = v;
	}
};

export const baiyang = {
	state: { ...initialState },
	mutations
};