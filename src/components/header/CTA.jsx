import React from "react";

const CV =
  "https://rocky-ladybug-b5d.notion.site/106b210252c980b081bdf8efee721d4d?pvs=4";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} target="_blank" className="btn">
        Link CV
      </a>
      <a href="https://github.com/whatseni" className="btn btn-primary">
        My Github
      </a>
    </div>
  );
};

export default CTA;
