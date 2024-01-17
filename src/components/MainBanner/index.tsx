import { useState } from "react";
import ReactRotatingText from "react-rotating-text";

import { Author } from "@/src/type";

import Image from "../Image";
import * as S from "./styled";

type MainBannerProps = {
  author: Author;
};

const MainBanner: React.FC<MainBannerProps> = ({ author }) => {
  const { stack, social, name, nickname } = author;

  // const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  return (
    <S.Wrapper>
      <S.IntroWrapper>
        <S.Title>
          안녕하세요!
          <br />
          <strong>
            <ReactRotatingText items={stack} />
          </strong>
          <span>를 좋아하는</span>
          <br />
          개발자{" "}
          <strong>
            <ReactRotatingText items={[name, nickname]} />
          </strong>
          입니다.
        </S.Title>
        <Image alt="thumbnail" src="thumbnail.png" />
        <S.SocialWrapper>
          {Object.keys(social).map(
            (link, index) =>
              social[link as keyof typeof social] && (
                <S.SocialButton
                  key={index}
                  target="_blank"
                  href={social[link as keyof typeof social]}
                >
                  {link}
                </S.SocialButton>
              )
          )}
          <div />
        </S.SocialWrapper>
      </S.IntroWrapper>
    </S.Wrapper>
  );
};

export default MainBanner;
