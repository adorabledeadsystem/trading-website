import { NavLink } from "react-router-dom";
import st from "./AgrNav.module.scss";
import back from "../../assert/back.svg";

const AgreementsNav = () => {
  return (
    <nav className={st.nav}>
      <NavLink to="/">
        <button>
          <img width={30} src={back} alt="back" />
        </button>
      </NavLink>
      <ul>
        <li>
          <NavLink
            to="/agreements"
            className={({ isActive }) => (isActive ? st.active : "")}
          >
            Клиентское соглашение
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/confidentiality"
            className={({ isActive }) => (isActive ? st.active : "")}
          >
            Политика конфиденциальности
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/payPolicy"
            className={({ isActive }) => (isActive ? st.active : "")}
          >
            Платежная политика
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/riskAgree"
            className={({ isActive }) => (isActive ? st.active : "")}
          >
            Соглашение о рисках
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AgreementsNav;
