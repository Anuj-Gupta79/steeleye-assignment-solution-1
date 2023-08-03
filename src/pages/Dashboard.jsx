import { useState } from "react";

// Data
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";

const Dashboard = () => {
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState([]);
  const [load, setLoad] = useState(false);
  const totalOrders = mockData.results.length;

  // creating a search function which search on the basis of order id
  const filteredData = mockData.results.filter((row) =>
    row["&id"].toLowerCase().includes(searchText.toLowerCase())
  );

  // function which set the setSelectedOrderDetails
  const selectedOrder = (order) => {
    setSelectedOrderDetails(order.executionDetails);
    const data = timestamps.results.find((it) => it["&id"] === order["&id"]);
    setSelectedOrderTimeStamps(data.timestamps);
    setLoad(true);
  };

  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle
          primaryTitle="Orders"
          secondaryTitle={`${totalOrders} orders`}
        />
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        {load ? (
          <div className={styles.section}>
            <Card
              cardData={selectedOrderDetails}
              title="Selected Order Details"
            />
            <Card
              cardData={selectedOrderTimeStamps}
              title="Selected Order Timestamps"
            />
          </div>
        ) : (
          <></>
        )}

        <List
          rows={filteredData}
          selectedCurrency={currency}
          selectedOrder={selectedOrder}
        />
      </div>
    </div>
  );
};

export default Dashboard;
