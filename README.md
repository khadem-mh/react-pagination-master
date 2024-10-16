<img src="https://github.com/khadem-mh/pagination-react/blob/main/public/Images/master.png?raw=true" width="1000">

# A quick look

- One of the smallest, most flexible and simplest Pagination packages for the React framework. Full root control in Pagination fully automatically without refreshing the page 👨‍💻

- Full control of root and URL on every page

- Many features and options to customize Pagination

- Transferring the user from the wrong root to the right root

- A completely optimized and compact package for your website pagination without many additional dependencies

- This package has no dependencies. Only two main dependencies, react and react-dom, which are the basis of the website and should be

- For each page, the data of the same page is received from the server and displayed in the DOM

## View of the Library
<img src="https://github.com/khadem-mh/pagination-react/blob/main/public/Video/page-1.gif" width="1000">
<img src="https://github.com/khadem-mh/pagination-react/blob/main/public/Images/modes.png?raw=true" width="1000">

## Usage ✍
- Install Package
```bash
npm i react-pagination-master
```
- Import the pagination component first.
```javascript
import Pagination from 'react-pagination-master'
```
- Then enter these essential items to launch pagination
```javascript
<Pagination
    arrDatas={dataPage}
    countItems={10}
    countDataPerPage={1}
    pathName={'/panel/users/'}
    onFilterDatas={({ showDatasInDOM, activePage }) => {
      setActivePage(activePage)          // Necessary
      setFilterDataPage(showDatasInDOM) // Necessary
    }}
/>
```

# Ready Example
```javascript
import { useState, useEffect } from 'react'
import Pagination from 'react-pagination-master'

export default function App() {
  
  // (necessary) The initial values ​​must be as below ✍️       |||
  const [dataPage, setDataPage] = useState([])                //\\ Your Datas   
  const [filterDataPage, setFilterDataPage] = useState([])   //  \\ Filter Datas
  const [activePage, setActivePage] = useState(null)        //    \\ Active Page
  const [isLoading, setIsLoading] = useState(null)         //      \\ Status Loading Datas

  useEffect(() => {
    if (activePage) {
      fetch(`https://jsonplaceholder.typicode.com/users/${activePage}`)
        .then(res => res.json())
        .then(data => {
          setDataPage([data])
          /*          [    ]
            If the returned data was only an object, 
            you should put the object in an array, otherwise it is not needed.
          */
        });
    }
  }, [activePage])

  return (
    <section>

      {
        isLoading
          ?
          <p>Loading...</p>
          :
          filterDataPage.map((datas, index) => (
            <p key={index}>{datas.name}</p>
          ))
      }

      <Pagination
        arrDatas={dataPage}
        countItems={10}
        countDataPerPage={1}
        pathName={'/panel/users/'}
        onFilterDatas={({ showDatasInDOM, activePage, isLoading }) => {
          setActivePage(activePage)          // Necessary
          setFilterDataPage(showDatasInDOM) // Necessary
          setIsLoading(isLoading)          // Optional
        }}
      />

    </section>
  )
}
```
## Package Logic Props 👨‍💻

| Parameter         | Type       | Field Status    | Description              |
| :--------         | :-------   | :------         | :-------------------------------- |
| `arrDatas`        | `Array`    | **_Required_**  | Array of products or anything else |
| `countItems`      | `Number`   | **_Required_**  | You must enter the exact number of your items to calculate the number of pages |
| `countDataPerPage`| `Number`   | **_Required_**  | On each page you want to show multiple items |
| `pathName`        | `String`   | **_Required_**  | The URL that your product is located in. |
| `activePage`      | `Number`   | **_Optional_**  | Selecting the active page as soon as the page is loaded for the user |
| `onFilterDatas`   | `Function` | **_Required_**  | The return function contains arguments to handle pages |

### ╔╚ `onFilterDatas` ╝╗

`onFilterDatas` is a return function from the package side that returns 3 arguments and you must extract the same names as below from the input argument

| Parameter         | Type       | Field Status    | Description              |
| :--------         | :-------   | :------         | :-------------------------------- |
| `showDatasInDOM`  | `Array`    | **_Required_**  | An array of objects and data to display in the DOM |
| `activePage`      | `Number`   | **_Required_**  | The page where the user is active |
| `isLoading`       | `Boolean`  | **_Optional_**  | Loading is shown to the user until the data of that page is fully loaded |

For example:

```javascript
onFilterDatas={({ showDatasInDOM, activePage, isLoading }) => {
    setActivePage(activePage)          // Necessary
    setFilterDataPage(showDatasInDOM) // Necessary
    setIsLoading(isLoading)          // Optional
}}
```
### ╔╚ `arrDatas` ╝╗
_**example format your datas**_. 

```javascript
arrDatas = {[
    {id:1, text: "1", ...},
    {id:2, text: "2", ...},
    {id:3, text: "3", ...},
    {id:4, text: "4", ...},
]}
```

`arrDatas` is an array and is used to store the data of the active page that the user is on, and after the user goes to the next page, the new data should replace the previous data of the array.

This array should never be placed inside another array, but the data you want in the form of objects should be inside this array.

Be sure to try using an empty array in React's useState hook for initialization
```javascript
const [dataPage, setDataPage] = useState([])

return (
    <div>
        <Pagination
            arrDatas={dataPage}
        />
    </div>
)
```

## Package Style Props 💎
| Parameter       | Type      | Field Status   | Description
| :--------       | :------   | :----------    | :----------------------------  |
| `isArrowsShow`  | `Boolean` | **_Optional_** | Show arrow icons to move between pages          |
| `separateBox`   | `Boolean` | **_Optional_** | Separation of three point boxes                 |
| `stickingBoxes` | `Boolean` | **_Optional_** | Putting all the boxes together                  |
| `directionPage` | `String`  | **_Optional_** | Setting the direction of pagination. rtl OR ltr |
| `bgColor`       | `String`  | **_Optional_** | ⚪ ⚫ 🔴 🔵 ...              |
| `bgColorActive` | `String`  | **_Optional_** | ⚪ ⚫ 🔴 🔵 ...              |
| `color`         | `String`  | **_Optional_** | ⚪ ⚫ 🔴 🔵 ...              |
| `colorActive`   | `String`  | **_Optional_** | ⚪ ⚫ 🔴 🔵 ...              |
___
<img src="https://github.com/khadem-mh/khadem-mh/blob/khadem/my-img/2024-10-01_17-25-38.png" width="1000"/>

>### Social Network
> [<img src="https://github.com/khadem-mh/pagination-react/blob/main/public/Images/github.png" width="30">](https://github.com/khadem-mh)
> [<img src="https://github.com/khadem-mh/pagination-react/blob/main/public/Images/linkedin.png" width="30">](https://www.linkedin.com/in/khadem-mh/)
> [<img src="https://github.com/khadem-mh/pagination-react/blob/main/public/Images/telegram.png" width="30">](https://t.me/mhkhadem)
