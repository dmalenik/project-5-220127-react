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

Twoim zadaniem b??dzie przerobienie pierwszego projektu zaliczeniowego z cz????ci HTML & CSS na Reacta.
Je??eli nie bra??e?? udzia??u w cz????ci HTML & CSS i nie masz jeszcze gotowego projektu, przygotuj go wedle wytycznych podanych ni??ej.

Uwzgl??dnij w projekcie nast??puj??ce kwestie:

Lista ofert powinna by?? generowana na podstawie tablicy w JS i funkcji .map

Pojedynczy box oferty powinien by?? osobnym komponentem, kt??ry przyjmuje parametr "isNew", ustawiaj??cy napis "nowo????" oraz czerwon?? kropk?? zgodnie z jego warto??ci??

BONUS: Spr??buj wy??wietli?? za pomoc?? tablicy r??wnie?? list?? pracownik??w. Pojedynczy wiersz powinien przyjmowa?? parametry odpowiadaj??ce za imi??, nazwisko, stanowisko, opis oraz adres do zdj??cia pracownika

POWODZENIA!

PROJEKT HTML - POLECENIA

Design projektu w aplikacji Figma znajdziesz pod tym adresem: https://www.figma.com/file/DGyuGsapuc5gGf5KMEEGG3/Projekt-zaliczeniowy-1

Czcionka, kt??rej u??ywamy to Roboto i jest do znalezienia na portalu Google Fonts (https://fonts.google.com)

Ikony, z kt??rych b??dziesz korzysta?? znajdziesz w paczce FontAwesome (https://fontawesome.com/)

Przygotuj kontener o rozmiarze 960px (szeroko????), kt??ry b??dzie zawsze na ??rodku - to w nim umieszczaj tre????

Pierwsza z sekcji powinna zajmowa?? 100% wysoko??ci okna przegl??darki (vh)

Po najechaniu na przycisk na stronie g????wnej (z t??em), spraw, ??e jego t??o stanie si?? bia??e, a tekst czarny (border pozostaje bez zmian). Zmiana powinna by?? p??ynna i trwa?? sekund??. Przycisk po klikni??ciu powinien nas przenie???? do sekcji ???oferta???. transition;

Spraw aby przyciski w nawigacji ???o nas??? oraz ???oferta??? przenosi??y u??ytkownika w odpowiednie miejsce na stronie przy zachowaniu p??ynnego scrolla. Przycisk ???kontakt??? powinien by?? ???disabled??? czyli nieaktywny (ustaw odpowiedni kursor). cursor: not-allowed

Zdj??cie w tle na stronie tytu??owej mo??e by?? dowolnym zdj??ciem o rozmiarze maksymalnie 1920x1080 i wadze nieprzekraczaj??cej 400 KB (mo??esz u??y?? Lorem Picsum). Pami??taj, ??e musisz na??o??y?? na nie kolejnego diva, kt??ry je cz????ciowo przykryje - b??dzie ???cieniem???. Robi si?? to po to aby tekst na zdj??ciu by?? bardziej czytelny (kontrast).

Zdj??cia ???pracownik??w??? powinny by?? zdj??ciami przedstawiaj??cymi osoby o rozmiarze maksymalnie 500x500. Twoim zadaniem jest ustawi?? je jako zdj??cie t??a diva, kt??ry jest okr??g??y. Pami??taj, ??e zdj??cie powinno dopasowa?? si?? rozmiarem do diva oraz wycentrowa?? w pionie i poziomie.

W zak??adce ???o nas??? elementy z pracownikami powinny mie?? wsp??ln?? klas??, ale mie?? jeden modyfikator, kt??ry sprawia, ??e ka??dy nieparzysty zaczyna si?? zdj??ciem z lewej, a ka??dy parzysty zdj??ciem z prawej strony. nth-of-type(odd) / nth-of-type(even)

Paddingi we wszystkich sekcjach powinny by?? ujednolicone (g??rny i dolny powinny by?? takie same, a tre???? sekcji powinna zaczyna?? si?? i ko??czy?? w tej samej linii).

W boksach, niewa??ne jak?? ilo???? tre??ci podamy, powinna by?? zawsze wy??rodkowana w pionie i poziomie.

Po najechaniu na boxy, spraw aby powi??kszy??y si?? o 5% przy pomocy funkcji transform: scale(1.05). Spraw aby animacja by??a p??ynna i trwa??a p???? sekundy
# project-5-220127.github.io
