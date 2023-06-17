# Интернет-магазин на базе WordPress и Vue.js

## Установка и настройка

Проект состоит из двух основных компонентов: back-end части, реализованной на WordPress, и front-end части, реализованной на Vue.js. Ниже представлены инструкции по установке и настройке этих компонентов.

### Установка WordPress плагина

1. Скачайте плагин из директории проекта на GitHub: `wp-plugin/cusom-products`.
2. Зайдите в административную панель вашего сайта на WordPress.
3. Перейдите в раздел "Плагины" и нажмите кнопку "Добавить новый".
4. Нажмите кнопку "Загрузить плагин" и выберите архив с плагином на вашем компьютере.
5. После успешной загрузки плагина нажмите кнопку "Установить сейчас".
6. После успешной установки плагина нажмите кнопку "Активировать плагин".
7. Ваш плагин готов к использованию. Вы можете перейти к настройке плагина в соответствующем разделе административной панели.

#### Создание необходимой таблицы в базе данных

После установки плагина, вам необходимо создать специальную таблицу в базе данных WordPress для хранения информации о продуктах. Используйте следующий SQL-запрос:
```
    CREATE TABLE `wp_products` (
      `product_id` bigint NOT NULL AUTO_INCREMENT,
      `title` varchar(255) DEFAULT NULL,
      `price` decimal(10,2) DEFAULT NULL,
      PRIMARY KEY (`product_id`)
    ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```
автоматическое создание таблицы, будет добавлено в сл. версии плагина ;-)
### Установка front-end части на Vue.js

Для установки front-end части проекта вам потребуется Node.js и npm. Если они не установлены на вашем компьютере, сначала установите их.

1. Клонируйте репозиторий проекта с GitHub.
```
    git clone https://github.com/dmitriyshaydurov/route-4-me-test.git
```
2. Перейдите в директорию проекта.
```
    cd route-4-me-test
```
3. Установите необходимые зависимости.
```
    npm install
```
4. Для разработки проекта запустите локальный сервер с горячей перезагрузкой.
```
    npm run serve
```
5. Для сборки проекта для продакшн запустите следующую команду. Готовый проект будет находиться в директории "dist".
```
    npm run build
```
6. Для автоматического исправления проблем со стилем кода запустите следующую команду.
```
    npm run lint
```
7. Для настройки проекта смотрите [Configuration Reference](https://cli.vuejs.org/config/).

## Демо проекта
Фронтэед часть https://dmitriyshaydurov.github.io/route-4-me-test/
Бэкэнд часть https://shaydurov.space/
админка https://shaydurov.space/admin (dmitriy/dmitriy@27)

