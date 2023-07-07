// Reducer for counterState (primitive)

const counterReducer = (state = 0, actions) => {
  switch (actions.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// Store for counter

const counterStore = Redux.createStore(counterReducer);

// Dispatch an action to mutate the state

$('#increment_button').click(() =>
  counterStore.dispatch({ type: 'INCREMENT' })
);

$('#decrement_button').click(() =>
  counterStore.dispatch({ type: 'DECREMENT' })
);

// Use subscribe() to update the UI in response to state changes

counterStore.subscribe(() => {
  $('#counter').html(counterStore.getState());
});

// ---------------------------------------------------------

// Reducer for nameReducer (object)

const nameReducer = (state = {}, actions) => {
  let { firstName = '', lastName = '' } = actions;

  switch (actions.type) {
    case 'UPDATE_FIRST_NAME':
      return Object.assign({}, state, { firstName: firstName });
    case 'UPDATE_LAST_NAME':
      return Object.assign({}, state, { lastName: lastName });
    default:
      return state;
  }
};

// Store for nameStore

const nameStore = Redux.createStore(nameReducer);

$('#first_name_input').on('input', (e) => {
  nameStore.dispatch({
    type: 'UPDATE_FIRST_NAME',
    firstName: e.target.value,
  });
});

$('#last_name_input').on('input', (e) => {
  nameStore.dispatch({
    type: 'UPDATE_LAST_NAME',
    lastName: e.target.value,
  });
});

nameStore.subscribe(() => {
  let { firstName, lastName } = nameStore.getState();

  $('#first_name').html(firstName);
  $('#last_name').html(lastName);
});
