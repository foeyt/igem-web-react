import React, { useState } from "react";

const ContentPages = ({ onCollapse }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      title: "个人介绍",
      content: (
        <div class="text-block">
          <p>陌生人你好，我是李有鑫，赛博世界中的名称为 Razorsax。</p>
          <p>
            现就读于中国科学技术大学 (USTC) 的信息科学技术学院，是一名 2025
            年入学的小登，从此开始了被各路大佬暴打(非物理、非 M 倾向)的历程。
          </p>
          <p>
            本页面是我用于 iGEM-Web组
            培训所使用的个人简历页面，我自己的个人博客参见：
            <a class="blog" href="https://foeyt.github.io/">
              Link
            </a>
            。
          </p>
        </div>
      ),
    },
    {
      title: "掌握技能",
      content: (
        <ul class="skill-list">
          <li> 后端：会用 C/C++/Java/Python，正在学习 Rust；</li>
          <li> 前端：会用 HTML/CSS/JavaScript，正在学习 React + Vue；</li>
          <li>
            {" "}
            运维：用过 Debian/Docker，在个人电脑上部署并使用 WSL2 + Debian；
          </li>
          <li>
            {" "}
            运用 Hexo + NexT 搭建个人博客，运用 Dify 本地部署 AI 智能体。
          </li>
        </ul>
      ),
    },
    {
      title: "兴趣爱好",
      content: (
        <ul class="hobby-list">
          <li> 单机游戏重度依赖 + 非专业游戏评鉴者和设计爱好者；</li>
          <li>
            {" "}
            网上冲浪成瘾 + 无意义搞笑 meme 爱好者 + 神秘的笑点 + 爱好搬 💩；
          </li>
          <li>
            {" "}
            网络键盘大战旁观者 + ACG 圈子都在混的透明人 +
            科技学术历史怪谈推理都在刷的神秘首页推荐；
          </li>
          <li> 极端社恐令人震惊！</li>
        </ul>
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
