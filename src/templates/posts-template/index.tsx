import { navigate } from "gatsby";
import React, { useEffect, useMemo, useRef } from "react";

import PostCard from "@/src/components/PostCard";
import Seo from "@/src/components/Seo";
import Layout from "@/src/layout";
import PostClass from "@/src/models/post";
import { AllMarkdownRemark } from "@/src/type";

import * as S from "./styled";

type PostsTemplateProps = {
  location: Location;
  pageContext: {
    currentCategory: string;
    categories: string[];
    edges: AllMarkdownRemark["edges"];
  };
};

const PostsTemplate: React.FC<PostsTemplateProps> = ({
  location,
  pageContext,
}) => {
  const { edges, currentCategory } = pageContext;
  const { categories } = pageContext;
  const filteredCategories = useMemo(
    () => categories.filter((title) => title !== "Test"),
    [categories]
  );
  const currentTabIndex = useMemo(
    () =>
      filteredCategories.findIndex((category) => category === currentCategory),
    [filteredCategories, currentCategory]
  );
  const posts = edges.map(({ node }) => new PostClass(node));
  const filteredPosts = useMemo(
    () => posts.filter((post) => post.title !== "Test"),
    [posts]
  );

  const onTabIndexChange = (value: number) => {
    if (value === 0) return navigate(`/posts`);
    navigate(`/posts/${filteredCategories[value]}`);
  };

  const ref = useRef<HTMLDivElement>(null);

  // currentTab이 가운데에 오도록 스크롤
  useEffect(() => {
    if (!ref.current) return;
    const currentTab = ref.current.children[currentTabIndex] as HTMLDivElement;
    ref.current.scrollTo({
      left:
        currentTab.offsetLeft -
        (ref.current.offsetWidth - currentTab.offsetWidth) / 2,
    });
  }, []);

  return (
    <Layout location={location}>
      <Seo title="seokhun.dev | Posts" />
      <S.CategoryWrapper>
        <S.CategoryTitle>{filteredCategories[currentTabIndex]}</S.CategoryTitle>
        <S.CategorySubtitle>{`${filteredPosts.length} post${
          filteredPosts.length < 2 ? "" : "s"
        }`}</S.CategorySubtitle>
      </S.CategoryWrapper>

      <S.TabWrapper>
        <S.Tabs ref={ref}>
          {filteredCategories.map((title, index) => (
            <S.Tab
              key={index}
              isSelected={currentTabIndex === index ? "true" : "false"}
              onClick={() => onTabIndexChange(index)}
            >
              {title}
            </S.Tab>
          ))}
        </S.Tabs>

        <S.PostCardsWrapper>
          {filteredPosts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </S.PostCardsWrapper>
      </S.TabWrapper>
    </Layout>
  );
};

export default PostsTemplate;
