import React, {Component} from 'react';

import './to-do-list-item.css';

export default class TodoListItem extends Component {

// constructor() {
//   super();

//   this.onLabelClick = () => {
//     console.log(`Выполнено: ${this.props.label}`);
// };
// }



onLabelClick = () => {
      console.log(`Выполнено: ${this.props.label}`);
};


  render() {

    const { label, important = false } = this.props;

    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };
  
    return (
      <span className="to-do-list-item">
        <span
          className="to-do-list-item-label"
          style={style}
          onClick = {this.onLabelClick.bind(this)}>
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  };
}


