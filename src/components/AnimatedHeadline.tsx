import React from 'react';
import { TypeAnimation } from 'react-type-animation';

interface AnimatedHeadlineProps {
  sequence: (string | number | (() => void))[];
  className?: string;
  style?: React.CSSProperties;
  as?: keyof JSX.IntrinsicElements;
  repeat?: number;
  speed?: number;
  cursor?: boolean;
}

const AnimatedHeadline: React.FC<AnimatedHeadlineProps> = ({
  sequence,
  className = '',
  style = {},
  as = 'h1',
  repeat = Infinity,
  speed = 50,
  cursor = true,
  ...rest
}) => {
  const Wrapper = as as any;
  return (
    <Wrapper className={className} style={style}>
      <TypeAnimation
        sequence={sequence}
        repeat={repeat}
        speed={speed}
        cursor={cursor}
        style={{ display: 'inline-block' }}
        {...rest}
      />
    </Wrapper>
  );
};

export default AnimatedHeadline; 