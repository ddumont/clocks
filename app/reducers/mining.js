import { MINING_NODE_ON, MINING_NODE_OFF } from '../actions/mining'

export default function mining(state = {}, action) {
  const newstate = [...state];
  const { type, idx } = action;

  switch (type) {
    case MINING_NODE_ON:
      newstate[idx] = Object.assign({}, state[idx], {
        selected: 1
      });
      return newstate;
    case MINING_NODE_OFF:
      newstate[idx] = Object.assign({}, state[idx], {
        selected: 0
      });
      return newstate;
    default:
      return state
  }
}
