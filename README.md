## Proposal:
I am creating a writing app where people can post their writing. 

## Back-End Link
https://github.com/TrianePeart/Triane-Portfolio-Backend/blob/main/README.md

**Front End Web Address**
https://spiffy-smakager-04198e.netlify.app/posts

**Back End Web Address**
https://writetingz-deploy-backend.onrender.com


1. As a User, I will be greeted by a welcome page

2. As a User, I will see several post on display as well as a button that navigates the user to a create page or (write section) where they can create, post, edit and delete articles. 

3. As a User, I will be able to click and read the articles available. 

4. As a User, I can utilize the search bar on the home page to find as well as filter articles by topics.

**Flow Chart**

<p align="center"> <img width="461" height='400' alt="Screenshot 2023-02-08 at 4 05 03 PM" src="https://user-images.githubusercontent.com/87388431/217650610-4fe101bc-ccad-4dd3-8da0-fe6b93192533.png"></p>


**Stretch features**

1. As a User, when navigated to the create page, I will be taken to a form that counts words entered as well as suggests synonyms from a dictionary API while writing

1. As a user, I will be able to log in to my account which allows me to edit and delete only my work. 

1. As a user, I can bookmark works that I enjoy. 


**JD suggests**
>For this iteration, I would suggest creating the writings, maybe seeding some of the writings so that the user can see all writings. Focus on the crud for the writings. If you are able to get that done, you can actually easily count the words with a function in your front or back-end using a function so that part seems doable. I would hold off on the dictionary api. If you finish all this I would maybe work on bookmark next. copy infringement page is not a tough goal either. You could create a modal that popped up after a certain time with the TOS if you wanted and you have to click Agree in order to continue. That's a stretch goal though.

## Trello Board

<img width="1440" alt="Screenshot 2023-02-08 at 3 32 29 PM" src="https://user-images.githubusercontent.com/87388431/217644924-81fcfa3b-b5b8-4893-aba8-36ac06da2a0d.png">
https://trello.com/b/GFs2Fn7g/write-tings-to-do-board

## Final Results 

**WELCOME PAGE**

<img width="1438" alt="WELCOME" src="https://user-images.githubusercontent.com/87388431/219719003-29f45108-3e92-4bda-9566-2461eefe101e.png">


**MAIN PAGE**

<img width="1435" alt="SHOW_PAGE" src="https://user-images.githubusercontent.com/87388431/219719199-9c79a252-c9c3-4c77-a2a3-bdb4fde27842.png">


**SHOW PAGE**

<img width="1432" alt="SHOW_CARD" src="https://user-images.githubusercontent.com/87388431/219719839-4fff7529-4880-4cf3-854b-eb88a32db350.png">


**EDIT PAGE**

<img width="1439" alt="EDIT" src="https://user-images.githubusercontent.com/87388431/219719936-55249e59-881f-44df-811c-2a025c3954e5.png">

**NEW PAGE**

<img width="1429" alt="NEWPAGE" src="https://user-images.githubusercontent.com/87388431/219719752-2db42d1b-c5b9-4d4d-b855-3f63a7d79f32.png">

**PROMPT PAGE**

<img width="1433" alt="PROMPT_PAGE" src="https://user-images.githubusercontent.com/87388431/219719709-e8a481b8-f5c7-4de2-913b-33d71421a2be.png">


**ERROR PAGE**

<img width="1435" alt="ERROR_PAGE" src="https://user-images.githubusercontent.com/87388431/219719577-94d42b8e-6b7f-4bb1-866f-e227a5628f46.png">


##Updates

**Google auth for sign in and welcome**

<img width="1395" alt="Screenshot 2023-02-20 at 3 18 10 PM" src="https://user-images.githubusercontent.com/87388431/220191746-921b5e2d-1b2d-4aac-8d76-c1df3b5d433c.png">

<img width="1435" alt="Screenshot 2023-02-20 at 3 17 08 PM" src="https://user-images.githubusercontent.com/87388431/220191805-026c51e8-9575-47bd-bce0-e82d4ea166e0.png">

**About page**

<img width="1435" alt="Screenshot 2023-02-20 at 3 17 08 PM" src="https://user-images.githubusercontent.com/87388431/220191929-fc4c3315-6714-4e85-b536-fcb6cc59e679.png">

**Lofi music**

<img width="678" alt="Screenshot 2023-02-18 at 8 59 21 PM" src="https://user-images.githubusercontent.com/87388431/220192007-2bd115c4-4044-4d95-a9b4-432021e576be.png">



###ADDITIONAL RESOURCES USED

I had attempted to use CHATGPT for small areas of code but found it didn't code how I liked so I took the machines idea and cleaned it how I liked for my word counter. 

<img width="1190" alt="Screenshot 2023-02-17 at 12 17 40 PM" src="https://user-images.githubusercontent.com/87388431/219721233-218efc3f-bb26-44c2-9a4c-99d7eb1de033.png">

Used React Audio player

https://www.npmjs.com/package/react-audio-player

Tim: https://github.com/mckiernantim/firebase-react

## Getting Started

1. Navigate to your directory.
1. `cd` into the directory.
1. Fork and clone this repository.

> **Note**: Your `back-end` directory should be adjacent to your `front-end` directory. Both should be their own git repositories. The top-level folder should **NOT** be a git repository.

### Front-end setup

It would be best if you opened a new terminal tab dedicated to running and developing your front-end.

- `cd front-end`
- `touch .env`

**.env**

```
REACT_APP_API_URL=http://localhost:3333
```

- `npm install` - install npm packages listed in `package.json`.
- `npm start` - make sure your React app can start
-  `npm i react-audio-player`


