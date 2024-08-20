import React from "react";
import { GithubOne, Home, Mail } from "@icon-park/react";
import CustomLink from "@/components/customLink";
import Package from "../../package.json";

const Footer = () => {
  // 加载配置
  const githubName = import.meta.env.VITE_GITHUB_NAME;
  const homeUrl = import.meta.env.VITE_HOME_URL;
  const emailUrl = import.meta.env.VITE_EMAIL_URL;
  const siteIcp = import.meta.env.VITE_SITE_ICP;

  return (
    <footer id="footer">
      <div className="social">
        <CustomLink iconDom={<Home />} to={homeUrl} />
      </div>
      <div className="text">
        <p>
          基于 
          <CustomLink to="https://uptimerobot.com/" text="UptimeRobot" />
           接口 | 检测频率 5 分钟
        </p>
        <p>
          Copyright © 2022 - {new Date().getFullYear()}
           
          <CustomLink to="https://www.geekfunlab.com/" text="极客趣味工作室" />
          {siteIcp ? (
            <>
              <CustomLink to={siteIcp} text={siteIcp} />
            </>
          ) : null}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
