# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

React - Projekt 1

Twoim zadaniem będzie przerobienie pierwszego projektu zaliczeniowego z części HTML & CSS na Reacta.
Jeżeli nie brałeś udziału w części HTML & CSS i nie masz jeszcze gotowego projektu, przygotuj go wedle wytycznych podanych niżej.

Uwzględnij w projekcie następujące kwestie:

Lista ofert powinna być generowana na podstawie tablicy w JS i funkcji .map

Pojedynczy box oferty powinien być osobnym komponentem, który przyjmuje parametr "isNew", ustawiający napis "nowość" oraz czerwoną kropkę zgodnie z jego wartością

BONUS: Spróbuj wyświetlić za pomocą tablicy również listę pracowników. Pojedynczy wiersz powinien przyjmować parametry odpowiadające za imię, nazwisko, stanowisko, opis oraz adres do zdjęcia pracownika

POWODZENIA!

PROJEKT HTML - POLECENIA

Design projektu w aplikacji Figma znajdziesz pod tym adresem: https://www.figma.com/file/DGyuGsapuc5gGf5KMEEGG3/Projekt-zaliczeniowy-1

Czcionka, której używamy to Roboto i jest do znalezienia na portalu Google Fonts (https://fonts.google.com)

Ikony, z których będziesz korzystać znajdziesz w paczce FontAwesome (https://fontawesome.com/)

Przygotuj kontener o rozmiarze 960px (szerokość), który będzie zawsze na środku - to w nim umieszczaj treść

Pierwsza z sekcji powinna zajmować 100% wysokości okna przeglądarki (vh)

Po najechaniu na przycisk na stronie głównej (z tłem), spraw, że jego tło stanie się białe, a tekst czarny (border pozostaje bez zmian). Zmiana powinna być płynna i trwać sekundę. Przycisk po kliknięciu powinien nas przenieść do sekcji “oferta”. transition;

Spraw aby przyciski w nawigacji “o nas” oraz “oferta” przenosiły użytkownika w odpowiednie miejsce na stronie przy zachowaniu płynnego scrolla. Przycisk “kontakt” powinien być “disabled” czyli nieaktywny (ustaw odpowiedni kursor). cursor: not-allowed

Zdjęcie w tle na stronie tytułowej może być dowolnym zdjęciem o rozmiarze maksymalnie 1920x1080 i wadze nieprzekraczającej 400 KB (możesz użyć Lorem Picsum). Pamiętaj, że musisz nałożyć na nie kolejnego diva, który je częściowo przykryje - będzie “cieniem”. Robi się to po to aby tekst na zdjęciu był bardziej czytelny (kontrast).

Zdjęcia “pracowników” powinny być zdjęciami przedstawiającymi osoby o rozmiarze maksymalnie 500x500. Twoim zadaniem jest ustawić je jako zdjęcie tła diva, który jest okrągły. Pamiętaj, że zdjęcie powinno dopasować się rozmiarem do diva oraz wycentrować w pionie i poziomie.

W zakładce “o nas” elementy z pracownikami powinny mieć wspólną klasę, ale mieć jeden modyfikator, który sprawia, że każdy nieparzysty zaczyna się zdjęciem z lewej, a każdy parzysty zdjęciem z prawej strony. nth-of-type(odd) / nth-of-type(even)

Paddingi we wszystkich sekcjach powinny być ujednolicone (górny i dolny powinny być takie same, a treść sekcji powinna zaczynać się i kończyć w tej samej linii).

W boksach, nieważne jaką ilość treści podamy, powinna być zawsze wyśrodkowana w pionie i poziomie.

Po najechaniu na boxy, spraw aby powiększyły się o 5% przy pomocy funkcji transform: scale(1.05). Spraw aby animacja była płynna i trwała pół sekundy
# project-5-220127.github.io
