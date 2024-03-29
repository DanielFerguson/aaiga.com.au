const NewsletterCta = () => {
  return (
    <section id="newsletter" className="mt-24">
      <div className="py-10 px-6 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-3xl sm:py-16 sm:px-12 lg:p-20 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            Sign up for our newsletter
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-fuchsia-100">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            Lorem cupidatat commodo. Elit sunt amet fugiat.
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
              className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-fuchsia-800 hover:bg-fuchsia-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-fuchsia-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
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
    </section>
  );
};

export default NewsletterCta;
