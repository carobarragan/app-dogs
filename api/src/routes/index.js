const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Dog } = require("../db.js");
const { Temperament } = require("../db.js");
const router = Router();
const axios = require("axios");

//Calculo una altura promedia para la raza, se ve mejor que decir altura maxima y minima (Cuando se lea en el front)
const avgHeight = (height) => {
  const auxArr = height.split(" - ");
  const minHeight = Number(auxArr[0]);
  const maxHeight = Number(auxArr[1]);
  const avg = (minHeight + maxHeight) / 2;
  if (minHeight && !maxHeight) return minHeight.toFixed(2);
  if (maxHeight && !minHeight) return maxHeight.toFixed(2);
  return avg.toFixed(2);
};
//Calculo peso promedio de la raza
const avgWeight = (weight) => {
  if (weight === "NaN") return 15.0;
  const auxArr = weight.trim().split(" - ");

  const minWeight = Number(auxArr[0]);
  const maxWeight = Number(auxArr[1]);

  if (minWeight && !maxWeight) return minWeight.toFixed(2);
  if (maxWeight && !minWeight) return maxWeight.toFixed(2);
  const avg = (minWeight + maxWeight) / 2;

  return avg.toFixed(2);
};

//Calculo una espectativa de vida promedio
const avgLifeSpan = (years) => {
  const auxArr = years.replace(" years", "").split(" - "); //seteo todo el stirngs a solo numeros para poder hacer operaciones
  const minAge = Number(auxArr[0]);
  const maxAge = Number(auxArr[1]);
  const avg = (minAge + maxAge) / 2;

  if (minAge && !maxAge) return minAge;
  if (maxAge && !minAge) return maxAge;
  return avg.toFixed(2);
};

const apiDogs = async () => {
  const dogs = await axios(`https://api.thedogapi.com/v1/breeds`);
  const dogsSetted = dogs.data.map((e) => {
    return {
      id: e.id,
      name: e.name,
      height: avgHeight(e.height.metric),
      weight: avgWeight(e.weight.metric),
      life_span: avgLifeSpan(e.life_span),
      image: e.image.url,
      temperament: e.temperament,
    };
  });

  // return dogsSetted;
  totalDogsList = [...dogsSetted];
  const db = await Dog.findAll({
    include: [{ model: Temperament }],
  });
  return [...dogsSetted, ...db];
};

//ruta principal
router.get("/dog", async (req, res) => {
  const p = await apiDogs(req.params);
  res.json(p);
});

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
