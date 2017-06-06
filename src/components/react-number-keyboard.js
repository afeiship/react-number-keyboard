import './style.scss';

import React,{PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import {generator} from './const';
import noop from 'noop';

const EMPTY_STR = '';
const DELETE_KEY = 'delete';

export default class extends PureComponent{
  static propTypes = {
    className:PropTypes.string,
    maxLength:PropTypes.number,
    items:PropTypes.array,
    value:PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string
    ]),
    onItemClick:PropTypes.func,
    onChange:PropTypes.func
  };

  static defaultProps = {
    onItemClick:noop,
    onChange:noop,
    value:[],
    maxLength:Number.MAX_VALUE,
    items:generator('00')
  };

  constructor(props){
  	super(props);
  	this.initialState( this.props );
  }

  initialState(inProps){
    let {value} = inProps;
    if(!Array.isArray(value)){
      value = value.split(EMPTY_STR).map((item)=>{
        return {
          content: item,
          action: 'value',
          ignore:false
        };
      });
    }
    this.state = { value: this.getSlicedValue(value) };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.value !== this.state.value) {
      this.initialState(nextProps);
      this.setState(this.state,()=>{
        this.props.onChange({ target:{ value:nextProps.value }});
      });
    }
  }

  isOverflow(inValue){
    const {maxLength} = this.props;
    const {length} = inValue;
    return length >= maxLength;
  }

  getSlicedValue(inValue){
    const {maxLength} = this.props;
    if(this.isOverflow(inValue)){
      return inValue.slice(0,maxLength);
    }
    return inValue;
  }

  _onItemClick(item){
    const {onItemClick,onChange} = this.props;
    let value = this.state.value;

    if(!item.ignore){
      if(item.action === DELETE_KEY){
        value.pop();
      }else{
        if(!this.isOverflow(value)){
          value.push(item);
        }
      }
    }

    this.setState({ value });
    onItemClick({item,value});
    onChange({ target:{ value } });
  }

  render(){
    return (
      <div className={classNames('react-number-keyboard',this.props.className)}>
        <div className="bd">
          <div className="wrapper">
            {this.props.items.map((item,index) => {
              return (
                <button
                data-action={item.action}
                data-ignore={item.ignore}
                onTouchStart={this._onItemClick.bind(this,item)} data-theme={item.theme ? item.theme : null} className="cell" key={index} dangerouslySetInnerHTML={{__html: item.content}}></button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
