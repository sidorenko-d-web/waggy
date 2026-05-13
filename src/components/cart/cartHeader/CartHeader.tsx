import type {
  TypeLocalStorageItem,
  TypeSetLocalStorageItem,
} from "../../../types/types";
import { Button } from "../../button/Button";
import styles from "./CartHeader.module.scss";

interface Props {
  cart?: TypeLocalStorageItem[];
  handleSetCart: TypeSetLocalStorageItem;
  selectCart?: TypeLocalStorageItem[];
  handleSetSelectedCart: TypeSetLocalStorageItem;
}

function CartHeader(props: Props) {
  const { handleSetSelectedCart, cart, handleSetCart, selectCart } = props;

  const handleDeleteSelected = () => {
    if (!selectCart?.length) return;
    const filtered = cart?.filter((item) => {
      return !selectCart?.some((_item) => _item.id === item.id);
    });
    handleSetCart(filtered ?? []);
    handleSetSelectedCart([]);
  };

  const handleDeleteAll = () => handleSetCart([]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.text}>Cart</h1>
      <div className={styles.buttonsWrapper}>
        <Button onClick={handleDeleteSelected}>delete selected ones</Button>
        <Button onClick={handleDeleteAll}>delete all products</Button>
      </div>
    </div>
  );
}

export default CartHeader;
