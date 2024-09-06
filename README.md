```markdown
# Проект: Интернет-магазин автомобилей

## Описание
Этот проект является интернет-магазином автомобилей из Южной Кореи. Вы сможете найти подробную информацию о каждом автомобиле, посмотреть фотографии и оставить заявку.
```
## Установка и запуск проекта
1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/DanilMochalov/KimLiPack.git
   cd projectname

2. Установите зависимости:
   ```bash
   npm install
   ```

3. Запустите проект в режиме разработки:
   ```bash
   npm start
   ```

4. Для сборки проекта:
   ```bash
   npm run build
   ```

## Ветвление и совместная разработка
- **main** — стабильная ветка для деплоя и продакшен версии проекта.
- **dev** — основная ветка для разработки. Все изменения вносим через Pull Request в эту ветку.
- **feature/[название-фичи]** — для каждой новой фичи создавайте отдельную ветку.

1. Чтобы создать новую ветку:
   ```bash
   git checkout -b feature/название-фичи
   ```

2. Сделайте коммиты и запушьте изменения:
   ```bash
   git add .
   git commit -m "описание изменений"
   git push origin feature/название-фичи
   ```

3. Создайте Pull Request в ветку `dev` и попросите ревью.

## Возможные проблемы
- Ошибки сборки могут возникнуть из-за кеша. Если что-то не работает, попробуйте очистить кеш и переустановить зависимости:
   ```bash
   rm -rf node_modules
   npm install
   ```

## Дополнительная информация
- Используемые технологии: React, Webpack, Babel, ESLint, Prettier.
