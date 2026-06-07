import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
const FAQ = () => {

    const [isOpen, setIsOpen] = useState(0);


    return (
        <div className="max-w-4xl m-10 flex flex-col sm:mx-auto md:mx-auto lg:mx-auto px-6 py-12 border rounded-4xl bg-sky-50 shadow-lg ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
            <p>Here are some common questions and answers:</p>
            <div className=" block w-auto h-auto  bg-sky-200 border rounded-4xl p-4 my-4">
                <h3 className="flex text-lg font-semibold text-slate-700 mb-2" >
                    1. What is your return policy?
                    <button className="ml-auto  text-sm text-slate-500 hover:text-slate-700 focus:outline-none" onClick={() => setIsOpen(isOpen === 1 ? 0 : 1)}><ChevronDown /></button>
                </h3>
                <p className={isOpen === 1 ? "text-slate-600 mb-4" : "text-slate-600 mb-4 hidden"}>We offer a 30-day return policy for unused products in their original packaging. Please contact our support team for assistance.</p>
            </div>
            <div className=" block w-auto h-auto  bg-sky-200 border rounded-4xl p-4 my-4">
                <h3 className="flex text-lg font-semibold text-slate-700 mb-2" >
                    2. Do you offer international shipping?
                    <button className="ml-auto text-sm text-slate-500 hover:text-slate-700 focus:outline-none" onClick={() => setIsOpen(isOpen === 2 ? 0 : 2)}><ChevronDown /></button>
                </h3>
                <p className={isOpen === 2 ? "text-slate-600 mb-4 transform transition duration-300" : "text-slate-600 mb-4 hidden"}>Yes, we offer international shipping to most countries. Shipping costs and delivery times may vary depending on the destination.</p>
            </div>
            <div className="block w-auto h-auto bg-sky-200 border rounded-4xl p-4 my-4">
                <h3 className="flex text-lg font-semibold text-slate-700 mb-2" >
                    3. How can I track my order?
                    <button className="ml-auto  text-sm text-slate-500 hover:text-slate-700 focus:outline-none" onClick={() => setIsOpen(isOpen === 3 ? 0 : 3)}><ChevronDown /></button>
                </h3>
                <p className={isOpen === 3 ? "text-slate-600 mb-4" : "text-slate-600 mb-4 hidden"}>Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order on our website or the carrier's website.</p>
            </div>
            <div className="block w-auto h-auto bg-sky-200 border rounded-4xl p-4 my-4">
                <h3 className="flex text-lg font-semibold text-slate-700 mb-2" >
                    4. What payment methods do you accept?
                    <button className="ml-auto  text-sm text-slate-500 hover:text-slate-700 focus:outline-none" onClick={() => setIsOpen(isOpen === 4 ? 0 : 4)}><ChevronDown /></button>
                </h3>
                <p className={isOpen === 4 ? "text-slate-600 mb-4" : "text-slate-600 mb-4 hidden"}>We accept major credit cards, PayPal, and other secure payment methods. All transactions are encrypted for your safety.</p>
            </div>
            <div className="block w-auto h-auto bg-sky-200 border rounded-4xl p-4 my-4">
                <h3 className="flex text-lg font-semibold text-slate-700 mb-2" >
                    5. How can I contact customer support?
                    <button className="ml-auto  text-sm text-slate-500 hover:text-slate-700 focus:outline-none" onClick={() => setIsOpen(isOpen === 5 ? 0 : 5)}><ChevronDown /></button>
                </h3>
                <p className={isOpen === 5 ? "text-slate-600 mb-4" : "text-slate-600 mb-4 hidden"}>You can contact our customer support team via email at abc@gmail.com.</p>
            </div>
        </div>
    );
};
export default FAQ;
