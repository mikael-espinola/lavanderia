import React from "react";

const Localization = () => {
  return (
    <div className="w-[50%] flex flex-col items-center h-[300px] p-2">
      <h1 className="text-xl text-center mb-5">Venha nos conhecer</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.682846191091!2d-35.2433724!3d-5.7587048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b3aa5b4a408ce7%3A0xcd635bd89e382812!2sLavanderia%20Iasmim!5e0!3m2!1sen!2sbr!4v1716842512273!5m2!1sen!2sbr"
        width="600"
        height="450"
        loading="lazy"
        className="h-full w-[90%]"
      ></iframe>
    </div>
  );
};

export default Localization;
