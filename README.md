# FM - Image Gallery with Favorites List

![Preview - Image Gallery with Favorites List](./public/preview.png)

[=> Live Preview on Vercel](https://image-gallery-zwickermann.vercel.app/)


## The challenge

Based on the albumId, the user should first be shown the photo albums grouped together in an overview. By selecting a photo album, the user is taken to the photo collection of the selected album.

The user should have the option of favoriting individual photos and viewing their favorite images in a separate view. No data needs to be stored in the backend or in a database at any time (client only).

#### The users should be able to:

- Select a photo album
- View all photos of an album
- Select photos as favorites
- View favorite photos in a separate view


#### REST API URLs:

[https://jsonplaceholder.typicode.com/albums](https://jsonplaceholder.typicode.com/albums)

https://jsonplaceholder.typicode.com/albums/{id}

[https://jsonplaceholder.typicode.com/photos](https://jsonplaceholder.typicode.com/photos)

https://jsonplaceholder.typicode.com/photos/{id}


## Production

I used React (Vite), TypeScript, and SCSS.

##### Notes 
```
npx create-vite@latest my-app --template react
npm install sass
npm run dev
npm run build
```