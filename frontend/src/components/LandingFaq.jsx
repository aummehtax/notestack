import { useState, useRef } from 'react';

const AccordionItem = ({ id, question, answer, activeTab, setActiveTab, darkAndLight }) => {
  const contentRef = useRef(null);
  const isActive = activeTab === id;

  const handleClick = () => {
    setActiveTab(isActive ? 0 : id);
  };

  return (
    <div className={`relative transition-all duration-700 border rounded-xl hover:shadow-lg cursor-pointer ${
      darkAndLight 
        ? 'border-gray-700 hover:border-gray-500 bg-gray-900' 
        : 'border-gray-200 hover:border-gray-500 bg-white'
    }`}>
      <div 
        onClick={handleClick} 
        className="w-full p-4 text-left cursor-pointer"
      >
        <div className="flex items-center justify-between">
          <span className={`tracking-wide font-medium ${
            darkAndLight ? 'text-white' : 'text-gray-900'
          }`}>
            {question}
          </span>
          <span 
            className={`transition-transform duration-500 transform ${
              isActive ? '-rotate-180' : ''
            } ${darkAndLight ? 'text-white' : 'text-gray-900'}`}
          >
            <svg 
              className="w-5 h-5 fill-current" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </div>
      </div>

      <div 
        ref={contentRef}
        className="relative overflow-hidden transition-all duration-700"
        style={{
          maxHeight: isActive ? `${contentRef.current?.scrollHeight}px` : '0px'
        }}
      >
        <div className={`px-6 pb-4 ${
          darkAndLight ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function LandingFaq({ darkAndLight }) {
  const [activeTab, setActiveTab] = useState(0);  

  const faqData = [
    {
      id: 1,
      question: "Is NoteStack really free?",
      answer: "Yes! NoteStack offers a generous free tier with all core features. Premium plans are available for advanced features."
    },
    {
      id: 2,
      question: "What sign-in options are available?",
      answer: "NoteStack supports multiple authentication methods for your convenience. You can sign in using Google Authentication for quick access, or create an account using your email and password. This gives you flexibility to choose the method that works best for you."
    },
    {
      id: 3,
      question: "How do I request new features?",
      answer: (
     <>
       We love to hear your feedback! Email the app developer at{' '}
       <a href="https://mail.google.com/mail/u/lee@example.org/?view=cm&to=maum5302@gmail.com" className="text-[#fe523b] hover:text-[#e6442f] underline font-medium" >
         maum5302@gmail.com
       </a>
       {' '}to request new features or share your suggestions.
     </>
   )
    },
    {
      id: 4,
      question: "Can I export my notes?",
      answer: "Absolutely! You can export your notes."
    }
  ];

  const leftColumn = faqData.slice(0, 2);
  const rightColumn = faqData.slice(2, 4);

  return (
    <div className="max-w-5xl px-2 py-3 mx-auto mt-32 tracking-wide md:px-4 md:mt-44">
      <div className={`flex justify-center text-3xl font-bold mb-8 ${
        darkAndLight ? 'text-white' : 'text-gray-900'
      }`}>
        Frequently Asked Questions
      </div>

      <div className="grid gap-3 py-8 text-lg leading-6 md:gap-8 md:grid-cols-2">
        <div className="space-y-3">
          {leftColumn.map((faq) => (
            <AccordionItem
              key={faq.id}
              id={faq.id}
              question={faq.question}
              answer={faq.answer}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              darkAndLight={darkAndLight}
            />
          ))}
        </div>

        <div className="space-y-3">
          {rightColumn.map((faq) => (
            <AccordionItem
              key={faq.id}
              id={faq.id}
              question={faq.question}
              answer={faq.answer}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              darkAndLight={darkAndLight}
            />
          ))}
        </div>
      </div>
    </div>
  );
}