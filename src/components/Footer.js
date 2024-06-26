import React from "react";
import { ImGithub } from "react-icons/im";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
  FaPaypal,
} from "react-icons/fa";


import {MdLocationOn} from 'react-icons/md';
import {BsPersonFill, BsPaypal} from 'react-icons/bs'


const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-7 ">
          <h2 className="text-2xl font-semibold text-white mb-4">IMarket</h2>
          <p className="text-white text-sm tracking-wide font-semibold">IMarket.com</p>
          <div className="flex gap-5 text-lg text-gray-400">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaHome className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>

        <div>
          <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
             localização
            </h2>
            <p>Rio de Janeiro,RJ, Centro</p>
            <p>Telefone: 21 9999-99999</p>
            <p>e-mail: imarket@gmail.com</p>
            <p></p>
          </div>
        </div>
        <div>
        <h2 className="text-2xl font-semibold text-white mb-4">
             perfil
            </h2>

       
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer"> <span><BsPersonFill/></span>minha conta</p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer"> <span><FaPaypal/></span>pagamento</p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer"> <span><FaHome/></span>pedidos</p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer"> <span><MdLocationOn/></span>ajuda e suporte</p>
        </div>


       <div className="flex flex-col justify-center">
        <input type="text" className="bg-transparent border px-4 py-2 text-sm" placeholder="e-mail"/>
        <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">Escrever</button>
       </div>

      </div>
    </div>
  );
};

export default Footer;
