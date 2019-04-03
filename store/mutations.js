import * as type from './mutationsType'
const mutations = {
  [type['SET_USER']] (state, obj) {
    state.user = obj
  }
}
export default mutations
