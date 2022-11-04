import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { AsyncGetPosts, getPostsMinusAll, getPostsPlusTen } from '../../redux/modules/PostSlice'
import Card_Item from './Card_Item/Card_Item';
import { DownloadOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Radio } from 'antd';
import s from './Card.module.css';

const Card = () => {
  const dispatch = useDispatch()
  const { posts, limit, loader } = useSelector(state => state.post)
  const [btnState, setBtnState] = useState(false);
  const defaultArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] 

  useEffect(() => {
    dispatch(AsyncGetPosts())
  }, [])

  const handlAddPost = () => {
    if (!btnState) {
      setBtnState(limit >= 90 ? true : false)
      dispatch(getPostsPlusTen())
    }else {
      setBtnState(false)
      dispatch(getPostsMinusAll())
    }
  }

  return (
    <>
      <h1>List Post</h1>
      <div className={s.card_container}>
        {
          loader
          ? 
          defaultArr.map(item => (
            <Card_Item key={item} loading={true} item={item} />
          ))
          : 
          posts.map(( item, i )=> (
            i <= limit && <Card_Item key={item.id} item={item} />
          ))
        }
      </div>
      {
        !btnState ? 
        <Button type="primary" onClick={ handlAddPost } shape="round" icon={<DownloadOutlined />} size='large'>
          Download
        </Button>
        : 
        <Button type="primary" onClick={ handlAddPost } shape="round" icon={<UploadOutlined />} size='large'>
          Back
        </Button>
      }
    </>
  );
};

export default Card;

