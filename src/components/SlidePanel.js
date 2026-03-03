import React, { useState, useRef, useEffect } from 'react';
import '../css/SlidePanel.css';


/**
 * 侧边栏接入 GitTalk 实现评论区，GitTalk 参考官方文档。
 * @returns 侧边栏 JSX
 */
const SlidePanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Gitalk 配置
  useEffect(() => {
    if (isOpen && window.Gitalk) {
      const gitalk = new window.Gitalk({
        clientID: process.env.REACT_APP_GITHUB_CLIENT_ID,
        clientSecret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
        repo: process.env.REACT_APP_GITHUB_REPO,
        owner: process.env.REACT_APP_GITHUB_OWNER,
        admin: [process.env.REACT_APP_GITHUB_OWNER],
        id: window.location.pathname,
        distractionFreeMode: false
      });
      gitalk.render('gitalk-container');
    }
  }, [isOpen]);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* 按钮 - 完全独立 */}
      <button 
        className={`slide-button ${isOpen ? 'open' : ''}`}
        onClick={togglePanel}
      >
        <span className="arrow">◀</span>
        <span className="button-text">评论</span>
      </button>

      {/* 侧边栏 */}
      <div className={`side-panel ${isOpen ? 'open' : ''}`}>
        <div className="panel-header">
          <h3>给出你一针见血的评价吧</h3>
          <button className="close-btn" onClick={togglePanel}>✕</button>
        </div>
        <div id="gitalk-container"></div>
      </div>
    </>
  );
};

export default SlidePanel;
