import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function UserComp() {
  const { user } = useSelector((state) => state.user);
  const userLink =
    user?.accountType === "GUEST"
      ? "/user/dashboard"
      : user?.accountType === "VENDOR"
      ? "/vendor/dashboard?checkpoint=listings"
      : "/login";
  return (
    <div>
      <div className={''}>
            <Link to={`${userLink}`} className={'flex items-center space-x-2 text-white'}>
              <img
                className='w-10'
                src={
                  user?.company_logo_url ? user?.company_logo_url : "/dummy.svg"
                }
                alt={user?.firstName}
              />
              <div className={''}>
                <div className={''}>
                  <p className={'hidden md:block'}>
                    {user?.lastName}
                  </p>
                </div>
              </div>
            </Link>
          </div>
    </div>
  )
}

export default UserComp