import React from "react";

const CV =
  "https://rocky-ladybug-b5d.notion.site/ABOUT-SE-EUN-91337cfcb18544109263b1875cd85b3c";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} target="_blank" className="btn">
        Link Notion
      </a>
      <a href="https://github.com/seeys" className="btn btn-primary">
        My Github
      </a>
    </div>
  );
};

export default CTA;
