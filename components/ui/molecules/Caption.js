import { useState } from 'react';

import { CommentIcon, HeartFill, HeartOutline } from '../../assets/Icons';
import { useSelector } from 'react-redux';
import { selectComments } from '../../../store/slices/commentSlice';

export default function Caption({ title }) {
  const comments = useSelector(selectComments);

  const [likeCount, setLikeCount] = useState(23);
  const [userLike, setUserLike] = useState(false);

  function handleClick() {
    if (userLike) {
      setUserLike(false);
      setLikeCount(likeCount - 1);
    } else {
      setUserLike(true);
      setLikeCount(likeCount + 1);
    }
  }

  return (
    <div className="caption">
      {/* Title */}
      <div className="text-xl font-bold">{title}</div>

      {/* Stats */}
      <div className="flex space-x-2 items-center">
        <div className="flex space-x-1">
          <span>{comments.length}</span> <CommentIcon />
        </div>
        <div className="flex space-x-1" onClick={handleClick}>
          <span>{likeCount}</span>
          {userLike ? <HeartFill /> : <HeartOutline />}
        </div>
      </div>
    </div>
  );
}
