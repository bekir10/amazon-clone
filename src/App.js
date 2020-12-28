import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HWorRAYjgz9bSV0RAZ47xSxk3GWTjLplnPsfwD4BTRMzD7ZSIYYODBxSQgwlnvcY0fj6JgrTfrlVI13QgolVFZz00tOYdbg1L"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("this is the user", authUser);

      if (authUser) {
        //the user just logged in or it was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout></Checkout>
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment></Payment>
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
