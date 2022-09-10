import React, { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

export default function Calculator() {
  const [state, setState] = useState({
    scale: "c",
    temperature: 0,
  });
  const handleTemperratureChange = (obj) => {
    //어디에서 수정했는지, 값(온도)는 무엇인지
    // obj.scale, obj.temperature
    setState({ ...state, scale: obj.scale, temperature: obj.temperature });
  };
  function toCelsius(Fahrenheit) {
    return ((Fahrenheit - 32) * 5) / 9;
  }

  function toFahrenheit(Celsius) {
    return (Celsius * 9) / 5 + 32;
  }

  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  const { scale, temperature } = state;

  const Celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const Fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  //하위 컴포넌트 - 값을 수정,섭씨/화씨 수정한건지 알고 있어야 함

  return (
    <>
      <TemperatureInput
        scale={"c"}
        temperature={Celsius}
        onTemperratureChange={handleTemperratureChange}
      />
      <TemperatureInput
        scale={"f"}
        temperature={Fahrenheit}
        onTemperratureChange={handleTemperratureChange}
      />
    </>
  );
}
