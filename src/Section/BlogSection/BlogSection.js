import React from "react";
import BlogCard from "./BlogCard/BlogCard";
import styles from "./BlogSection.module.scss";
import blogImg1 from "../../Images/blogCover.jpeg";
import blogImg2 from "../../Images/blogCover2.PNG";
import blogImg3 from "../../Images/blogCover3.PNG";

function BlogSection() {
  const link1 =
    "https://yk404.medium.com/some-javascript-fundamental-concepts-126b3a5427b5";
  const link2 =
    "https://yk404.medium.com/javascript-array-flashback-f31e1f3a273";
  const link3 = "https://yk404.medium.com/react-recap-ca554322e06d";

  const content1 = {
    title: `Javascript Fundamentals`,
    parah: `Some javascript fundamentals can be hard to understand at later stages, Here are some javascript fundamentals explained`,
  };
  const content2 = {
    title: `JavaScript Array Flashback`,
    parah: `Having a strong grasp on javascript array is a key part in benign a good javascript developer`,
  };
  const content3 = {
    title: `React Recap`,
    parah: `Recap of some important react concepts and hooks for a solid understanding of react.js`,
  };
  return (
    <div id="blog">
      <h1 className="secHeader">My Blogs</h1>
      <div className={styles.blogWrapper}>
        <BlogCard
          blogLink={link1}
          bgImg={blogImg1}
          title={content1.title}
          parah={content1.parah}
        />
        <BlogCard
          blogLink={link2}
          bgImg={blogImg2}
          title={content2.title}
          parah={content2.parah}
        />
        <BlogCard
          blogLink={link3}
          bgImg={blogImg3}
          title={content3.title}
          parah={content3.parah}
        />
      </div>
    </div>
  );
}

export default BlogSection;
