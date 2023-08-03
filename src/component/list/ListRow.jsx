import styles from "./ListRow.module.css";

const ListCell = ({ children, selectedOrder, row }) => {
  return <tr className={styles.cell} onClick={()=>selectedOrder(row)}>{children}</tr>;
};

export default ListCell;
