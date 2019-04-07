// 获取toast的值
export const toast = state => state.toast;//获取toast的信息

export const user = state => JSON.parse(state.handleUser);//获取用户信息

export const songSheet = state => state.songSheet