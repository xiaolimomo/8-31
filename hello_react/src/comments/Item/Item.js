/**
 * Created by zhangli on 2017/8/30.
 */
import React, {Component, PropTypes} from 'react'
import './item.css'

export default class Item extends Component {
 /* 类相当于实例的原型， 所有在类中定义的方法， 都会被实例继承。
  如果在一个方法前， 加上static关键字， 就表示该方法不会被实例继承，
  而是直接通过类来调用，这就称为“ 静态方法”。*/

      /*Item.propTypes={
        comment:React.PropTypes.object.isRequired
        因为上面从react中引入了ProTypes,所以下面就没有React
        }*/
  static propTypes = {
       comment:PropTypes.object.isRequired,
       deleteComment: PropTypes.func.isRequired,
       index: PropTypes.number.isRequired,
  }
 /* 箭头函数没有自己的this，箭头函数的this不是调用的时候决定的，
  而是在定义的时候处在的对象就是它的this*/
 deleteItem = ()=>{
      const {comment,deleteComment,index} = this.props
   console.log(this.props)
   /*   window.confirm()方法在页面上显示带确定"和"取消"按钮的提示信息,
       当点"确定"的时候,返回值为true;当点"取消"按钮的时候,返回值为false.
   */
      if(window.confirm(`确定删除${comment.username}的评论吗？`)){
        deleteComment(index)
   }
 }
  render(){
   const {comment} = this.props
    return(
      <li className="list-group-item">
        <div className="handle">
          <a href="javascript:;" onClick={this.deleteItem}>删除</a>
        </div>
        <p className="user"><span >{comment.username}</span><span>说:</span></p>
        <p className="centence">{comment.content}</p>
      </li>
    )
}
}