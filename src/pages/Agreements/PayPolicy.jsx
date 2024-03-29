import AgrNav from "../../components/agreements/AgrNav";
import "./AgreeStyle.scss";

const PayPolicy = () => {
  return (
    <div className="agree-wrapper">
      <AgrNav />

      <div className="blocks">
        <div className="block-1">
          <h3>1. Платежная политика</h3>
          <p>
            1.1. Для начала торговли на реальном депозите Клиенту необходимо
            перевести денежные средства на открытый им торговый счет в Компании
            (далее – Счет Клиента).
          </p>
          <p>
            1.2. Сумма денежных средств на Счете Клиента составляет Баланс
            счета.
          </p>
          <p>
            1.3. Основание возникновения финансовых обязательств Компании перед
            Клиентом – появление соответствующей записи в торговой платформе о
            внесении Клиентом денежных средств на личный Счет.
          </p>
          <p>
            1.4. Размер денежных обязательств Компании в отношении Клиента
            определяется исходя из величины Баланса Счета Клиента на конкретную
            дату и время.
          </p>
          <p>
            1.5. Финансовые обязательства Компании перед Клиентом всегда
            ограничены величиной Баланса Счета Клиента.
          </p>
          <p>
            1.6. Финансовые обязательства Компании в отношении Клиента
            прекращаются в момент вывода Клиентом всех денежных средств со
            Счета.
          </p>
          <p>
            1.7. В процессе выполнения операции по зачислению средств на Счет
            Компания предлагает Клиенту выбрать один из доступных способов
            пополнения депозита. Способ, выбранный Клиентом для пополнения
            депозита, является и способом вывода капитала.
          </p>
          <p>
            1.8. Клиент понимает и соглашается, что предложенные в торговой
            платформе платежные системы не являются партнерами Компании. В
            частности, Компания не несет ответственности за любые перебои в
            работе платежной системы, включая, но, не ограничиваясь,
            несвоевременным поступлением денежных средств на Счет Клиента или их
            непоступлением.
          </p>
          <p>
            1.9. Все риски, прямо или косвенно связанные с использованием той
            или иной платежной системы, ложатся на Клиента. В целях выяснения
            причин и обстоятельств ошибочной (нестабильной) работы платежной
            системы, перебоев в ее работе, Клиент вправе обратиться с
            соответствующей претензией к представителям данной платежной
            системы.
          </p>
          <p>
            1.10. Клиент обязуется уведомить Компанию о направлении претензии в
            адрес платежной системы в течение суток с даты ее отправки, направив
            соответствующее письмо на электронную почту Компании:
          </p>
        </div>

        <div className="block-2">
          <h3>2. Регистрация</h3>
          <p>
            2.1. Клиент обязуется произвести самостоятельную регистрацию на
            сайте Компании, предоставив информацию о себе по вопросам,
            предлагаемым в форме регистрации, а также поддерживать эту
            информацию в актуальном состоянии.
          </p>
          <p>
            2.2. Процесс регистрации Клиента включает в себя заполнение анкеты
            по установленной форме, открытие счета, выбор способа пополнения
            депозита (счета) для осуществления торговли, пополнение счета, а
            также, в случае необходимости, подтверждение личных данных Клиента
            посредством предоставления Компании дополнительных документов
            (верификация аккаунта).
          </p>
          <p>
            2.3. Регистрация Клиента на сайте Компании является акцептом
            Пользовательского соглашения об оказании услуг. Клиент гарантирует
            предоставить точную, полную и достоверную информацию о себе в
            соответствии со всеми требованиями форм регистрации на сайте
            Компании.
          </p>
          <p>
            2.4. Регистрируясь на сайте Компании, Клиент в полном объеме
            принимает условия настоящей Платежной политики и приложений к ней.
          </p>
          <p>
            2.5. При проведении различного рода проверок идентификации личности
            Клиента и/или его средств, а также используемых им инструментов
            (этап верификации аккаунта), Компания вправе запросить, а Клиент
            обязан предоставить любую запрошенную Компанией документацию. В
            частности Компания вправе запросить у Клиента идентификационные
            документы (паспорт, водительское удостоверение), документы,
            подтверждающие место жительство Клиента (страница паспорта с
            пропиской, счет за коммунальные услуги, выписка из банка), его
            финансовое положение (выписка из банка), документы, являющиеся
            основанием законного владения и распоряжения средств на Счете
            Клиента, а также любые другие документы на усмотрение Компании.
          </p>
          <p>
            2.6. Клиент предоставляет требуемую документацию в течение 5 (пяти)
            дней с даты получения соответствующего запроса Компании, способом,
            согласованным с представителями Компании.
          </p>
          <p>
            2.7. Процесс верификации занимает до 10 рабочих дней с даты
            направления Компанией уведомления Клиенту о необходимости
            подтверждения им своих личных данных. В отдельных случаях
            допускается увеличение этого срока до 30 (тридцати) рабочих дней по
            усмотрению Компании.
          </p>
        </div>

        <div className="block-3">
          <h3>3. Пополнение счета</h3>
          <p>3.1. Для пополнения Счета Клиенту необходимо:</p>
          <p>
            3.1.1. составить Заявку на ввод средств через Личный кабинет в
            профиле аккаунта;
          </p>
          <p>
            3.1.2. выбрать способ пополнения счета (Компания предлагает на выбор
            платежные системы, которые доступны Клиенту и отображаются в его
            Личном кабинете);
          </p>
          <p>
            3.1.3. указать валюту, в которой будет производиться пополнение
            счета, и соответственно валюту самого счета;
          </p>
          <p>3.1.4. ввести размер пополнения;</p>
          <p>
            3.1.5. заполнить предложенную форму, введя запрашиваемые данные.
          </p>
          <p>
            3.2. Срок поступления денежных средств Клиента на Счет зависит
            исключительно от выбранной Клиентом платежной системы. Компания не
            располагает возможностью каким-либо образом влиять на данный срок. В
            том числе, операции по вводу средств на депозит при использовании
            электронных платежных систем могут происходить моментально, при
            использовании банковского перевода – от 3 (трех) до 45 (сорока пяти)
            дней, в зависимости используемого Клиентом банка и
            банка-корреспондента.
          </p>
        </div>

        <div className="block-4">
          <h3>4. Вывод средств со счета Клиента</h3>
          <p>
            4.1. Клиент вправе в любое время снять денежные средства (полностью
            и в части), задействованные в проводимых им операциях (сделках), со
            своего Счета, направив в адрес Компании соответствующую заявку на
            вывод средств.
          </p>
          <p>
            4.2. Распоряжение Клиента о снятии средств со счета должно отвечать
            ряду условий, в т.ч.:
          </p>
          <p>
            - заявка Клиента должна быть сформирована с учетом всех норм и
            ограничений действующего законодательства стран, под юрисдикцию
            которых попадает данная операция;
          </p>
          <p>
            - заявка Клиента должна соответствовать положениям настоящей
            Платежной политики, а также иных документов Компании, регулирующих
            операции Клиента;
          </p>
          <p>
            - заявка Клиента должна быть создана и направлена в адрес Компании
            через Личный Кабинет Клиента, кроме того указана в разделе «История
            балансовых операций», а также в системе Компании для учета запросов
            клиентов. Заявка, направленная иным способом, к рассмотрению
            Компанией не принимается;
          </p>
          <p>
            - Клиент вправе распоряжаться денежными средствами только в размере
            баланса своего Счета на момент отправки заявки на вывод средств. В
            случае если в заявке Клиента на вывод средств указана сумма,
            превышающая баланс Счета Клиента на момент отправки заявки (с учетом
            всех комиссий, удержаний и обязательных выплат, установленных
            правилами Компании), Компания вправе отказать в исполнении такого
            распоряжения;
          </p>
          <p>
            - вывод денежных средств осуществляется тем же способом, каким
            производилось пополнение Счета Клиента. В то же время Компания
            оставляет за собой право ограничить сумму списания денежных средств
            на платежную систему суммой пополнения баланса Счета Клиента с этой
            платежной системы. Компания также вправе произвести вывод денежных
            средств Клиента на платежную систему, отличную от той, с которой
            Клиент пополнил Баланс Счета. Данное решение Компания принимает в
            каждом случае индивидуально и на собственное усмотрение. При этом
            Клиент обязан предоставить всю запрашиваемую Компанией информацию
            (реквизиты и т.д.) по платежным документам.
          </p>
          <p>
            4.3. Для оказания услуги по исполнению распоряжения Клиента о выводе
            денежных средств на Внешний Счет Клиента, Компания вправе привлечь
            третьих лиц (Агентов). При этом Компания не несет ответственности за
            действия и/или бездействия таких лиц.
          </p>
          <p>
            4.4. Заявка на вывод средств оформляется Клиентом в валюте Счета. В
            случае, если валюта счета отличается от валюты перевода, то списание
            будет произведено в валюте счета. При этом производится конвертация
            средств в валюту счета по курсу, который был установлен Компанией на
            момент совершения ею операции по списанию.
          </p>
          <p>
            4.5. Валюта, в которой Компания осуществляет переводы на Внешний
            Счет Клиента (исходя из валюты Счета Клиента и Способа списания)
            может отражаться в Личном Кабинете Клиента.
          </p>
          <p>
            4.6. Размер обязательных платежей, комиссий и прочих издержек при
            осуществлении операции по выводу средств Клиента, а также курс
            конвертации, устанавливаются Компанией и могут быть изменены ей в
            одностороннем порядке в любой момент времени. При этом курс
            конвертации может отличаться от курса, установленного центральными
            банками стран, а также от рыночного курса валют.
          </p>
          <p>
            4.7. Компания вправе регулировать суммы вывода денежных средств
            Клиента, а также устанавливать пределы таких сумм (максимальные и
            минимальные), в зависимости от валюты списания, валюты счета и/или
            способа совершения операции Клиентом. Такие ограничения могут быть
            отражены в Личном кабинете Клиента на момент подачи им распоряжения
            на вывод средств.
          </p>
          <p>
            4.8. По поступившей от Клиента заявке на вывод средств Компания
            принимает решение в течение 7 (семи) дней с даты ее получения. В
            некоторых случаях срок может быть увеличен до 14 (четырнадцати)
            дней.
          </p>
          <p>
            4.9. В случае если денежные средства не поступили на Внешний Счет
            Клиента в срок, установленный п.4.8. настоящей Политики, Клиент
            вправе обратиться к представителям Компании в целях выяснения причин
            сложившейся ситуации.
          </p>
          <p>
            4.10. В случае если Клиент допустил ошибку в реквизитах при
            оформлении распоряжения на вывод средств, в результате которой
            денежные средства не поступили на Внешний Счет Клиента, последствия
            в виде дополнительных платежей (издержек, комиссий, удержаний и
            т.д.) являются ответственностью Клиента и оплачивается за его счет.
          </p>
          <p>
            4.11. В случае если доход Клиента превышает сумму пополнения,
            осуществить вывод такого дохода на Внешний Счет Клиента можно только
            в специально установленном порядке, согласованном Сторонами, и если
            Клиент внес депозит на свой счет определенным способом, Компания
            имеет право отозвать предыдущий депозит Клиентом тем же способом.
          </p>
        </div>

        <div className="block-5">
          <h3>5. Способы вывода денежных средств со Счета Клиента</h3>
          <p>5.1. Банковский перевод:</p>
          <p>
            5.1.1. сформировав через Личный кабинет Заявку, посредством
            банковского перевода Клиент может получить денежные средства в
            удобное ему время при условии, что Компания работает с данным
            способом перевода;
          </p>
          <p>
            5.1.2. Клиент понимает и принимает, что Компания не несет
            ответственности за сроки совершения банковского перевода;
          </p>
          <p>
            5.1.3. Клиент подает заявку на вывод денежных средств на банковский
            счет, открытый исключительно на свое имя;
          </p>
          <p>
            5.1.4. Компания перечисляет денежные средства в соответствии с
            реквизитами, указанными Клиентом в соответствующей заявке.
            Предполагается, что указанный банковский счет принадлежит Клиенту.
          </p>
          <p>5.2. Электронный перевод:</p>
          <p>
            5.2.1. Сформировав через Личный кабинет Заявку, посредством
            электронного перевода, Клиент может получить денежные средства в
            любое удобное ему время при условии, что Компания работает с данным
            способом перевода;
          </p>
          <p>
            5.2.2. Клиент подает заявку на вывод денежных средств на электронный
            счет, зарегистрированный (открытый) исключительно на свое имя;
          </p>
          <p>
            5.2.3. Предполагается, что указанный Клиентом электронный счет
            принадлежит Клиенту;
          </p>
          <p>
            5.2.4. Компания перечисляет денежные средства в соответствии с
            реквизитами, указанными Клиентом в соответствующей заявке;
          </p>
          <p>
            5.2.5. Клиент понимает и соглашается, что Компания не несет
            ответственности за сроки совершения электронного платежа, а также за
            сбои в работе программного обеспечения и иные сбои технического
            характера, препятствующие исполнению заявки Клиента и не зависящие
            от воли Компании.
          </p>
          <p>
            5.3. Перечень способов вывода денежных средств является открытым и
            может дополняться Компанией в одностороннем порядке на усмотрение
            Компании. Данная информация будет отражаться в Личном кабинете
            Клиента.
          </p>
        </div>

        <div className="block-6">
          <h3>6. Возврат средств</h3>
          <p>
            6.1. Под средствами Клиента, в рамках раздела 6 настоящей Платежной
            политики, следует понимать те денежные средства, которые были
            зачислены Клиентом на личный Счет, но не были задействованы ни в
            одной операции на торговой платформе Компании. Клиент или не
            использовал зачисленные средства для совершения (заключения) сделок
            или после пополнения Баланса Счета не совершил ни одной операции.
          </p>
          <p>
            6.2. Клиент вправе в любое время снять денежные средства (полностью
            и в части) со своего Счета, направив в адрес Компании
            соответствующую заявку на возврат.
          </p>
          <p>
            6.3. Заявка Клиента на возврат средств должна удовлетворять
            следующим условиям:
          </p>
          <p>
            - быть сформированной с учетом всех норм и ограничений действующего
            законодательства стран, под юрисдикцию которых попадает данная
            операция;
          </p>
          <p>
            {" "}
            - соответствовать положениям настоящей Платежной политики, а также
            иным документам Компании, регулирующим операции Клиента;
          </p>
          <p>
            - создана и направлена в адрес Компании через Личный Кабинет
            Клиента, а также отражена в разделе «История балансовых операций» и
            системе для учета запросов клиентов. Заявка также может быть
            направлена Клиентом посредством электронной почты на следующий
            электронный адрес Компании: finance@quotex.io. Заявка, направленная
            иным способом или на иной электронный адрес к рассмотрению Компанией
            не принимается.
          </p>
          <p>
            6.4. Клиент вправе распоряжаться денежными средствами только в
            размере баланса своего Счета на момент отправки заявки на возврат
            средств. В случае если в заявке Клиента указана сумма, превышающая
            баланс Счета Клиента на момент отправки заявки (с учетом всех
            комиссий, удержаний и обязательных выплат, установленных настоящей
            Платежной Политикой и/или иными документами Компании или самой
            Компанией), Компания вправе отказать в исполнении такого
            распоряжения.
          </p>
          <p>
            6.5. Возврат денежных средств осуществляется тем же способом, каким
            производилось пополнение Счета Клиента. В то же время Компания
            оставляет за собой право ограничить сумму списания денежных средств
            на платежную систему суммой пополнения баланса Счета Клиента с этой
            платежной системы. Компания также вправе произвести возврат денежных
            средств Клиента на платежную систему, отличную от той, с которой
            Клиент пополнил Баланс Счета. Данное решение Компания принимает в
            каждом случае индивидуально и на собственное усмотрение. При этом
            Клиент обязан предоставить всю запрашиваемую Компанией информацию
            (реквизиты и т.д.) по платежным документам.
          </p>
          <p>
            6.6. Для оказания услуги по исполнению распоряжения Клиента о
            возврате денежных средств на Внешний Счет Клиента, Компания вправе
            привлечь третьих лиц (Агентов).
          </p>
          <p>
            6.7. Заявка на возврат средств оформляется Клиентом в валюте Счета.
            В случае, если валюта счета отличается от валюты перевода, то
            списание будет произведено в валюте счета. При этом производится
            конвертация средств в валюту счета по курсу, который был установлен
            Компанией на момент совершения ею операции по списанию.
          </p>
          <p>
            6.8. Размер обязательных платежей, комиссий и прочих издержек при
            осуществлении операции по возврату средств Клиента, а также курс
            конвертации, устанавливаются Компанией и могут быть изменены ей в
            одностороннем порядке в любой момент времени. При этом курс
            конвертации может отличаться от курса, установленного центральными
            банками стран, а также от рыночного курса валют.
          </p>
          <p>
            6.9. Провайдеры платежных систем могут устанавливать случаи, при
            которых зачисление средств на Внешний Счет Клиента производится в
            валюте, отличной от валюты Внешнего Счета.
          </p>
          <p>
            6.10. Компания вправе регулировать суммы возврата денежных средств
            Клиента, а также устанавливать пределы таких сумм (максимальные и
            минимальные), в зависимости от валюты списания, валюты счета и/или
            способа совершения операции Клиентом. Такие ограничения могут быть
            отражены в Личном кабинете Клиента на момент подачи им распоряжения
            Компании на возврат средств.
          </p>
          <p>
            6.11. По поступившей от Клиента заявке на возврат средств Компания
            принимает решение в течение 7 (семи) дней с даты ее получения. В
            некоторых случаях срок может быть увеличен до 30 (тридцати) дней.
          </p>
          <p>
            6.12. В случае если денежные средства не поступили на Внешний Счет
            Клиента в срок, установленный п.6.11. настоящей Платежной Политики,
            Клиент вправе обратиться к представителям Компании в целях выяснения
            причин сложившейся ситуации.
          </p>
          <p>
            6.13. В случае если Клиент допустил ошибку в реквизитах при
            оформлении распоряжения на возврат средств, в результате которой
            денежные средства не поступили на Внешний Счет Клиента, последствия
            в виде дополнительных платежей (издержек, комиссий, удержаний и
            т.д.) являются ответственностью Клиента и оплачивается за его счет.
          </p>
          <p>
            6.14. Если Клиент пополнял баланс Счета определенным способом, а
            порядок возврата средств отличается от порядка, установленного
            настоящим разделом Платежной Политики, Компания вправе вернуть ранее
            зачисленную Клиентом сумму этим же способом в сроки, определяемые
            Компанией в одностороннем порядке.
          </p>
        </div>

        <div className="block-7">
          <h3>7. Налоги</h3>
          <p>
            7.1. Компания не является налоговым агентом и не предоставляет
            информацию об операциях Клиента третьим лицам. Подобная информация
            может быть предоставлена исключительно при получении Компанией
            официального запроса компетентного государственного органа,
            направленного в соответствии с законодательно установленными
            требованиями и правилами для такого запроса.
          </p>
        </div>

        <div className="block-8">
          <h3>8. Ответственность</h3>
          <p>
            8.1. Все платежи (и их составляющие), произведенные Клиентом,
            являются ответственностью Клиента.
          </p>
          <p>
            8.2. Компания не несет ответственности за действия третьих лиц,
            осуществляющих посредническую деятельность, связанную с оказанием
            услуг по исполнению распоряжения Клиента о вводе и/или выводе
            денежных средств.
          </p>
          <p>
            8.3. При пополнении Клиентом Счета, финансовая ответственность
            Компании наступает с момента поступления средств Клиента на
            банковский счет Компании и/или на счет Компании в платежных
            системах, указанных на сайте Компании.
          </p>
          <p>
            8.4. В случае обнаружения Компанией какого-либо рода финансовых
            действий, имеющих мошеннический характер, а также любых иных
            действий, финансовых транзакций, противоречащих нормам
            международного и внутригосударственного права, Компания вправе
            отменить такое действие (транзакцию) и заблокировать Счет Клиента.
          </p>
          <p>
            8.5. Ответственность Компании в части вывода средств со Счета
            Клиента прекращается в момент списания средств с банковского счета
            Компании и/или со счета Компании в платежных системах, указанных на
            сайте Компании.
          </p>
          <p>
            8.6. В случае возникновения технических ошибок со стороны Компании
            при совершении любого рода финансовых транзакций, Компания вправе
            отменить такие транзакции, а также их результаты. Результаты
            предоставляемых Компанией услуг в данном случае подлежат
            аннулированию со стороны Компании.
          </p>
        </div>
      </div>
    </div>
  );
};
export default PayPolicy;
