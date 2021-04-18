import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "../../../AuthContext/AuthContext";


function PrivateRoute({ children, ...rest }) {
    const [auth,setAuth] = useContext(AuthContext)
    const token = sessionStorage.getItem("token")
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute