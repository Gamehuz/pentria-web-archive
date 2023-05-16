import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ButtonSpinner from "../ButtonSpiner/index";
import UserComp from "../auth/UserComp";

function AuthComp() {
  const { token  } = useSelector((state) => state.user);
  const { isLoading } = useSelector((state) => state.util);
  return (
    <div>
      <div className={"Navbar_btn"}>
          {isLoading ? (
            <ButtonSpinner />
          ) : (
            <>
              {token ? (
                <>
                  <UserComp />
                </>
              ) : (
                <>
                  <div className="flex space-x-10">
                    <div>
                      <Link className={`auth-outline`} to="/login">LOGIN</Link>
                    </div>
                    <div>
                    <Link className={` auth-primaryColor`} to="/prompt">SIGNUP</Link>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
    </div>
  )
}

export default AuthComp