import './style.scss';
import React,{PureComponent,PropTypes} from 'react';
import classNames from 'classnames';
import noop from 'noop';
import {items} from './const';

export default class extends PureComponent{
  static propTypes = {
    className:PropTypes.string,
    items:PropTypes.array,
    onItemClick:PropTypes.func,
    onChange:PropTypes.func
  };

  static defaultProps = {
    onItemClick:noop,
    onChange:noop,
    items
  };

  constructor(props){
  	super(props);
  	this.state = {
      data:[]
    };
  }

  _onItemClick(inItem){
    const {onItemClick,onChange} = this.props;
    let data = this.state.data;
    inItem.action == 'delete' ? data.pop() : data.push(inItem);
    this.setState({data});
    onItemClick({item:inItem,data});
    onChange({ target:{ value:data } });
  }

  render(){
    return (
      <div className={classNames('react-number-keyboard',this.props.className)}>
        <div className="bd">
          <div className="wrapper">
            {this.props.items.map((item,index) => {
              return (
                <button onClick={this._onItemClick.bind(this,item)} data-theme={item.theme ? item.theme : null} className="cell" key={index} dangerouslySetInnerHTML={{__html: item.content}}></button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
