import { products } from "../../../assets/data";
import { Button } from "../../button/Button";
import styles from "./Total.module.scss";

function Total({ cart }: { cart?: { id: number }[] }) {
  const total = cart?.reduce(
    (acc, item) =>
      (acc +=
        Number(
          products
            .find((_item) => _item.id === item.id)
            ?.price.replace("$", ""),
        ) || 0),
    0,
  );

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        Total: {cart?.length} products <span>${total?.toFixed(2)}</span>
      </p>
      <Button>Place an order</Button>
    </div>
  );
}

export default Total;
