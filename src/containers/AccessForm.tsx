export default function AccessForm() {
  return (
    <div className=" mx-5 rounded-[0.5625rem] bg-dark-blue-intro-bg px-7 py-9 text-center">
      <h2 className="mb-4 font-RalewayBold text-lg leading-6">
        Get early access today
      </h2>
      <p className="mb-8 font-OpenSans">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <div>
        <form>
          <input
            id="email"
            type="email"
            placeholder="email@example.com"
            className="mb-6 min-h-[3rem] w-full rounded-full pl-7 font-OpenSans text-[0.625rem] text-dark-blue-main"
          ></input>
          <button
            type="button"
            className="min-h-[3rem] w-full rounded-full bg-gradient-to-r from-cyan to-blue font-RalewayBold"
          >
            Get Started For Free
          </button>
        </form>
      </div>
    </div>
  );
}
