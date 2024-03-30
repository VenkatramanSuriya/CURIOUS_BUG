const firebaseConfig = {
    apiKey: "AIzaSyCNpbyIZWhrwMpKb4oiwuNtvpSC4eGqlYI",
    authDomain: "curious-bug.firebaseapp.com",
    databaseURL: "https://curious-bug-default-rtdb.firebaseio.com",
    projectId: "curious-bug",
    storageBucket: "curious-bug.appspot.com",
    messagingSenderId: "965894299687",
    appId: "1:965894299687:web:5b6e8064557f722d1dee02"
  };

  // initialize FB
  firebase.initializeApp(firebaseConfig);

  // Reference DB
  const contactFormDB = firebase.database().ref('CURIOUS-BUG')

  document.getElementById('CURIOUS-BUG').addEventListener('submit', submitForm);


  function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var emailid = getElementVal('emailid');
    var msgContent = getElementVal('msgContent');
  }

  const getElementVal = (id) => {
    return document.getElementById(id).Value;
  };