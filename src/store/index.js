import { createStore } from 'vuex'
import {getStore, setStore} from "@/utils/localStoreage";
import {utils} from "@/utils/func";

export default createStore({
  state: {
    isConnect:false,
    isComplete:false,
    shareUrl:'',
    userId:getStore("userId") !== "" ? getStore("userId") :"",
    errorMsg:"",
  },
  getters: {
    getIsConnect(state){
      return state.isConnect;
    },
    getIsComplete(state){
      return state.isComplete;
    },
    getUserId(state){
      return state.userId;
    },
    getShareUrl(state){
      return state.shareUrl
    },
    getErrorMsg(state){
      return state.errorMsg
    },
  },
  mutations: {
    setIsConnectMutation:(state,isConnect) =>{
      state.isConnect = isConnect
    },
    setIsCompleteMutation:(state,isComplete)=>{
      state.isComplete = isComplete;
    },
    setUserIdMutation:(state,userId) => {
      setStore('userId',userId);
      state.userId = userId;
    },

    setShareUrlMutation:(state,shareUrl) => {
      state.shareUrl = shareUrl
    },
    setErrorMsgMutation:(state,msg)=>{
      state.errorMsg = msg
    },
  },
  actions: {
    setIsConnectAction({commit},isConnect) {
      commit("setIsConnectMutation",isConnect);
    },
    setIsCompleteAction({commit},isComplete) {
      commit("setIsCompleteMutation",isComplete);
    },
    setUserIdAction ({commit}, userId) {
      commit('setUserIdMutation', userId);
    },

    setShareUrlAction:({commit}, shareUrl) =>{
      commit('setShareUrlMutation', shareUrl);
    },

    setErrorMsgAction:({commit}, msg)=>{
      commit('setErrorMsgMutation', msg);
    },
  },
  modules: {
  }
})
