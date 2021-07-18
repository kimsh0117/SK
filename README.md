# SK Design

SK Design front-end test.

## Tech Stack

- [React](https://reactjs.org/) - version 17.0.2
- [Redux](https://www.npmjs.com/package/redux)
- [Redux- Thunk](https://github.com/reduxjs/redux-thunk)
- [Typescript](https://www.typescriptlang.org/)
- [React Hook Form](https://react-hook-form.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Storybook](https://storybook.js.org/tutorials/design-systems-for-developers/react/en/build/)

## Requirements

1. [x] Сверстать макет

2. [x] Элемент выпадающего списка городов нужно наполнить данными из прилагаемого JSON
       cities.json

3. [x] Элемент выпадающего списка источников нужно наполнить данными из прилагаемого
       JSON sources.json

4. [x] Поля с "\*" в плейсхолдере обязательны для заполнения

5. [x] По умолчанию кнопка отправки заявки заблокирована. Кнопка становится активной при
       корректном заполнении формы.

6. [x] Реализовать валидацию на клиенте:
   - ИМЯ
     - [x] поле не пустое
     - [x] поле имеет 2 или более символов
   - Номер телефона (вводить можно только цифры)
     - [x] поле не пустое
     - [x] номер заполнен корректно и полностью
   - E-mail
     - [x] поле не пустое
     - [x] поле соответствует регулярному выражению .+@.+\..+
   - Ссылка на профиль
     - [x] поле не пустое
     - [x] поле имеет 3 или более символов
7. [x] После заполнения формы, при попытке отправить данные, используя функцию setTimeout симулировать получение ответа от сервера
   - [x] учесть смену состояния кнопки
   - [x] использовать таймаут на 2 секунды
   - [x] по истечению таймаута сформировать JSON из данных формы (Redux) и вывести данные в
         консоль
   - [x] очистка формы

## Deploy

Deployed on Netlify<br>
[SK Design](https://sk-design.netlify.app/) <- click here

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
