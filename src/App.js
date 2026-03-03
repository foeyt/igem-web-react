import React, { useState } from 'react';
import './css/App.css';
import SparkParticles from './components/SparkParticles';
import ContentPages from './components/ContentPages';
import SlidePanel from './components/SlidePanel';

function App() {
  const [isSplit, setIsSplit] = useState(false);
  
  const heroUrl = process.env.PUBLIC_URL + "/assets/img/hero.jpeg";
  const heroTopUrl = process.env.PUBLIC_URL + "/assets/img/hero-top.jpeg";
  const heroBottomUrl = process.env.PUBLIC_URL + "/assets/img/hero-bottom.jpeg";

  // 点击图片后分割
  const handleImageClick = () => {
    setIsSplit(true);
  };

  // 最后一页重新返回一开始状态
  const handleCollapse = () => {
    setIsSplit(false);
  };

  return (
    <div className="hero-page">
      {/* 粒子效果组件 */}
      <SparkParticles enabled={true} throttleMs={50} maxSparks={50} />
      
      {/* 上半部分 Banner */}
      <div 
        className={`top-banner ${isSplit ? 'visible' : ''}`}
        onClick={handleCollapse}
      >
        <img src={heroTopUrl} alt="Top" />
      </div>
      
      {/* 中间内容区域 - 使用 ContentPages 组件 */}
      <div className={`center-content ${isSplit ? 'visible' : ''}`}>
        <ContentPages onCollapse={handleCollapse} />
      </div>
      
      {/* 下半部分 Banner */}
      <div 
        className={`bottom-banner ${isSplit ? 'visible' : ''}`}
        onClick={handleCollapse}
      >
        <img src={heroBottomUrl} alt="Bottom" />
      </div>
      
      {/* 初始完整图片 */}
      <div 
        className={`full-image ${isSplit ? 'hidden' : ''}`}
        onClick={handleImageClick}
      >
        <img src={heroUrl} alt="Hero" />
        <div className="click-text">试试点击</div>
      </div>

      {/* 滑动评论面板 */}
      <SlidePanel />
    </div>
  );
}

export default App;
