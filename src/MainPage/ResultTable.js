import React from "react";
import {connect} from "react-redux";

class ResultTable extends React.Component {

    render() {
        let result = [];
        let points = this.props.points;
        for (let item of points) {
            let history = item;
            result.push(
                <tr key={item.id}>
                    <td>{history.x}</td>
                    <td>{history.y}</td>
                    <td>{item.r}</td>
                    <td>{`${history.checked}`}</td>
                    <td>{this.deleteButton(item)}</td>
                </tr>
            )
        }
        return (
            <div>
                <br/>
                <table className="result-table">
                    <thead>
                    <tr>
                        <th>X</th>
                        <th>Y</th>
                        <th>R</th>
                        <th>Result</th>
                        <th>Change</th>
                    </tr>
                    </thead>
                    <tbody>{result}</tbody>
                </table>
            </div>
        )
    }

    deleteButton = (item) => (<button className="r-button" onClick={event => {
        this.props.dispatch({type: "MAIN_DELETE_POINT", value: item})
    }}>Delete</button>);

}

const mapStateToProps = function (store) {
    return {
        points: store.appState.points,
        currentPoint: store.mainState.currentPoint,
        x: store.mainState.xChange,
        y: store.mainState.yChange
    }
};

export default connect(mapStateToProps)(ResultTable)