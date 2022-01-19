# INVENTORY MANAGER by Santiago Manso Castro

This project is my attempt to improve the perfomance in terms of decreasing the amount of products REFUNDS and OUTBOUNDING that comes
when a picker encounters a situation like the following. ex: item X shows 2/2 but there is only 1 item on the shelf and the other is
placed in a backup shelf within the warehouse, the issue lies with the way each HUB organices it's own backupshelf, and the current
app does not contemplate this topic, therefore the output is the following (in most scenarios) the picker grabs the only available item from the shelf and then asks for the help of any Inventory associate, the inventory try to find the item but there is no guide or indication where the missing product could be, so a REFUND is made to return the money back to the customer and the missing item
is removed from the system (OUTBOUND).
This is my approach to this issue, at the very moment of INBOUNDING items, they should have a backup shelf assign to them
so that the stock is spplited among the SHELF STOCK and the BACKUP STOCK, and the TOTAL STOCK comes from the interaction between the last two, i still need to implement features such as creating those backup shelf numbers (for the moment they come as a property of the product object) so every warehouse should be able to create their own backupshelfs or area (for example a rectangular area in the floor made from colored duck tape, blue red etc.) and also name those shelfs-areas where the backup products are going to be placed (A1-A5, B1-B5, etc). another feature i would like to include is the possibility to make a camera capture and latter upload the picture to the server and pass down the URL as another property of the backup shelf model in the DB.
This application was created using the NPX CREATE-REACT-APP with a combination of AXIOS, TAILWIND CSS and REACT ROUTER DOM.

## INSTALATION

after cloning the repository run:

### `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

This app is deployed on Netlify under the domain https://reverent-bartik-81302d.netlify.app/

for the backend is deployed in HEROKU, under the domain of https://inv-santi.herokuapp.com/
