import React from 'react';
import SelectableTitleCard from './SelectableTitleCard';
class SelectableCardList extends React.Component {

    constructor(props) {
      super(props);
      var selected = props.multiple ? [] : -1;
      var initialState = {
        selected: selected
      };
      this.state = initialState;
    }
  
    onItemSelected(index) {
      this.setState((prevState, props) => {
        if (props.multiple) {
          var selectedIndexes = prevState.selected;
          var selectedIndex = selectedIndexes.indexOf(index);
          if (selectedIndex > -1) {
            selectedIndexes.splice(selectedIndex, 1);
            props.onChange(selectedIndexes);
          } else {
            if (!(selectedIndexes.length >= props.maxSelectable)) {
              selectedIndexes.push(index);
              props.onChange(selectedIndexes);
            }
          }
          return {
            selected: selectedIndexes
          };
        } else {
          props.onChange(index);
          return {
            selected: index
          }
        }
      });
    }
  
    render() {
      var {
        contents,
        multiple
      } = this.props;
  
      var content = contents.map((cardContent, i) => {
        var {
          title,
          description,
          selected,
          img
        } = cardContent;
        var selected = multiple ? this.state.selected.indexOf(i) > -1 : this.state.selected == i;
        return (
          <SelectableTitleCard key={i} 
            title={title} description={description} img={img}
            selected={selected} 
            onClick={(e) => this.onItemSelected(i)} />
        );
      });
      return (<div className="cardlist">{content}</div>);
    }
  
}

export default SelectableCardList;