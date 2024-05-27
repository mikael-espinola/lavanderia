import Link from "next/link";
import React from "react";
import Contact from "../homepage/contact/Contact";
import Localization from "../homepage/localization/Localization";

const Footer = () => {
  return (
    <footer className="mt-8 py-1 bottom-0 right-0 left-0">
      <section className="flex justify-evenly">
        <Contact />
        <Localization />
      </section>
      <div className="bg-white bg-opacity-15 mt-10 mb-2 text-center">
        <span>
          Made with 💖 by{" "}
          <Link
            target="_blank"
            href={"https://mikael-espinola.github.io/myportfolio"}
            className="hover:text-red-600 hover:underline"
          >
            Mikael Espínola
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
