// ContactUs.js
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("default_service", "template_zu7zh8b", form.current, {
        publicKey: "GzcfqV0vukzUdaIT4",
      })
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.error(error);
      });
    e.target.reset();
  };

  return (
    <>
      <section
        id="contact"
        className="flex justify-center  m-auto py-20 xl:w-[60%] xs:w-[85%]">
        <div className="sm:w-[50%] xs:w-full">
          <h2 class="text-5xl font-bold mb-3 w-fit bg-clip-text  text-transparent bg-gradient-to-r from-purple-600 from-30% via-orange-500 via-70% to-orange-400">
            Contáctame
          </h2>
          <p className="opacity-50">
            No dude en comunicarme para colaborar, realizar consultas o
            simplemente conversar de manera amigable en cualquier momento.
          </p>
          <form className="flex flex-col py-4" ref={form} onSubmit={sendEmail}>
            <label className="font-bold  text-[17px] opacity-90">Nombre</label>
            <input
              className="bg-transparent border-violet-400 border-2 
                 placeholder:text-violet-400 px-3 py-[5px] rounded-md mb-3 hover:border-violet-500 md:w-[80%] xs:w-full"
              type="text"
              name="nombre"
              placeholder="Nombre..."
            />
            <label className="font-bold text-[17px] opacity-90">Correo</label>
            <input
              className="bg-transparent border-violet-400 border-2 
                 placeholder:text-violet-400 px-3 py-[5px] rounded-md hover:border-violet-500 mb-3 md:w-[80%] xs:w-full"
              type="email"
              name="correo"
              placeholder="abs@gmail.com"
            />
            <label className="font-bold text-[17px] opacity-90">Mensaje</label>
            <textarea
              className="bg-transparent border-violet-400 border-2 
                 placeholder:text-violet-400 px-3 py-[5px] rounded-md hover:border-violet-500 mb-3 md:w-[80%] xs:w-full"
              name="mensaje"
              placeholder="Escribe..."
            />
            <button
              className="rounded-full border border-violet-500 bg-transparent w-fit px-8 py-1 my-4 hover:scale-110 hover:bg-violet-950 focus:ring-blue-300 transition-all dark:focus:ring-blue-800"
              type="submit"
              id="button">
              Enviar
            </button>
          </form>
        </div>
        <img
          className=" object-cover w-full h-auto self-center md:w-[20%] xs:w-0"
          src="../../public/email.svg"
          alt="imagen de laptop"
        />
      </section>
    </>
  );
};
