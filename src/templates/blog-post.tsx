import React from "react";
import { Link, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import readingTime from "reading-time";

import Seo from "../components/seo";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Tags from "../components/tags";
import * as styles from "./blog-post.module.css";

interface RecipeTemplateProps {
  data: {
    contentfulBlogPost: any;
    previous: any;
    next: any;
  };
  location: any;
}

const BlogPostTemplate: React.FC<RecipeTemplateProps> = props => {
  const post = props.data.contentfulBlogPost;
  const previous = props.data.previous;
  const next = props.data.next;

  const plainTextDescription = documentToPlainTextString(
    JSON.parse(post.description.raw)
  );

  const plainTextBody = documentToPlainTextString(JSON.parse(post.body.raw));
  const { minutes: timeToRead } = readingTime(plainTextBody);

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const { gatsbyImage, description } = node.data.target;
        const image = getImage(gatsbyImage);

        if (!image) {
          return null;
        }
        return <GatsbyImage image={image} alt={description} />;
      },
    },
  };

  return (
    <Layout location={props.location}>
      <Seo
        title={post.title}
        description={plainTextDescription}
        image={`http:${post.heroImage.resize.src}`}
      />
      <Hero
        image={post.heroImage?.gatsbyImage}
        title={post.title}
        content={post.description}
      />
      <div className={styles.container}>
        <span className={styles.meta}>
          {post.author?.name} &middot;{" "}
          <time dateTime={post.rawDate}>{post.publishDate}</time> – {timeToRead}{" "}
          minute read
        </span>
        <div className={styles.article}>
          <div className={styles.body}>
            {post.body?.raw && renderRichText(post.body, options)}
          </div>
          <Tags tags={post.tags} />
          {(previous || next) && (
            <nav>
              <ul className={styles.articleNavigation}>
                {previous && (
                  <li>
                    <Link to={`/blog/${previous.slug}`} rel="prev">
                      ← {previous.title}
                    </Link>
                  </li>
                )}
                {next && (
                  <li>
                    <Link to={`/blog/${next.slug}`} rel="next">
                      {next.title} →
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      author {
        name
      }
      publishDate(formatString: "MMMM Do, YYYY")
      rawDate: publishDate
      heroImage {
        gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(height: 630, width: 1200) {
          src
        }
      }
      body {
        raw
      }
      tags
      description {
        raw
      }
    }
    previous: contentfulBlogPost(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulBlogPost(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
`;
