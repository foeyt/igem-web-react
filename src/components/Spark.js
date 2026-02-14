import React, { useEffect, useState } from 'react';

/**
 * 此文件用于火花粒子的显示方式与样式，生成火花粒子效果，由 Kimi 提供设计。
 * 需要注意的是，这里存在明显的性能问题，需要进行优化。
 */
const Spark = ({ x, y, color, onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 动画结束后移除
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 1000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  // 随机飞散方向
  const angle = Math.random() * Math.PI * 2;
  const distance = 30 + Math.random() * 50;
  const tx = Math.cos(angle) * distance;
  const ty = Math.sin(angle) * distance;

  const sparkStyle = {
    position: 'absolute',
    left: x,
    top: y,
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    background: color,
    pointerEvents: 'none',
    boxShadow: `0 0 6px ${color}, 0 0 12px ${color}`,
    animation: 'spark-fade 1s ease-out forwards',
    '--tx': `${tx}px`,
    '--ty': `${ty}px`,
  };

  return <div style={sparkStyle} />;
};

export default Spark;
