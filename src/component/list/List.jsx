import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";
import timestamps from "../../assets/timeStamps.json";

import styles from "./List.module.css";

const List = ({ rows, selectedCurrency, selectedOrder }) => {
  // This count variable for the unique key value for each row
  let count = 0;

  // getOrderSubmittedDate() -> This is function used to find the order submitted date by using the order id
  const getOrderSubmittedDate = (orderId) => {
    const timestamp = timestamps.results.find((it) => it["&id"] === orderId);
    if (timestamp) {
      const time = timestamp.timestamps.orderSubmitted;
      const date = new Date(time);

      return date.toLocaleDateString();
    }
    return "";
  };

  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {selectedCurrency}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows.map((row) => (
          <ListRow key={count++} selectedOrder={selectedOrder} row = {row}>
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{getOrderSubmittedDate(row["&id"])}</ListRowCell>
            <ListRowCell>
              {row.bestExecutionData.orderVolume[selectedCurrency]}
            </ListRowCell>
          </ListRow>
        ))}
      </tbody>
    </table>
  );
};

export default List;
