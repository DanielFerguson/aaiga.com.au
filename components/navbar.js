import Link from "next/link";

const NavBar = () => {
  return (
    <header>
      <nav className="hidden lg:grid grid-cols-3 items-center justify-center">
        {/* Page Navigation */}
        <div className="flex gap-12">
          <Link href="/projects">
            <a>projects</a>
          </Link>
          <Link href="/articles">
            <a>articles</a>
          </Link>
          <Link href="#">
            <a>courses</a>
          </Link>
        </div>
        {/* Logo */}
        <div>
          <Link href="/" passHref>
            <h1 className="text-center text-5xl font-bold cursor-pointer">
              <span className="brand">aaiga.</span>
            </h1>
          </Link>
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
      <nav className="lg:hidden flex items-center justify-between">
        <div>
          <h1 className="text-center text-5xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-pink-500">
              aaiga.
            </span>
          </h1>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
