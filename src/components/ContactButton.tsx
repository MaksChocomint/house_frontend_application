"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMessage, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { RiWhatsappFill } from "react-icons/ri";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-100">
      <motion.div
        onClick={toggleMenu}
        className={`select-none fixed bottom-4 right-4 tablet:bottom-14 bg-human-detail tablet:right-14 drop-shadow-md shadow-black cursor-pointer z-[100] border-human-detail border-[3px] rounded-full p-3 tablet:p-4 
          
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: isOpen ? 0.8 : 1.2 }}
          transition={{ duration: 0.1 }}
        >
          {isOpen ? (
            <AiOutlineClose size={28} className="text-natural-style" />
          ) : (
            <AiOutlineMessage size={28} className="text-natural-style" />
          )}
        </motion.div>
      </motion.div>
      {isOpen && (
        <motion.div
          className="fixed text-center bg-human-detail right-3 tablet:right-14 bottom-24 tablet:bottom-[136px] z-[100] bg-space-white shadow-md shadow-black/30 border border-black/20 rounded-lg p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h1 className="text-xl font-bold">Есть вопросы?</h1>
          <p className="text-base font-light mt-2 mb-6">
            Мы с удовольствием на них ответим!
          </p>
          <div className="flex gap-6 justify-center font-light items-center">
            <div className="flex flex-col items-center gap-2 text-sm">
              <Link
                href="https://api.whatsapp.com/send/?phone=79251437952"
                target="_blank"
                rel="noopener noreferrer"
                className="text-natural-style transition-colors"
              >
                <RiWhatsappFill className="text-[56px] drop-shadow-md" />
              </Link>
              <p>WhatsApp</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-sm">
              <Link
                href="tel:+74951252527"
                className="text-natural-style transition-colors"
              >
                <BiSolidPhoneCall className="text-[54px] drop-shadow-md" />
              </Link>
              <p>Позвонить</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-sm">
              <Link
                href="mailto:info@flatpoint.ru"
                className="text-natural-style transition-colors"
              >
                <MdEmail className="text-[52px] drop-shadow-md" />
              </Link>
              <p>Email</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ContactButton;
