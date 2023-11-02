// import vendors
import Image from "next/image";
import Link from "next/link";

const firstUl = ["About Us", "Jobs", "Press", "Blog"];

const secondUl = ["Contact Us", "Terms", "Privacy"];

const socialNetworks = [
  {
    src: "./assets/images/icon-facebook.svg",
    alt: "icon facebook",
    width: 7,
    height: 15,
  },
  {
    src: "./assets/images/icon-twitter.svg",
    alt: "icon twitter",
    width: 15,
    height: 15,
  },
  {
    src: "./assets/images/icon-instagram.svg",
    alt: "icon instagram",
    width: 15,
    height: 15,
  },
];

export default function Footer() {
  return (
    <footer className=" bg-dark-blue-footer px-7 pb-[3.25rem] pt-[16.1875rem]  md:pt-[10.5625rem]">
      <div className="mx-auto xl:max-w-7xl xl:px-5">
        <a href="/" className="mb-[2.1875rem] block w-fit md:mb-[3.25rem]">
          <Image
            src="./assets/images/logo.svg"
            alt="Fylo dark theme landing page"
            width={176}
            height={52}
            className="w-[6.75rem]"
          />
        </a>
        <ul className="flex flex-col gap-14 md:flex-row md:justify-between md:gap-0">
          <li className="flex flex-col gap-4 lg:flex-row xl:gap-20">
            <div className="flex gap-7 md:max-w-[23.6875rem]">
              <Image
                src="./assets/images/icon-location.svg"
                alt="facebook"
                width={13}
                height={18}
                className="mt-2 h-[1.125rem] w-[0.8125rem]"
              />
              <p className="font-OpenSans text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div>
              <div className="mb-4 flex gap-[1.40625rem] lg:mt-1.5">
                <Image
                  src="./assets/images/icon-phone.svg"
                  alt="facebook"
                  width={18}
                  height={18}
                  className=" h-[1.125rem] w-[1.125rem]"
                />
                <p>+1-543-123-4567</p>
              </div>
              <div className="flex gap-[1.0625rem]">
                <Image
                  src="./assets/images/icon-email.svg"
                  alt="facebook"
                  width={20}
                  height={16}
                  className=" h-4 w-5"
                />
                <p>example@fylo.com</p>
              </div>
            </div>
          </li>
          <li className="xl:ml-8">
            <nav className="flex flex-col gap-12 md:flex-row xl:gap-20">
              <ul className="flex flex-col gap-4 font-OpenSans text-base">
                {firstUl.map((name, i) => (
                  <li key={i}>
                    <Link href="#">{name}</Link>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-4 font-OpenSans text-base">
                {secondUl.map((name, i) => (
                  <li key={i}>
                    <Link href="#">{name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </li>
          <li className="flex justify-center gap-2.5 xl:gap-3">
            {socialNetworks.map((item, i) => (
              <Link
                key={i}
                href="#"
                className="flex h-7 w-7 items-center justify-center rounded-full border-[0.0625rem] xl:h-8 xl:w-8"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                />
              </Link>
            ))}
          </li>
        </ul>
      </div>
    </footer>
  );
}
