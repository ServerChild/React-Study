import React from "react";

class ConfirmButton extends React.Component {
    constructor(props) {
        super(props);

        //확인 여부 확인
        this.state = {
            isConfirmed: false,
        };
        
        //bind 사용
        //this.handleConfirm = this.handleConfirm.bind(this);
    }
        //Arrow function 사용
        handleConfirm = () => {
            this.setState((prevState) => ({
                isConfirmed: !prevState.isConfirmed,
            }));
        }

    handleConfirm() {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }

    render() {
        return (
            <button
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}
                >
                    {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        );
    }
}

export default ConfirmButton;