export default function Increment(state ={ counter : 0}, action){
  switch(action.type){
    case 'Increment':
    return {counter : state.counter + 1}
  }

}