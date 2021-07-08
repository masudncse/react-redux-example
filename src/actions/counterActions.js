export const incrementAsync = () => {
  return (dispatch) => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch({ type: "INCREMENT" });
    }, 1000);
  };
};
