import Link from "next/link";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { getAuthors, getPosts } from "@/lib/ghost";
import * as dayjs from "dayjs";
import { Menu } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";

import BgDaonate from "../public/assets/index/bg-daonate.jpg";
import BgObserver from "../public/assets/index/bg-observer.jpg";
import BgPerfectWorld from "../public/assets/index/bg-perfect-world.jpg";
import BgYfocus from "../public/assets/index/bg-yfocus.jpg";

import BgArticle from "../public/assets/index/bg-article.jpg";

import BgOnwards from "../public/assets/index/bg-onwards.png";
import BgUpwards from "../public/assets/index/bg-upwards.png";
import BgSimpleSeo from "../public/assets/index/bg-simple-seo.png";

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
const articles = [
  {
    title: "This is a title.",
    description:
      "This is some content for the article to give the users a basic idea of what the article will be about. It should be fairly short.",
    category: "Article",
    href: "#",
    readingTime: 3,
    author: {
      name: "Daniel Ferguson",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    image: BgArticle,
    date: "2020-05-20",
  },
  {
    title: "This is a comparison.",
    description:
      "This is some content for the article to give the users a basic idea of what the article will be about. It should be fairly short.",
    category: "Product Comparison",
    href: "#",
    readingTime: 3,
    author: {
      name: "Daniel Ferguson",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    image: BgArticle,
    date: "2020-05-20",
  },
  {
    title: "This is a title.",
    description:
      "This is some content for the article to give the users a basic idea of what the article will be about. It should be fairly short.",
    category: "Article",
    href: "#",
    image: BgArticle,
    readingTime: 3,
    author: {
      name: "Daniel Ferguson",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "2020-05-20",
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
const navigation = {
  aaiga: [
    { name: "Projects", href: "#" },
    { name: "Articles", href: "#" },
    { name: "Courses", href: "#" },
    { name: "Onwards", href: "#" },
    { name: "Upwards", href: "#" },
  ],
  projects: [
    { name: "Daonate", href: "#" },
    { name: "yFocus", href: "#" },
    { name: "Perfect World", href: "#" },
    { name: "Observer", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Jobs", href: "#" },
  ],
  legal: [
    // { name: "Claim", href: "#" },
    // { name: "Privacy", href: "#" },
    // { name: "Terms", href: "#" },
  ],
  social: [
    // {
    //   name: "Facebook",
    //   href: "#",
    //   icon: (props) => (
    //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //       <path
    //         fillRule="evenodd"
    //         d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   ),
    // },
    // {
    //   name: "Instagram",
    //   href: "#",
    //   icon: (props) => (
    //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //       <path
    //         fillRule="evenodd"
    //         d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   ),
    // },
    // {
    //   name: "Twitter",
    //   href: "#",
    //   icon: (props) => (
    //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //       <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    //     </svg>
    //   ),
    // },
    // {
    //   name: "GitHub",
    //   href: "#",
    //   icon: (props) => (
    //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //       <path
    //         fillRule="evenodd"
    //         d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   ),
    // },
    // {
    //   name: "Dribbble",
    //   href: "#",
    //   icon: (props) => (
    //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //       <path
    //         fillRule="evenodd"
    //         d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   ),
    // },
  ],
};

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
            src={post.image}
            alt={post.title}
            layout="responsive"
            className="z-0"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between z-10 m-3 rounded-lg">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            <a href={post.category.href} className="hover:underline">
              {post.category.name}
            </a>
          </p>
          <a href={post.href} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">{post.title}</p>
            <p className="mt-3 text-base text-gray-500">{post.description}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <a href={post.author.href}>
              <span className="sr-only">{post.author.name}</span>
              <img
                className="h-10 w-10 rounded-full"
                src={post.author.imageUrl}
                alt=""
              />
            </a>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              <a href={post.author.href} className="hover:underline">
                {post.author.name}
              </a>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={post.datetime}>{post.date}</time>
              <span aria-hidden="true">&middot;</span>
              <span>{post.readingTime} read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home({ posts, authors }) {
  return (
    <div className="mx-auto max-w-6xl p-6">
      {/* TODO */}
      <NextSeo
        title="Aaiga | Accelerate your startup journey"
        description="This example uses more of the available config options."
        canonical="https://aaiga.com.au"
        openGraph={{
          type: "website",
          url: "https://aaiga.com.au",
          title: "Aaiga | Accelerate your startup journey",
          description:
            "This example uses more of the available config options.",
          images: [{ url: "https://aaiga.com.au/aaiga-dark.png" }],
          site_name: "Aaiga",
        }}
        twitter={{
          site: "@aaiga_au",
          cardType: "summary_large_image",
        }}
      />

      {/* Nav Bar */}
      <header>
        <nav className="hidden md:grid grid-cols-3 items-center justify-center text-slate-700 font-light">
          {/* Page Navigation */}
          <div className="flex gap-12">
            <Link href="/projects">
              <a>projects</a>
            </Link>
            <Link href="/articles">
              <a>articles</a>
            </Link>
            <Link href="#courses">
              <a>courses</a>
            </Link>
          </div>
          {/* Logo */}
          <div>
            <h1 className="text-center text-5xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-pink-500">
                aaiga.
              </span>
            </h1>
          </div>
          {/* Action Buttons */}
          <div className="flex gap-12 justify-end">
            <Link href="#newsletter">
              <a>newsletter</a>
            </Link>
            <Link href="/about">
              <a>about</a>
            </Link>
            <Link href="/contact">
              <a>contact</a>
            </Link>
          </div>
        </nav>
        <nav className="md:hidden flex items-center justify-between">
          <div>
            <h1 className="text-center text-3xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-pink-500">
                aaiga.
              </span>
            </h1>
          </div>
        </nav>
      </header>

      <main className="mt-16 grid gap-24">
        {/* Projects */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {projects.map((project) => (
              <PrettySpanLink key={project.name} item={project} />
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
            <Link href="/projects">
              <a>view more</a>
            </Link>
          </div>
        </section>

        {/* Courses */}
        <section>
          <h2>courses.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {courses.map((course) => (
              <PrettySpanLink key={course.name} item={course} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/projects">
              <a>view more</a>
            </Link>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section>
          <div className="max-w-7xl mx-auto">
            <div className="py-10 px-6 bg-fuchsia-600 rounded-3xl sm:py-16 sm:px-12 lg:p-20 lg:flex lg:items-center">
              <div className="lg:w-0 lg:flex-1">
                <h2 className="text-3xl font-extrabold tracking-tight text-white">
                  Sign up for our newsletter
                </h2>
                <p className="mt-4 max-w-3xl text-lg text-fuchsia-100">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui Lorem cupidatat commodo. Elit sunt amet fugiat.
                </p>
              </div>
              <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                <form className="sm:flex">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email-address"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-fuchsia-700 focus:ring-white rounded-md"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-fuchsia-500 hover:bg-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-fuchsia-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                  >
                    Notify me
                  </button>
                </form>
                <p className="mt-3 text-sm text-fuchsia-100">
                  We care about the protection of your data. Read our{" "}
                  <a href="#" className="text-white font-medium underline">
                    Privacy Policy.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-32" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <img className="h-10" src="/aaiga-logo.svg" alt="Aaiga" />
              <p className="text-gray-500 text-base">
                Making the world a better place through constructing elegant
                hierarchies.
              </p>
              <div className="flex space-x-6">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    aaiga
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.aaiga.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Projects
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.projects.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Company
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Legal
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2022 Aaiga, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();
  const authors = await getAuthors();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts, authors },
  };
}
