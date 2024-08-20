import styles from "./Items.module.css";
import { TItem } from "../../Types/ItemType";
import Item from "../Item/Item";
import { toast } from "react-toastify";

const Items = ({
  offer = false,
  title="Our Products",
  data,
}: {
  offer?: boolean;
  title?:string;
  data: TItem[];
}) => {
  if (data.length === 0) {
    return (
      <>
        <h2>No Products Founds in {offer?"Executive Sales":"Normal sales"}</h2>
      </>
    );
  }
  const items = data.filter((item) =>
    offer ? item.offer != undefined && item.offer > 0 : item.offer === undefined
  );
  return (
    <>
    <div>
          <h1 className={styles.title}>{title}</h1>
          {title!=='Our Products' && (<p className={styles.description}>Get in on the trend with our curated selection of best-selling styles</p>)}
        </div>
    <div className={styles.itemsContainer}>
      {items.map((item:TItem) => (
        <Item item={item}/>
      ))}
    </div>
    </>
  );
};

export default Items;
