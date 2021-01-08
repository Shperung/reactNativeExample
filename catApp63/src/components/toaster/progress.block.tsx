import React, {useState, useEffect} from 'react';

import * as Progress from 'react-native-progress';

type Props = {
  isProgress: boolean;
};

const ProgressBlock = (props: Props) => {
  let intreval = null;
  const {isProgress} = props;
  const tick = 1000 / 60; // 1секунда/60герц = 16.6 міллисекунд проходе  заміна кадра. за 16мс і кадр
  // час анімації
  const duration = 4200;

  // висота для анімації
  const height = 1;

  const [animatedHeight, setAnimatedHeight] = useState(1);

  const handleAmimated = () => {
    if (intreval) {
      // на всякий випадок очищаємо
      clearInterval(intreval);
    }

    // задаємо старт анімації
    let start = Date.now();

    intreval = setInterval(() => {
      // різниці часу
      let timePassed = Date.now() - start;

      // якщо різниця часу не виходе за рамки duration то анімуємо
      if (timePassed <= duration) {
        // ділимо час що минув на загальний
        const timeDivide = timePassed / duration;
        // варіант на сінусах  const curentIndent = Math.sin((timeDivide) * (Math.PI / 2)) * height;
        // варіант на ізінгові
        const curentIndent = height - timeDivide;

        // ставлю висоту анімовано
        setAnimatedHeight(curentIndent);
      } else {
        // коли різниця часу зрівнялася з тривалістю то чистимо інтервал і задаємо бажану висоту
        if (intreval) {
          clearInterval(intreval);
        }
        setAnimatedHeight(0);
      }
    }, tick);
  };

  useEffect(() => {
    if (isProgress) handleAmimated();
  }, [isProgress]);

  return (
    <Progress.Circle
      size={30}
      progress={animatedHeight}
      direction="counter-clockwise"
      color="rgba(54, 54, 54, 0.5)"
      borderWidth={0}
      animated
      strokeCap="round"
      thickness={5}
    />
  );
};

export default ProgressBlock;
