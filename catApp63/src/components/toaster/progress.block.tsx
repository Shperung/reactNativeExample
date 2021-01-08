import React, {useState, useEffect} from 'react';

import * as Progress from 'react-native-progress';

type Props = {
  isProgress: boolean;
  duration: number;
  color: string;
};

// 1секунда/60герц = 16.6 міллисекунд проходе  заміна кадра. за 16мс і кадр
const TICK = 1000 / 60;
// початкове значення прогресу
const START_PROGRESS = 1;

const ProgressBlock = (props: Props) => {
  const {isProgress, duration = 4000, color = 'rgba(54, 54, 54, 0.5)'} = props;
  const [animatedProgress, setAnimatedProgress] = useState(1);

  useEffect(() => {
    let intreval = null;
    if (isProgress) {
      // задаємо старт анімації
      let start = Date.now();

      intreval = setInterval(() => {
        // різниці часу
        let timePassed = Date.now() - start;
        // якщо різниця часу не виходе за рамки duration то анімуємо
        if (timePassed <= duration) {
          // ділимо час що минув на загальний
          const timeDivide = timePassed / duration;
          // анімуємо значеннявід 1-0
          const curentValue = START_PROGRESS - timeDivide;
          setAnimatedProgress(curentValue);
        } else {
          // коли різниця часу зрівнялася з тривалістю  задаємо прогрес 0
          setAnimatedProgress(0);
        }
      }, TICK);
    }

    return () => (intreval ? clearInterval(intreval) : null);
  }, [isProgress]);

  return (
    <Progress.Circle
      size={30}
      progress={animatedProgress}
      direction="counter-clockwise"
      color={color}
      borderWidth={0}
      strokeCap="round"
      thickness={5}
    />
  );
};

export default ProgressBlock;
