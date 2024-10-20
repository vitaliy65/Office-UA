import React from 'react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 text-left">
      <h1 className="text-4xl font-bold text-center mb-8">Про Office UA</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Наша історія</h2>
        <p className="text-gray-700 mb-4">
          Заснована у 2010 році, Office UA вже понад десятиліття є провідним постачальником високоякісного офісного обладнання. Наша подорож почалася з простої місії: забезпечити бізнес інструментами, необхідними для успіху в сучасному робочому середовищі.
        </p>
        <p className="text-gray-700 mb-4">
          Від скромних початків як місцевий постачальник ми виросли в загальнонаціональну платформу електронної комерції, обслуговуючи тисячі задоволених клієнтів по всій країні. Наш успіх базується на нашій відданості якості, доступності та винятковому обслуговуванню клієнтів.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Чому обирають нас?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Широкий асортимент преміального офісного обладнання від надійних брендів</li>
          <li>Конкурентні ціни та регулярні акції</li>
          <li>Експертні поради та підтримка від нашої досвідченої команди</li>
          <li>Швидка та надійна доставка по всій країні</li>
          <li>Безпроблемне повернення та обмін</li>
          <li>Відданість сталому розвитку та екологічно чистим продуктам</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Наша місія</h2>
        <p className="text-gray-700 mb-4">
          У Office UA наша місія полягає в підвищенні продуктивності та комфорту на робочому місці шляхом надання високоякісного офісного обладнання за доступними цінами. Ми прагнемо бути не просто постачальником, а надійним партнером у вашому бізнес-успіху.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Зв'яжіться з нами</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-2 text-blue-600" />
              <a href="mailto:info@officeequippro.com" className="text-blue-600 hover:underline">info@officeequippro.com</a>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-2 text-blue-600" />
              <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a>
            </li>
            <li className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-blue-600" />
              <address className="not-italic">вул. Офісна 123, Бізнес-місто, БМ 12345</address>
            </li>
            <li className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-blue-600" />
              <span>Пн-Пт: 9:00-18:00, Сб: 10:00-16:00, Нд: Вихідний</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Наші цінності</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Задоволення клієнтів - наш головний пріоритет</li>
            <li>Постійні інновації в пропозиціях продуктів та послуг</li>
            <li>Етичні бізнес-практики та прозорість</li>
            <li>Екологічна відповідальність у нашій діяльності</li>
            <li>Підтримка місцевих громад через різноманітні ініціативи</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
