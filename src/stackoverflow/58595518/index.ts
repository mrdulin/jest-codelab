export const add = () => async dispatch => {
  const res = await fetch('https://swapi.co/api/people/');
  const res2 = await res.json();
  const people = res2.results;

  return dispatch({
    type: 'ADD',
    people
  });
};
