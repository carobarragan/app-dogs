import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getDog from "../../actions";
import DogCard from "../card/dogCard";
import styles from "../../styles/Home.module.css";
import Footer from "../footer";

export default function Home() {
  const dogs = useSelector((state) => state.allDogs);
  const dispatch = useDispatch();
  console.log(dogs);
  useEffect(() => {
    dispatch(getDog());
  }, []);

  return (
    <div className={styles.cover}>
      <Footer />
      <div>
        <h1>recetas</h1>;
      </div>
      <div className={styles.container}>
        {dogs &&
          dogs.map((el) => (
            <DogCard
              key={el.id}
              id={el.id}
              name={el.name}
              height={el.height}
              weight={el.weight}
              // life_span={el.life_span}
              image={el.image}
              temperament={el.temperament || el.temperaments}
            />
          ))}
      </div>
    </div>
  );
}
