import { Fragment } from "react";
import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Header from "./components/Header.js";
import { useDispatch, useSelector } from "react-redux";
import  UserProfile  from "./components/UserProfile.js";
function App() {
  const loginFlag = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  return (
    <Fragment>
  <Header />
      {!loginFlag && <Auth />}
      {loginFlag && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
