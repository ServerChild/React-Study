import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";

//물의 끓음 여부를 알려줌
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다!</p>;
    }
    return <p>물이 끓지 않습니다.</p>;
}

//온도 변환하는 함수(화씨 <-> 섭씨)
function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

//온도 값과 변환하는 함수 값을 받아서 값을 변환한 뒤 리턴
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    //숫자가 아닌 값을 입력했을 때
    if (Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

//부모 컴포넌트
function Calculator(props) {
    //온도값과 단위를 각각 저장
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    };

    const handleFahremheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    };

    const celsius =
        scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
        scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahremheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}

export default Calculator;