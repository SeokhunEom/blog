import * as React from "react";

const AboutPage = () => {
  return (
    <main>
      <h1>About Me</h1>
      <p>
        개발을 통해 우리 삶의 다양한 문제를 해결하는 것이 목표인 주니어
        개발자입니다.
      </p>
    </main>
  );
};

export const Head = () => <title>About</title>;

export default AboutPage;
