import React from "react";
import styles from "../../styles/DogCard.module.css";
import { Link } from "react-router-dom";

export default function DogCard(props) {
  const temperaments = props.temperament
    ? props.temperament.split(", ")
    : undefined;
  return (
    <div className={styles.container}>
      <div className={styles.dogInfo}>
        <h1>{props.name}</h1>
        <div className={styles.weight}>
          <p>Average Weight: {props.weight} Kg</p>
        </div>
        <div className={styles.link}>
          <img
            src={props.image}
            alt="imagen del perro"
            width="200"
            height="250"
          ></img>
        </div>
        <div className={styles.temperament}>
          {temperaments &&
            temperaments.map((el) => {
              return <p key={el}>{el}</p>;
            })}
        </div>
      </div>
    </div>
  );
}
