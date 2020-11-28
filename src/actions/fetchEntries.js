export function fetchEntries() {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_ASTRONAUTS_REQUEST' });
      fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(astronauts => dispatch({ type: 'ADD_ASTRONAUTS', astronauts }));
    };
  }