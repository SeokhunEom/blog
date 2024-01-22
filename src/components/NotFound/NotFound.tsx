import React from "react";

import * as S from "./styled";

const NotFound: React.FC = () => {
  return (
    <>
      <S.Heading>Oops!</S.Heading>
      <S.Emoji>🧐</S.Emoji>
      <S.Message>아직 해당 페이지가 준비되지 않았습니다.</S.Message>
      <S.Message>
        <S.Link href="/">홈 화면으로 돌아가기</S.Link>
      </S.Message>
    </>
  );
};

export default NotFound;
