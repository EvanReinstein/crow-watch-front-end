# Crow Watch
## An App for Watching My Deck

#### But Why?

After moving to Oakland, CA from NYC, my wife and I were overjoyed to
have an apartment with outdoor space.  Soon enough we had a smattering of
succulents, herbs, flowers, and 2 lemon trees.

Our joy and pleasure was short lived, however.  A murder of crows spent their days flitting from perch to perch on our block, with several of these perches located on our deck furniture and railings.  Our outdoor sanctuary was a crow toilet...Gross!

Inspired by [Dave Ceddia's](https://daveceddia.com/) post about [pulled pork and react native](https://daveceddia.com/perfect-pulled-pork-react-native-expo-express/) I decided to dive into React Native and AWS in order to try and prevent crows from hanging out on my deck.

#### Technologies Used:

##### Front End
- Expo and Expo Client
- React
- React Native
- React Native Paper

##### Back End
- Link to Back End Repo: [Crow Watch Back End](https://github.com/EvanReinstein/crow-watch-5000)
- Amazon Web Services - S3
  - AWS Amplify
  - AWS Amplify React Native
***

#### Local Installation
1. Get Expo Client from the App Store on your phone in order to view it in development.
2. Make sure to have an AWS account
  - This will allow you to configure your own S3 storage...sorry you can't use mine quite yet!
3. Git clone backend from above
 - Make sure to change IP address to localhost or local IP in Back End App.js:46
 - `npm i` in order to install dependencies
 - `amplify configure` in order to configure your amplify User and S3
4. Git clone front end
 - `npm i` in order to install dependencies
 - Configure the front end to match the back end's S3.  This can be done in Profile.js
