import Link from "next/link";
import { NextSeo, ArticleJsonLd } from "next-seo";
import Image from "next/image";
import { getPosts } from "@/lib/wordpress";
import * as dayjs from "dayjs";
import { Menu } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";

import BgDaonate from "../public/assets/index/bg-daonate.jpg";
import BgObserver from "../public/assets/index/bg-observer.jpg";
import BgPerfectWorld from "../public/assets/index/bg-perfect-world.jpg";
import BgYfocus from "../public/assets/index/bg-yfocus.jpg";

import BgOnwards from "../public/assets/index/bg-onwards.png";
import BgUpwards from "../public/assets/index/bg-upwards.png";
import BgSimpleSeo from "../public/assets/index/bg-simple-seo.png";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import NewsletterCta from "@/components/newsletter-cta.js";
import Layout from "@/components/layout";

const projects = [
  {
    title: "Daonate",
    header: "110% larger social impact",
    link: "#",
    image: BgDaonate,
    span: 2,
  },
  {
    title: "yFocus",
    header: "Validate ideas today",
    link: "#",
    image: BgYfocus,
    span: 1,
  },
  {
    title: "Perfect World",
    header: "Meaningless clothing",
    link: "#",
    image: BgPerfectWorld,
    span: 1,
  },
  {
    title: "Observer",
    header: "Monitor all the things",
    link: "#",
    image: BgObserver,
    span: 2,
  },
];
const courses = [
  {
    title: "Onwards",
    header: "110% larger social impact",
    link: "#",
    image: BgOnwards,
    span: 3,
  },
  {
    title: "Upwards",
    header: "110% larger social impact",
    link: "#",
    image: BgUpwards,
    span: 2,
  },
  {
    title: "Simple SEO",
    header: "110% larger social impact",
    link: "#",
    image: BgSimpleSeo,
    span: 1,
  },
];

const title = "Accelerate your startup journey";
const description = "This example uses more of the available config options.";
const url = "https://aaiga.com.au";

const PrettySpanLink = ({ item }) => {
  return (
    <div
      className={[
        "lg:h-96 rounded-xl relative cursor-pointer",
        item.span == 2 && "md:col-span-2",
        item.span == 3 && "md:col-span-3",
      ].join(" ")}
    >
      <Image
        src={item.image}
        alt={item.name}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="rounded-xl z-0"
      />
      <div className="z-10 relative p-8 flex flex-col justify-between h-full text-white font-bold">
        <p className="text-5xl leading-tight">{item.header}</p>
        <div className="ml-auto text-2xl mt-10">{item.title}</div>
      </div>
    </div>
  );
};

const FeaturedArticle = ({ post }) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <div className="h-48 w-full relative">
          <Image
            src={post.featuredImage.node.mediaItemUrl}
            alt={post.title}
            layout="fill"
            className="z-0"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="flex-1 bg-white p-4 flex flex-col justify-between z-10 m-3 rounded-lg">
        <div className="flex-1">
          <p className="text-sm font-medium">
            {post.categories.edges.map(({ node }) => (
              <Link key={node.slug} href="/articles">
                <a className="text-indigo-600">{node.name}</a>
              </Link>
            ))}
          </p>
          <a href={`/articles/${post.slug}`} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">{post.title}</p>
            <div
              className="mt-3 text-base text-gray-500"
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            ></div>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <a href={`/authors/${post.author.node.slug}`}>
              <span className="sr-only">{post.author.node.name}</span>
              <img
                className="h-10 w-10 rounded-full"
                src={post.author.node.avatar.url}
                alt={post.author.node.name}
              />
            </a>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              <a
                href={`/authors/${post.author.node.slug}`}
                className="hover:underline"
              >
                {post.author.node.name}
              </a>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={post.date}>
                {dayjs(post.date).format("MMM DD, YYYY")}
              </time>
              <span aria-hidden="true">&middot;</span>
              <span>3 min read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home({ articles }) {
  return (
    <Layout>
      <NextSeo title={title} description={description} canonical={url} />
      <main className="grid gap-24">
        {/* Projects */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <PrettySpanLink key={index} item={project} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/projects">
              <a>view more</a>
            </Link>
          </div>
        </section>

        {/* Articles */}
        <section>
          <h2>articles.</h2>
          <div className="mt-12 mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
            {articles.map((article) => (
              <FeaturedArticle key={article.title} post={article} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/articles">
              <a>view more</a>
            </Link>
          </div>
        </section>

        {/* Courses */}
        <section>
          <h2>courses.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {courses.map((course, index) => (
              <PrettySpanLink key={index} item={course} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/projects">
              <a>view more</a>
            </Link>
          </div>
        </section>

        <NewsletterCta />
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  let data = await getPosts();

  return {
    props: {
      articles: data.posts.nodes,
    },
  };
}
