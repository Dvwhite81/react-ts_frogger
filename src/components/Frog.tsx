import { useEffect, useRef, useState } from 'react';
import { BOARD_SIZE, FROG_IMG, SQUARE_SIZE } from '../utils/constants';
import {
  getFrogStartPosition,
  getNextImage,
  isArrowPress,
} from '../utils/helpers';

interface ClickEvent {
  key: string;
}

const Frog = () => {
  const { bottom, left } = getFrogStartPosition();

  const frogRef = useRef<HTMLDivElement>(null);

  const [bottomPosition, setBottomPosition] = useState(bottom);
  const [leftPosition, setLeftPosition] = useState(left);
  const [img, setImg] = useState(FROG_IMG);
  // const [isMoving, setIsMoving] = useState(false);

  const animate = () => {
    const nextImg = getNextImage(img);
    setImg(nextImg);
  };

  const move = (key: string) => {
    console.log('move key:', key);

    switch (key) {
      //
      //
      // Need to know where closed bushes are to block
      case 'ArrowUp': {
        const possibleBottom = bottomPosition + SQUARE_SIZE;
        const isBlocked = possibleBottom > BOARD_SIZE - SQUARE_SIZE;
        console.log('isBlocked:', isBlocked);
        const newBottom = isBlocked ? bottomPosition : possibleBottom;
        setBottomPosition(newBottom);
        break;
      }
      case 'ArrowDown': {
        const possibleBottom = bottomPosition - SQUARE_SIZE;
        console.log('possibleBottom:', possibleBottom);
        const isBlocked = possibleBottom < -10;
        console.log('isBlocked:', isBlocked);
        const newBottom = isBlocked ? bottomPosition : possibleBottom;
        setBottomPosition(newBottom);
        break;
      }
      case 'ArrowLeft': {
        const possibleLeft = leftPosition - SQUARE_SIZE;
        const isBlocked = possibleLeft < 0;
        console.log('isBlocked:', isBlocked);
        const newLeft = isBlocked ? leftPosition : possibleLeft;
        setLeftPosition(newLeft);
        break;
      }
      case 'ArrowRight': {
        const possibleLeft = leftPosition + SQUARE_SIZE;
        const isBlocked = possibleLeft > BOARD_SIZE;
        console.log('isBlocked:', isBlocked);
        const newLeft = isBlocked ? leftPosition : possibleLeft;
        setLeftPosition(newLeft);
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleKeyDown = (e: ClickEvent) => {
    const { key } = e;

    if (isArrowPress(key)) {
      move(key);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      className="frog-container"
      style={{
        bottom: `${bottomPosition}px`,
        left: `${leftPosition}px`,
        transform: 'translate(-50%, -50%)',
      }}
      onKeyDown={handleKeyDown}
      ref={frogRef}
    >
      <img className="frog-img" alt="frog" src={img} />
    </div>
  );
};

export default Frog;
