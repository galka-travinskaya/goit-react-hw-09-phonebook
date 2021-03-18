# goit-react-hw-09-phonebook

1. npx create-react-app . --use-npm
2. npm i prop-types
3. линтинг npm install --save-dev prettier husky lint-staged
4. Проверяем настройки VSCode(autoSeve - onFocusChange; formatOnSave - вкл;
   codeActionsOnSave - all)
5. Добавляем настройки в
   проект(https://github.com/goitacademy/react-lint-config)
6. настраиваем абсолютные импорты
   (https://create-react-app.dev/docs/importing-a-component/#absolute-imports)
   (создаем файл jsconfig.json,вставляем... после чего можно писать import
   Button from 'components/Button'; без ../../../)
7. Ставим пакет [https://reactrouter.com/core/guides/quick-start] - (npm install
   react-router-dom)
8. Анимированная стилизация npm install react-transition-group
9. Redux - npm i redux
10. React-redux - npm i react-redux
11. Redux DevTools (http://extension.remotedev.io/) - npm install --save-dev
    redux-devtools-extension
12. В файл с редьюсером import { createStore, applyMiddleware } from 'redux';
    import { composeWithDevTools } from 'redux-devtools-extension'; const store
    = createStore(reducer, composeWithDevTools());
13. npm install @reduxjs/toolkit
14. npm i axios
15. npm install @material-ui/core
17. npm i redux-persist

---

16. deploy on netlify
17. В корне создать файл netlify.toml - ( [build] publish = "build"

    [[redirects]] from = "/" to = "/index.html" status = 200)

18. npm install netlify-cli -g
19. netlify login
20. Authorized
21. package.json ("predeploy": "npm run build", "deploy": "netlify deploy -p")
22. npm run deploy
23. Create (enter), enter, name project
24. netlify open --site

---

18. deploy on gh-pages
19. npm run build
20. "homepage": "https://myusername.github.io/my-app",
21. npm run build
22. npm install --save gh-pages
23. "predeploy": "npm run build", "deploy": "gh-pages -d build",
24. npm run deploy
