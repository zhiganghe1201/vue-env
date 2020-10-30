const initialState = {
	LOGIN_NAME: ''
};

const mutations = {
	SET_WULING_LOGIN_NAME(state, v) {
		state.LOGIN_NAME = v;
	}
};


export const wuling = {
	state: { ...initialState },
	mutations
};