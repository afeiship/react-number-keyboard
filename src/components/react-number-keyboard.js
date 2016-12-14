import './style.scss';
import classNames from 'classnames';

export default class extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    keyMapList:React.PropTypes.array,
    keyItemClick:React.PropTypes.func
  };

  static defaultProps = {
    keyItemClick:function(inItem){
      //customize your action!
    },
    keyMapList:[
      {
        content:'1',
        action:'value'
      },
      {
        content:'2',
        action:'value'
      },
      {
        content:'3',
        action:'value'
      },
      {
        content:'4',
        action:'value'
      },
      {
        content:'5',
        action:'value'
      },
      {
        content:'6',
        action:'value'
      },
      {
        content:'7',
        action:'value'
      },
      {
        content:'8',
        action:'value'
      },
      {
        content:'9',
        action:'value'
      },
      {
        content:'00',
        action:'value',
        theme:'gray'
      },
      {
        content:'0',
        action:'value'
      },
      {
        content:'<img src="http://w.weipaitang.com/res/img/backspace.png" />',
        action:'delete',
        theme:'gray'
      }
    ]
  };

  render(){
    return (
      <div className={classNames('react-number-keyboard',this.props.cssClass)}>
        <div className="bd">
          <div className="wrapper">
            {this.props.keyMapList.map(function(item,index){
              return <div onClick={this.props.keyItemClick.bind(this,item)} data-theme={item.theme ? item.theme : null} className="cell" key={index} dangerouslySetInnerHTML={{__html: item.content}}></div>
            }.bind(this))}
          </div>
        </div>
      </div>
    );
  }
}
