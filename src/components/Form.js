import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="Введите город"></input>
      <input type="text" name="country" placeholder="Введите страну"></input>
      <button>Узнать погоду</button>
    </form>
  );
};

export default Form;
