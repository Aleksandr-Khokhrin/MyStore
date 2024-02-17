# PCstore

![image](https://github.com/Aleksandr-Khokhrin/MyStore/assets/147053338/4bb1f1d2-b2ed-4478-a4dc-9fd11df983fe)

Ссылка на проект: http://31.129.110.46/

Краткое описание: Это незаконченный проект, который я выложил для презентации своих навыков в React и работе с серверной частью. Данный объем занял у меня месяц работы. Проект дал мне достаточно большой опыт в работе на React. Тут присутствует много логики, начиная с пагинации и заканчивая рендерингом разной информации, получаемой с сервера. Данное приложение функционирует при любом размере экрана. В данном описании я могу лишь рассказать о малой части моей работы. Подробно вы можете рассмотреть проект в файлах репозитория. 

![image](https://github.com/Aleksandr-Khokhrin/MyStore/assets/147053338/64e01555-11db-4db1-9e15-4d59e5ae18ec)

В данном проекте функционирует:
1. Главная страница.
2. Категории.
3. Корзина.
4. Избранное.
5. Услуги.
6. Поддержка.
7. О компании.
8. Проекты.
9. Новости.
10. При клике на продукт вы можете перейти на страницу отдельного продукта.

Данные страницы правильно функционируют с позиции адаптированной верстки, но не на всех из них работает логика. 
Прошу воспринимать этот проект как продукт моей (незаконченной) работы за 1 месяц. 

Основные задачи: 
- Создать платформу/интернет магазин для продажи компьютеров, комплектующих и всякого рода вспомогательных устройств.
- Уделить внимание безопасности данных.
- Прокачать свои Hard skills.

Функционал: 
1. Авторизаци и регистрация пользователя. Пользователь регистрируется/авторизируется и затем с сервера приходит токен, который я пушу в localStorage. Затем, для безопасности данных токен обновляется каждые 15 минут:

![image](https://github.com/Aleksandr-Khokhrin/MyStore/assets/147053338/851e4f83-b06f-4127-a182-3f3f65a025f6)

2. На главной странице собран весь основной контент. Тут присутствует Header, Footer и MainPage. Header и Foooter остаётся без изменений, в то время как все содержимое проекта меняется в соответствии с действиями клиента на сайте. Давайте рассмотрим один из экранов на главной странице:


![image](https://github.com/Aleksandr-Khokhrin/MyStore/assets/147053338/97cd628b-c481-4d6a-9b82-6f65c3a4c774)

Тут я рендерю компоненты из моего массива myArray(информация полученная по определённому запросу по средством redux-toolkit). Также в примере у меня присутствует компонент NavigationPage. С помощью этого компонента я осуществляю пагинацию во всем приложении.

3. Пагинация. Эту логику я написал сам и она работает от нескольких переменных, которые дают информацию о том, сколько должно быть объектов на странице, какая длина массива элементов, как я могу переключить страницу и другие дополнительные свойства. Ниже, вагему вниманию предоставлена логика, по которой отображаются страницы в моём пагинационном ряду:

![image](https://github.com/Aleksandr-Khokhrin/MyStore/assets/147053338/448066eb-6e09-45e0-81f9-cc96d72bb9d7)

![image](https://github.com/Aleksandr-Khokhrin/MyStore/assets/147053338/cc5f3178-5d52-4a49-8ae1-bd4bda5b867b)

4. Все стили в моём приложении я в основном писал на SCSS и пользовался адаптивной версткой с использованием media и calc:

![image](https://github.com/Aleksandr-Khokhrin/MyStore/assets/147053338/9e629813-cd8d-4be4-bac2-9cacc000fce5)

5. Пример получения списка ссылок на ркламу компании:


![image](https://github.com/Aleksandr-Khokhrin/MyStore/assets/147053338/066b376a-9e49-4be8-b98a-411736828207)





 

![image](https://github.com/Aleksandr-Khokhrin/MyForumApp_react-front/assets/147053338/d1421d97-c486-45f4-b34f-5faede758ca4)
