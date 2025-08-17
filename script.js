// import {createStore} from 'https://cdn.skypack.dev/redux';
function createStore(reducer) {
   let state = reducer(undefined, {});
   const subscribers = [];
   return {
      getState() {
         return state;
      },
      dispatch(action) {
         state = reducer(state, action);
         subscribers.forEach(subscriber => subscriber())
      },
      subscribe(subscriber) {
         subscribers.push(subscriber);
      }
   }
}


// ======================= MY APP =======================
// Reducer function
const initState = 0;
function bankReducer(state = 0, action) {
   switch (action.type) {
      case 'DEPOSIT':
         return state + action.payload;
      case 'WITHDRAW':
         return state - action.payload;
      default:
         return state;   
   }

}

// Create a Redux store
const store = window.store = createStore(bankReducer, initState);

// Action
function deposit(cost) {
   return {
      type: 'DEPOSIT',
      payload: cost
   }
}

function withdraw(cost) {
   return {
      type: 'WITHDRAW',
      payload: cost
   }
}

function render() {
   const output = document.getElementById('output');
   output.innerText = store.getState();
}

render();
const depositBtn = document.querySelector('#deposit');
const withdrawBtn = document.querySelector('#withdraw');
// Event
depositBtn.addEventListener('click', () => {
   store.dispatch(deposit(10));
   // render();
});

withdrawBtn.addEventListener('click', () => {
   store.dispatch(withdraw(10));
   // render();
});


// Listener
store.subscribe(() => {
   render();
   console.log("Updated")
});
