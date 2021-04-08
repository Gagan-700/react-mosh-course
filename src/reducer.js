export default function Increment(state = 0, action) {
  switch (action.type) {
    case "Increment":
      return state + 1;
  }
}
