import styles from "./Card.module.css";

const Card = ({ cardData, title }) => {
  if (!cardData) return null;
  let index = 0;

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      {Object.entries(cardData).map(([k, v]) => (
        <div className={styles.cell} key={index++}>
          <div className={styles.value}>{k}</div>
          <div className={styles.value}>{v}</div>
        </div>
      ))}
{/* 
      {cardData.map((item, index)=>{
        
      })} */}

{/* <div>
      <h2>Array of Objects</h2>
      {cardData.map((object, index) => (
        <div key={index}>
          <h3>Object {index + 1}</h3>
          <ul>
            {Object.entries(object.timestamps).map(([key, value], innerIndex) => (
              <li key={innerIndex}>
                {console.log(key + " " + value)}
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div> */}
    </div>
  );
};

export default Card;
