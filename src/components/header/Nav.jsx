import style from '../../style/menu/Nav.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import subscriptions from '../../assets/subscribe-icon.svg';

export default function Nav() {
  const { user } = useSelector((state) => state.auth);
  return (
    <nav className={style.menu}>
      <Link className={style.link} to="/">
        <img className={style.img} src="/icon-home.svg" alt="piggy-bank" />
        Home
      </Link>

      <Link className={style.link} to="/Menu">
        <img className={style.img} src="/piggy-bank-svgrepo-com.svg" alt="piggy-bank" />
        Hucha
      </Link>

      <Link className={style.link} to="/subscriptions">
        <img className={style.img} src={subscriptions} alt="piggy-bank" />
        Suscripción
      </Link>
      <Link className={style.link} to="/perfile">
        <img className={style.img} src="/profile.svg" alt="piggy-bank" />
        Perfil
      </Link>
    </nav>
  );
}
