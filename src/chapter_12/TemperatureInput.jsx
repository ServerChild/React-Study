//값이 바뀌지 않는 상수들은 컴포넌트 밖에 선언하여 관리함
const scaleNames = {
    c: "섭씨",
    f: "화씨",
};

//입력 컴포넌트 : 화씨와 섭씨 온도를 각각 따로 입력받을 수 있도록 하여 재사용이 가능한 상태로 컴포넌트를 만들어 사용
//온도 값이 변경되었을 경우 호출되어 상위 컴포넌트로 값을 전달
function TemperatureInput(props) {
    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value);
    };

    return (
        <fieldset>
            <legend>
                온도를 입력해주세요(단위:{scaleNames[props.scale]});
            </legend>
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    );
}

export default TemperatureInput;