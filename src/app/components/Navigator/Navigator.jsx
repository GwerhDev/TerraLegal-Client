import s from "./Navigator.module.css";
import { Logo } from "./Logo";
import { NavMenu } from "./NavMenu";
import { UserMenu } from "./UserMenu";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserToken } from "../../../middlewares/helpers";
import { auth } from "../../../middlewares/redux/actions/account.action";

export const Navigator = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.account.currentUser);

  useEffect(() => {
    const token = getUserToken();
    dispatch(auth(token));
  }, [dispatch]);

  return (
    <nav>
      <div className={s.container}>
        <span className={s.innerContainer}>
          <section>
            <Logo />
          </section>
          <section>
            <NavMenu />
          </section>
        </span>

        {
          currentUser?.role === "admin" &&
          <section>
            <UserMenu />
          </section>
        }
      </div>
    </nav>
  )
}
