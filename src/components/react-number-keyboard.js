import './style.scss';
import React,{PureComponent,PropTypes} from 'react';
import classNames from 'classnames';
import noop from 'noop';
import {items} from './const';

export default class extends PureComponent{
  static propTypes = {
    className:PropTypes.string,
    items:PropTypes.array,
    value:PropTypes.array,
    onItemClick:PropTypes.func,
    onChange:PropTypes.func
  };

  static defaultProps = {
    onItemClick:noop,
    onChange:noop,
    value:[],
    items
  };

  constructor(props){
  	super(props);
  	this.state = {
      value:props.value
    };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.value !== this.props.value) {
      this.setState(nextProps,()=>{
        this.props.onChange({target:{value:nextProps.value}});
      });
    }
  }

  _onItemClick(inItem){
    const {onItemClick,onChange} = this.props;
    let value = this.state.value;
    inItem.action == 'delete' ? value.pop() : value.push(inItem);
    this.setState({value});
    onItemClick({item:inItem,value});
    onChange({ target:{ value } });
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
