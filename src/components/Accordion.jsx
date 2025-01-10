import { useState } from "react";

function Accordion({ items, textColor = "text-gray-100" }) {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <ul role="list" className="space-y-4">
            {items.map((item, index) => (
                <li key={index} className="">
                    <button
                        onClick={() => toggleAccordion(index)}
                        className={`w-full flex justify-between items-center pr-8 py-2 text-left text-lg font-bold text-blue-500`}
                    >
                        {item.title}
                        <span className="ml-2">{openIndex === index ? "−" : "+"}</span>
                    </button>
                    {openIndex === index && (
                        <div className={`px-2 py-2 font-semibold italic ${textColor}`}>
                            {item.content}
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
}


export default Accordion;
