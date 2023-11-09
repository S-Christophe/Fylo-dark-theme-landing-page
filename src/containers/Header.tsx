// import vendors
import Image from "next/image";
import Link from "next/link";

const links = ["Features", "Team", "Sign In"];

export default function Header() {
  return (
    <header className="mx-auto mb-12 mt-6 flex px-[1.375rem] font-Raleway md:mt-[4.5625rem] lg:mb-[5.25rem] xl:max-w-[calc(80rem+1.375rem+1.375rem)]">
      <a href="/" className="">
        <Image
          src="./assets/images/logo.svg"
          alt="Fylo dark theme landing page"
          width={176}
          height={52}
          className="w-20 md:w-auto"
          priority
        />
      </a>
      <nav className="ml-auto">
        <ul className="flex h-full items-center gap-6 text-xs md:gap-[3.625rem] md:text-base">
          {links.map((name, i) => (
            <li key={i}>
              <Link
                href="#"
                className="after:block after:h-[0.125rem] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
