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
    const isFrog = true;
    const nextImg = getNextImage(img, isFrog);
    console.log('nextImg:', nextImg);
    setImg(nextImg);
  };

  const animateOneCycle = (step: number) => {
    const interval = 20;
    let newBottom = bottomPosition;

    setTimeout(() => {
      console.log('2');
      setImg('/frog-move-02.png');
      newBottom += step;
      setBottomPosition(newBottom);
    }, interval);
    setTimeout(() => {
      console.log('3');
      setImg('/frog-move-03.png');
      newBottom += step;
      setBottomPosition(newBottom);
    }, interval * 2);
    setTimeout(() => {
      console.log('4');
      setImg('/frog-move-04.png');
      newBottom += step;
      setBottomPosition(newBottom);
    }, interval * 3);
    setTimeout(() => {
      console.log('5');
      setImg('/frog-move-05.png');
      newBottom += step;
      setBottomPosition(newBottom);
    }, interval * 4);
    setTimeout(() => {
      console.log('6');
      setImg('/frog-move-06.png');
      newBottom += step;
      setBottomPosition(newBottom);
    }, interval * 5);
    setTimeout(() => {
      console.log('7');
      setImg('/frog-move-07.png');
      newBottom += step;
      setBottomPosition(newBottom);
    }, interval * 6);
    setTimeout(() => {
      console.log('1');
      setImg('/frog-move-01.png');
      newBottom += step;
      setBottomPosition(newBottom);
    }, interval * 7);
  };

  const moveWithAnimate = (newBottom: number) => {
    const difference = Math.abs(newBottom - bottomPosition);
    const step = difference / 7;
    console.log('bottomPosition:', bottomPosition);
    console.log('newBottom:', newBottom);
    console.log('difference:', difference);
    console.log('step:', step);
    animateOneCycle(step);
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
        moveWithAnimate(newBottom);
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
