# Crow Watch 1.0
## An App for Watching My Deck
Check out a basic prototype [HERE](https://www.figma.com/proto/ZFPJCIvVZle8H7gRxOmZkJ01/Original-Mockup?node-id=1%3A2&scaling=scale-down).


#### But Why?

After moving to Oakland, CA from NYC, my wife and I were overjoyed to
have an apartment with outdoor space.  Soon enough we had a smattering of
succulents, herbs, flowers, and 2 lemon trees.

Our joy and pleasure was short lived, however.  A murder of crows spent their days flitting from perch to perch on our block, with several of these perches located on our deck furniture and railings.  Our outdoor sanctuary was a crow toilet...Gross!

Inspired by [Dave Ceddia's](https://daveceddia.com/) post about [pulled pork and react native](https://daveceddia.com/perfect-pulled-pork-react-native-expo-express/) I decided to dive into React Native and AWS in order to try and prevent crows from hanging out on my deck.

#### What Crow Watch Really Does

Crow Watch taps into Expo's ability to connect with native features, specifically an old iPhone's
camera.  Crow Watch takes a picture every 30 seconds and saves it to my S3.  Currently, the client facing app imports the stored photos and allows the user to delete a photo, or save the photo to a
different S3 directory.  The save photo feature is specifically geared towards collecting photos of crows to begin training a neural network.  For more on later versions see **Future Plans**.


#### Technologies Used:

##### Front End
- Expo and Expo Client
- React
- React Native
- React Native Paper
- Amazon Web Services - S3
- AWS Amplify
- AWS Amplify React Native

##### Back End
- Link to Back End Repo: [Crow Watch Back End](https://github.com/EvanReinstein/crow-watch-5000)
- Amazon Web Services - S3, Cognito
- AWS Amplify
- AWS Amplify React Native
- Expo
- React
- React Native

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

***

#### Future Plans
Crow Watch is a very personal project and an app that I will be continuing to tweak and perfect
until it has helped effectively prevent crows from picking at my picnic table succulents!

- Crow Watch 1.0:
  - Customize Auth UI
  - Implement RefreshControl on Profile page
- Crow Watch 2.0: Access camera device's speaker in order to play a sound to disturb crows.
- Crow Watch 3.0: Use neural networking to teach the app to recognize crows in the most recent photo taken and play the sound to scare them off automatically.
