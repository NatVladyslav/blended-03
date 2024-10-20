Створи базову маршрутизацію для застосунку пошуку і зберігання країн

В проекті налаштовані Alias imports тому імпорти можна вказувати з папки
`components`

```jsx
import { Text } from 'components';
```

У застосунку повинні бути такі маршрути.

- `'/'` - сторінка `<Home>`, домашня сторінка зі переліком Європейських країн.
- `'/country'` - сторінка `<SearchCountry>`, сторінка пошуку країн по регіону.
- `'/country/:countryId'` - сторінка `<Country>`, сторінка з детальною
  інформацією про країну

Якщо користувач зайшов за неіснуючим маршрутом, його необхідно перенаправляти на
домашню сторінку,\
використайте компонент `Navigate`

Для запиту на бекенд за країнами використовуйте функції в файлі
`service/countryApi`

Для бекенду використовується [[REST COUNTRIES]](https://restcountries.com/). У
цій роботі будуть використовуватися наступні ендпоінти.

- [/v3.1/region/europe](https://restcountries.com/v3.1/subregion/europe) перелік
  країн Європи для створення колекції на головній сторінці.
- [/v3.1/region/{region}](https://restcountries.com/#api-endpoints-v3-region)
  пошук країни по регіону на сторінці пошуку країн.
- [/v3.1/name/{name}](https://restcountries.com/#api-endpoints-v3-name) запит на
  повну інформацію про країну для сторінки країни.

В проекті налаштовані Alias imports тому всі імпорти можна вказувати з папки
`components`

```jsx
import { Heading } from 'components';
```

Реалізувати функціонал сторінки `<Home>`, при відкриті сторінки відправляти
запит за країнами європи і відображати на сторінці

Для створення списку країн використовуй компонент `CountryList`.

Для створення сітки використовуй компоненти `<Grid>` та `<GridItem>`\
всереденікомпонента `CountryList`\
Пиклад розмітки однієї li

```
 <GridItem >
  <Link >
    <img src='' alt='' />
  </Link>
</GridItem>
```

## Завдання 2

Реалізувати функціонал сторінки `<SearchCountry>`.\
Підключити форму, компонент `< SearchForm/>` на сторінку `<SearchCountry>`.

## Опис компонента `<SearchForm>`

Компонент приймає один проп `onSubmit` - функцію для передачі значення
внутрішнього стану під час сабміту форми. Він буде наступної структури.

```jsx
<form className={styles.form}>
  <button className={styles.button} type="submit">
    <FiSearch size="16px" />
  </button>

  <select
    aria-label="select"
    className={styles.select}
    name="region"
    required
    defaultValue="default"
  >
    <option disabled value="default">
      Select a region
    </option>
    <option value="america">America</option>
  </select>
</form>
```

При сабміті форми відпрвляти запит з вибраним регіоном.\
Для створення розмітки використову компонент `CountryList`

## Завдання 3

Релізувати функціонал сторінки `<Country>`.\
Додати функціонал для компонента `GoBackBtn`
