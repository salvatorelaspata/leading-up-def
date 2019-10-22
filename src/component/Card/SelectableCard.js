import React from 'react';
import Card from './Card';
class SelectableCard extends React.Component {

    render() {
        var isSelected = this.props.selected ? "selected" : "";
        var className = "selectable " + isSelected;
        return (
        <Card>
            <div className={className} onClick={this.props.onClick}>
            {this.props.children}
            <div className="check"><span className="checkmark">✔</span></div>
            </div>
        </Card>
        );
    }
}
export default SelectableCard;