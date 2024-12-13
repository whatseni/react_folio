import "./modal.css"

const data = {
  lg: {
    id: 1,
    title: "LG Pra.L Care 애플리케이션",
    skills: "HTML, CSS, Javascript, Github Actions",
    role: [
      "반응형 Webview 페이지 구현",
      "모바일 접근성을 위한 aria와 js로 음성, 자막, 초점 등 제공",
      "Github Actions을 이용해 안드로이드 설치 파일 자동 추출",
      "Github Actions을 이용해 iOS Testflight 자동 업로드"
    ]
  },
  kt: {
    id: 2,
    title: "KT Streaming VM 모니터링 페이지",
    skills: "React.js, Typescript, Express, Django",
    role: [
      "React.js, Material UI를 이용해 VM 데이터 모니터링 페이지 구현",
      "사내 공통 컴포넌트 React.js, Typescript, Rollup을 이용해 라이브러리화",
      "클라이언트 페이지 node-ssh를 이용해 자동 클라우드 배포",
      "Express와 Django를 이용해 클라이언트에서 사용할 api 구현"
    ]
  }
}

export default function Modal({ open, handleClose, modalState }) {
  if (!open) return null;
  return (
    <div className="modal__background" onClick={handleClose}>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <div className="modal__btn__container"><button className="modal__close" onClick={handleClose}>X</button></div>
        <div className="modal__content__container">
          <h2 className="">{data[modalState].title}</h2>
          <br />
          <h4>사용 기술 : {data[modalState].skills}</h4>
          <br />
          {
            data[modalState].role.map(item => (
              <>
                <h4>* {item}</h4>
                <br />
              </>
            ))
          }
        </div>
      </div>
    </div>
  )
}