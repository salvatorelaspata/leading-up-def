/* 
mport React from 'react';
import SelectableCardList from './SelectableCardList';
import validate from '../../validate';
class Index extends React.Component {
    onListChanged(selected) {
      this.setState({
        selected: selected
      });
      console.log('this.props',this.props);
      const obj = {selected};
      validate(selected);

    }
    render() {
      return (
        <div className="column">
            <SelectableCardList 
              {...input}
              multiple={this.props.multiple}
              maxSelectable={this.props.maxSelectable}
              contents={this.props.cardContents}
              onChange={this.onListChanged.bind(this)}/>
        </div>);
    }
  }

  export default Index; 
  */


import React from 'react';
import SelectableCardList from './SelectableCardList';


var teams = [{
  title: "Flight",
  img: "./img/flight.jpg"
}, {
  title: "Train",
  img: "./img/train.jpg"
}, {
  title: "Car",
  img: "./img/car.jpg"
}];

const renderFieldRadio = ({ input, label, meta: { touched, error }}) => (
  <div className="container-input--mobile">
    <div className="column">
            <SelectableCardList 
              {...input}
              multiple={null}
              maxSelectable={null}
              contents={teams}
              onChange={(text)=>{
                console.log('text',text)
                console.log('input', input.onChange(()=>{
                  return {mezzo:text};
                }));
              }}/>
        </div>
    <br/>
    {touched && error && <span>{error}</span>}
    
  </div>
);

export default renderFieldRadio;