import React from "react";
import BlogCard from "./BlogCard/BlogCard";
import styles from "./BlogSection.module.scss";

function BlogSection() {
  return (
    <div className={styles.blogWrapper}>
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
}

export default BlogSection;
