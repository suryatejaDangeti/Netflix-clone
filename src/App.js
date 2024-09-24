import { Box } from 'grommet';
import SecondSignInForm from './components/forFirebase/second-sign-in';
import SignIn from './components/forFirebase/Sign-in';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { createRoot } from "react-dom/client";
import Registration from "./components/Signup/Registration"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Product from './razorpay/product';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Login />
      ),
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: '/registration',
      element: <Registration />
    },
    {
      path: '/razorpay',
      element: <Product />
    },
    {
      path: '/home',
      element: (
        <h1>Welcome to netflix</h1>
      )
    }
  ]);



  return (
    <Box>
        <RouterProvider router={router} />
    </Box>
  );
}

export default App;


// import { createStore } from "redux";
// import { Provider, connect, useSelector, useDispatch } from 'react-redux';

// const countReducer = function(state = 0, action) {
//   switch(action.type) {
//     case "ADD" :
//       return state + 1;
//     case "SUBTRACT":
//       return state - 1;
//     default :
//       return state;
//   }
// }

// const store = createStore(countReducer)

// const mapStateToProps = state => {
//   return {
//     count: state
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     add: () => dispatch({type: "ADD"}),
//     subtract: () => dispatch({type: "SUBTRACT"})
//   }
// }

// const Component = ({count, add, subtract}) => {
//   return (
//     <>
//     <h1>count = {count}</h1>
//     <button onClick={add}>add</button>
//     <button onClick={subtract}>sub</button>
//     </>
//   )
// }

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component)



// const App = () => {
//   return (
//     <Provider store={store}>
//       <Container />
//     </Provider>
//   )
// }

// export default App