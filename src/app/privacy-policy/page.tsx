import React from "react";
import Container from "@/components/Container";

const PrivacyPolicy = () => {
  return (
    <Container styles="py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Политика конфиденциальности</h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Общие положения</h2>
            <p>
              Настоящая Политика конфиденциальности описывает наши правила и
              процедуры сбора, использования и раскрытия Вашей информации, когда
              Вы используете наш Сервис, а также рассказывает о Ваших правах на
              конфиденциальность и о том, как закон защищает Вас.
            </p>
            <p>
              Мы используем Ваши Персональные данные для предоставления и
              улучшения Сервиса. Используя Сервис, Вы соглашаетесь с сбором и
              использованием информации в соответствии с настоящей Политикой
              конфиденциальности.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              2. Сбор и использование данных
            </h2>
            <h3 className="font-semibold mb-2">Типы собираемых данных</h3>
            <p>
              <strong>Персональные данные:</strong> При использовании нашего
              Сервиса мы можем запросить у Вас определенную личную информацию,
              которая может быть использована для связи или идентификации. Это
              может включать, но не ограничивается:
              <ul className="list-disc pl-6 mt-2">
                <li>Имя и фамилия</li>
                <li>Адрес электронной почты</li>
                <li>Номер телефона</li>
              </ul>
            </p>
            <p>
              <strong>Данные об использовании:</strong> Эти данные собираются
              автоматически при использовании Сервиса и могут включать:
              <ul className="list-disc pl-6 mt-2">
                <li>IP-адрес устройства</li>
                <li>Тип и версия браузера</li>
                <li>Страницы, которые Вы посещаете</li>
                <li>Время и дата посещения</li>
              </ul>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              3. Использование данных
            </h2>
            <p>
              Мы используем Ваши данные для следующих целей:
              <ul className="list-disc pl-6 mt-2">
                <li>Предоставление и поддержка Сервиса</li>
                <li>Управление Вашим аккаунтом</li>
                <li>Связь с Вами</li>
                <li>
                  Предоставление новостей, специальных предложений и общей
                  информации
                </li>
                <li>Анализ и улучшение Сервиса</li>
              </ul>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Передача данных</h2>
            <p>
              Ваши данные могут быть переданы:
              <ul className="list-disc pl-6 mt-2">
                <li>Поставщикам услуг для анализа использования Сервиса</li>
                <li>Аффилированным лицам и партнерам</li>
                <li>
                  В случае слияния, продажи активов или других корпоративных
                  изменений
                </li>
              </ul>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              5. Безопасность данных
            </h2>
            <p>
              Мы принимаем все необходимые меры для защиты Ваших данных. Однако
              помните, что ни один метод передачи данных через Интернет или
              электронного хранения не является абсолютно безопасным.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Ваши права</h2>
            <p>
              Вы имеете право:
              <ul className="list-disc pl-6 mt-2">
                <li>Запросить доступ к Вашим данным</li>
                <li>Исправить или удалить Ваши данные</li>
                <li>Отозвать согласие на обработку данных</li>
              </ul>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. Cookies</h2>
            <p>
              Мы используем Cookies для улучшения работы Сервиса. Вы можете
              отключить Cookies в настройках браузера, но это может повлиять на
              функциональность Сервиса.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              8. Изменения в Политике
            </h2>
            <p>
              Мы можем обновлять настоящую Политику конфиденциальности. Все
              изменения будут опубликованы на этой странице.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">9. Контакты</h2>
            <p>
              Если у Вас есть вопросы по поводу настоящей Политики, Вы можете
              связаться с нами:
              <ul className="list-disc pl-6 mt-2">
                <li>
                  По электронной почте:{" "}
                  <a href="mailto:info@flatpoint.ru" className="underline">
                    info@flatpoint.ru
                  </a>
                </li>
                <li>
                  По телефону:{" "}
                  <a href="tel:+74951252527" className="underline">
                    +7 (495) 125-25-27
                  </a>
                </li>
                <li>
                  Через страницу на нашем сайте:{" "}
                  <a
                    href="https://flat-point.ru"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://flat-point.ru
                  </a>
                </li>
              </ul>
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
