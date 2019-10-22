import React from 'react';
import SelectableCard from './SelectableCard';
class SelectableTitleCard extends React.Component {

    render() {
        var {
            title,
            img,
            selected
        } = this.props;
        return (
            <SelectableCard onClick={this.props.onClick}
            selected={selected}>
                <div className="content">
                    {/* <h1 className="title">{title}</h1> */}
                    <img src={img} className="img"/>
                    <p className="description">{title}</p>
                </div>
            </SelectableCard>
        );
    }
}

export default SelectableTitleCard;