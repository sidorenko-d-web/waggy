import { useNavigate } from "react-router-dom";
import { Button } from "../../button/Button";
import styles from "./EmptyScreen.module.scss";

interface Props {
  mode: "cart" | "favorites";
}

function EmptyScreen(props: Props) {
  const { mode } = props;

  const router = useNavigate();
  const handleNavigate = () => router("/");
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src="img/cartEmpty.svg" alt="cart-empty" />
      <div className={styles.textWrapper}>
        <h2 className={styles.h2}>The {mode === 'cart' ? 'shopping cart' : 'favorites list'} is empty for now </h2>
        <p className={styles.p}>
          Check out the main page — we've collected some products that you might
          like
        </p>
      </div>
      <Button onClick={handleNavigate}>Shopping</Button>
    </div>
  );
}

export default EmptyScreen;
