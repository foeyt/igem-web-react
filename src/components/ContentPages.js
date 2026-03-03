import React, { useState } from "react";
import "../css/ContentPages.css"
import SkillGrid from "./SkillGrid";

/**
 * 此文件用于内容写作。
 * 通过点击可以进行切换下一页，同时加入页面指示器圆点。
 * @returns 内容文本的 JSX。
 */
const ContentPages = ({ onCollapse }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      title: "个人介绍",
      content: (
        <div className="resume-table">
          <div className="resume-row">
            <span className="resume-label">姓名</span>
            <span className="resume-value">李有鑫 ( 赛博世界用名: Razorsax )</span>
          </div>
          <div className="resume-row">
            <span className="resume-label">就读学院</span>
            <span className="resume-value">中国科学技术大学信息科学技术学院</span>
          </div>
          <div className="resume-row">
            <span className="resume-label">目前学历</span>
            <span className="resume-value">本科一年级在读</span>
          </div>
          <div className="resume-row">
            <span className="resume-label">兴趣方向</span>
            <span className="resume-value">计算机图形学, 各种编程语言, 生成式人工智能, 电子游戏设计</span>
          </div>
        </div>
      ),
    },
    {
      title: "掌握技能",
      content: (
        <SkillGrid />
      ),
    },
    {
      title: "性格爱好",
      content: (
        <div className="page-content">
          <ul className="hobby-list">
            <li>
              <span className="hobby-icon">🎮</span>
              <span className="hobby-text">单机游戏重度依赖，非专业游戏评鉴者和设计爱好者，开源社区小透明。</span>
            </li>
            <li>
              <span className="hobby-icon">👻</span>
              <span className="hobby-text">无意义搞笑 meme 爱好者，神秘的笑点令人反省。</span>
            </li>
            <li>
              <span className="hobby-icon">🏄</span>
              <span className="hobby-text">网络冲浪手，科技/学术/历史/怪谈/推理/编程/游戏等广泛涉猎中···</span>
            </li>
            <li>
              <span className="hobby-icon">😱</span>
              <span className="hobby-text">社恐!!!</span>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  const handleClick = () => {
    if (currentPage === 2) {
      // 第三页点击后收拢，重置到第一页
      setCurrentPage(0);
      onCollapse();
    } else {
      // 切换到下一页
      setCurrentPage(currentPage + 1);
    }
  };

  const current = pages[currentPage];

  return (
    <div className="pages-container" onClick={handleClick}>
      <h1>{current.title}</h1>
      <p>{current.content}</p>
      <div className="page-indicator">
        {pages.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentPage ? "active" : ""}`}
          />
        ))}
      </div>
      <div className="click-text">试试点击</div>
    </div>
  );
};

export default ContentPages;
