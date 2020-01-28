import React from "react";
import {connect} from "react-redux";

class InputX extends React.Component {
    render() {
        return (
            <select onChange={(e) => this.props.dispatch({type: "MAIN_SET_X", value: e.target.value})}>
                <option value="-4" name="x" selected={this.props.x === -4}>-4</option>
                <option value="-3" name="x" selected={this.props.x === -3}>-3</option>
                <option value="-2" name="x" selected={this.props.x === -2}>-2</option>
                <option value="-1" name="x" selected={this.props.x === -1}>-1</option>
                <option value="0" name="x" selected={this.props.x === 0}>0</option>
                <option value="1" name="x" selected={this.props.x === 1}>1</option>
                <option value="2" name="x" selected={this.props.x === 2}>2</option>
                <option value="3" name="x" selected={this.props.x === 3}>3</option>
                <option value="4" name="x" selected={this.props.x === 4}>4</option>
            </select>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        x: store.mainState.xField,
    }
};

export default connect(mapStateToProps)(InputX)