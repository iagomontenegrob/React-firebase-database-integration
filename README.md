# React-firebase-integration
 Functional integration between react and firebase. Example application with firebase database. On this application you can push a user object by a simple form and on realtime see a list of users already on the firebase database.

### Installation
Run these commands in the project folder

`npm install`

`npm start`

### Cofig
If you still don’t have a Firebase account, create one in <link>. Log in your account, go to the (não tenho ideia de como é console vou procurar) and create a project. After entering the project, look for ‘add Firebase to your app on web’, it will create a code just like the one below:

```html
<script src="https://www.gstatic.com/firebasejs/4.6.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "<YOUR-API-KEY>",
    authDomain: "<YOUR-PROJECT-ID>.firebaseapp.com",
    databaseURL: "https://<YOUR-PROJECT-ID>.firebaseio.com",
    projectId: "<YOUR-PROJECT-ID>",
    storageBucket: "<YOUR-PROJECT-ID>.appspot.com",
    messagingSenderId: "<YOUR-MESSAGING-SENDER-ID>"
  };
  firebase.initializeApp(config);
</script>
```

In project, update the DB_CONFIG in /Config/config.js file with your informations.

### Database Permissions
If you have a problem like Permission Denied check the Rules of your firebase db. The rule file encontra-se na segunda aba do database, edite caso necessário para deixar como é mostrado abaixo:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

`
 
 
