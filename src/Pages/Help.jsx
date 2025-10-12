import React, { useState } from "react";

const faqs = [
  {
    question: "How do I track my order?",
    answer:
      "Once your order is shipped, we will send you a tracking number by email. You can also check it in your 'My Orders' section."
  },
  {
    question: "What is your return policy?",
    answer:
      "You can return any unused item within 14 days of delivery. Please ensure the tags are intact and the item is in original condition."
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to most countries. Delivery charges and times vary based on location."
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit/debit cards, UPI, PayPal, and Cash on Delivery (for selected regions)."
  }
];

const Help = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Help & FAQ</h1>
      <p className="text-gray-600 text-center mb-10">
        Find answers to the most common questions about shopping with us.
      </p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm p-4 cursor-pointer bg-white"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg">{faq.question}</h2>
              <span className="text-gray-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
