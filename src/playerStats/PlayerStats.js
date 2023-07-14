import React from "react";
import "../styles/playerStats.css";

const calculateAge = (birthdate) => {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

const PlayerStats = () => {
  const birthdate = "1999-09-29";

  const age = calculateAge(birthdate);

  return (
    <div id="playerStats">
      <h1>VALERIA SARAZHINSKA LEVEL {age}</h1>
      <div id="playerStats__lines">
        <span id="playerStats__lines__thick" />
        <span id="playerStats__lines__thin" />
      </div>
      <h2>Fullstack Developer</h2>
    </div>
  );
};

export default PlayerStats;
