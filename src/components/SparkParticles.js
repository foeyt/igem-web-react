import React, { useState, useCallback, useRef, useEffect } from 'react';
import Spark from './Spark';

// 预定义颜色数组
const SPARK_COLORS = [
  'radial-gradient(circle, #ff6b6b 0%, #feca57 50%, transparent 100%)',
  'radial-gradient(circle, #feca57 0%, #ff6b6b 50%, transparent 100%)',
  'radial-gradient(circle, #48dbfb 0%, #ff9ff3 50%, transparent 100%)',
  'radial-gradient(circle, #ff9ff3 0%, #48dbfb 50%, transparent 100%)',
  '#ff6b6b',
  '#feca57',
  '#48dbfb',
  '#ff9ff3'
];

const SparkParticles = ({ 
  enabled = true, 
  throttleMs = 50,
  maxSparks = 50 
}) => {
  const [sparks, setSparks] = useState([]);
  const lastSparkTime = useRef(0);  // 正确定义在这里
  const sparkIdCounter = useRef(0);

  // 创建新火花
  const createSpark = useCallback((x, y) => {
    if (!enabled) return;

    const now = Date.now();
    // 节流控制
    if (now - lastSparkTime.current < throttleMs) return;
    lastSparkTime.current = now;

    const id = sparkIdCounter.current++;
    const color = SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)];
    
    const newSpark = {
      id,
      x,
      y,
      color,
    };

    setSparks(prev => {
      // 限制最大火花数量，移除旧的
      const updated = [...prev, newSpark];
      if (updated.length > maxSparks) {
        return updated.slice(updated.length - maxSparks);
      }
      return updated;
    });
  }, [enabled, throttleMs, maxSparks]);

  // 移除完成的火花
  const removeSpark = useCallback((id) => {
    setSparks(prev => prev.filter(spark => spark.id !== id));
  }, []);

  // 全局事件监听
  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e) => {
      createSpark(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      createSpark(touch.clientX, touch.clientY);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [enabled, createSpark]);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1000,
      }}
    >
      {sparks.map(spark => (
        <Spark
          key={spark.id}
          x={spark.x}
          y={spark.y}
          color={spark.color}
          onComplete={() => removeSpark(spark.id)}
        />
      ))}
    </div>
  );
};

export default SparkParticles;