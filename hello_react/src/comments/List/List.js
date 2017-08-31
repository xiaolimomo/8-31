/**
 * Created by zhangli on 2017/8/30.
 */
import React, {Component, PropTypes} from 'react'
import Item from '../Item/Item'
import './list.css'

export default class List extends Component {


  static propTypes = { // propTypes添加给了List类
    comments: PropTypes.array.isRequired,
    deleteComment: PropTypes.func.isRequired
  }

  render(){
    const {comments, deleteComment} = this.props
    console.log(this.props)
    const display = comments.length ===0 ? 'block':'none'
    return(
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            comments.map((comment,index)=>(
              /*//注意key 是在遍历时需要的必须属性，为了让每一个遍历的标签都有自己的唯一的标识，此属性
              // 不会直接写到props中，如果需要index，那就重新定义一个属性*/
              <Item key={index} comment={comment} deleteComment={deleteComment} index={index}></Item>
            ))
          }
        </ul>
      </div>
    )
}
}