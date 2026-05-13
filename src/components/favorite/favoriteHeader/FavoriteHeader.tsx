import type { TypeSetLocalStorageItem } from "../../../types/types";
import { Button } from "../../button/Button";
import styles from "./FavoriteHeader.module.scss";

interface Props {
  handleSetFavorites: TypeSetLocalStorageItem;
}

function FavoriteHeader(props: Props) {
  const { handleSetFavorites } = props;

  const handleDeleteAll = () => handleSetFavorites([]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <h1 className={styles.text}>Favorites</h1>
        <div className={styles.buttonsWrapper}>
          <Button onClick={handleDeleteAll}>delete all products</Button>
        </div>
      </div>
    </div>
  );
}

export default FavoriteHeader;
