import style from '../style/home/menu.module.css'
import DebitCard from "../components/home/DebitCard";


const Home = () => {
  return (
    <main className={style.container}>
      <DebitCard />
    </main>
  );
};

export default Home;