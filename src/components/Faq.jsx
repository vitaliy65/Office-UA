import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqData = [
  {
    question: "Як довго триває доставка?",
    answer: "Зазвичай доставка займає 2-5 робочих днів по Україні. Для міжнародних замовлень термін доставки може становити 7-14 днів."
  },
  {
    question: "Чи є у вас гарантія на товари?",
    answer: "Так, ми надаємо гарантію на всі наші товари. Термін гарантії залежить від конкретного продукту і зазвичай становить від 1 до 3 років."
  },
  {
    question: "Як я можу відстежити своє замовлення?",
    answer: "Після відправлення замовлення ви отримаєте електронний лист з номером для відстеження. Ви можете використати цей номер на нашому сайті в розділі 'Відстеження замовлення'."
  },
  {
    question: "Чи можна повернути товар?",
    answer: "Так, ви можете повернути товар протягом 14 днів з моменту отримання, якщо він не використовувався і знаходиться в оригінальній упаковці. Для початку процесу повернення, будь ласка, зв'яжіться з нашою службою підтримки."
  },
  {
    question: "Чи надаєте ви знижки для оптових замовлень?",
    answer: "Так, ми пропонуємо спеціальні ціни для оптових замовлень. Будь ласка, зв'яжіться з нашим відділом продажів для отримання детальної інформації та індивідуальної пропозиції."
  },
  {
    question: "Як я можу зв'язатися з вашою службою підтримки?",
    answer: "Ви можете зв'язатися з нашою службою підтримки за телефоном 0800-123-456 (безкоштовно по Україні) або написати нам на електронну пошту support@officeequip.ua. Ми працюємо з понеділка по п'ятницю з 9:00 до 18:00."
  },
  {
    question: "Чи є у вас фізичний магазин?",
    answer: "Так, у нас є шоурум у Києві за адресою вул. Хрещатик, 1. Ви можете відвідати його з понеділка по суботу з 10:00 до 20:00, щоб особисто ознайомитися з нашими товарами."
  },
  {
    question: "Чи пропонуєте ви послуги з установки та налаштування обладнання?",
    answer: "Так, ми пропонуємо послуги з установки та налаштування для більшості нашого офісного обладнання. Ця послуга доступна в Києві та області. Для отримання додаткової інформації та розцінок, будь ласка, зв'яжіться з нами."
  }
];

const FAQItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{item.question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 text-base text-gray-700 text-left">
          {item.answer}
        </div>
      )}
    </div>
  );
};

export default function Faq() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Часті запитання</h1>
      <div className="max-w-3xl mx-auto">
        {faqData.map((item, index) => (
          <FAQItem key={index} item={item} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-lg text-gray-700">
          Не знайшли відповідь на своє запитання?
        </p>
        <Link
          to="/contact"
          className="mt-2 inline-block bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Зв'яжіться з нами
        </Link>
      </div>
    </div>
  );
};