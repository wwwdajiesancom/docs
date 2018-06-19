import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const stores = new Vuex.Store({
    state:{
        count:101
    },
    mutations:{
        addCount(state,val){
            console.log(val);
            state.count++;
        }
    },
    getters:{
        getCount:(state) => {
            console.log('getters:getCount'+state.count);
            if(state.count==105){
                return 'jiegehao';
            }
            return '___';
        }
    },
    actions:{
        addCount(c){
            c.commit('addCount',[12,3,4,5,6,6]);
        }
    }
});


export default stores;
