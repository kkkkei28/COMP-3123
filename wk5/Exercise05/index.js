const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');

app.use(express.json());

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req,res) => {
  res.send('<h1>Welcome to ExpressJs Tutorial</h1>');
});

/*
- Return all details from user.json file to client as JSON format
*/
router.get('/profile', (req,res) => {
  res.json({username: 'testUser', age: 25, email: 'sample@example.com'});
});

/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/


router.post('/login', (req, res) => {
  const { username, password } = req.body;

  const validUsername = 'testUser';
  const validPassword = 'password123';

  if (username !== validUsername) {
    res.json({ status: false, message: 'User Name is invalid' });
  } else if (password !== validPassword) {
    res.json({ status: false, message: 'Password is invalid' });
  } else {
    res.json({ status: true, message: 'User Is valid' });
  }
});


/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout', (req,res) => {
  const username = req.query.username;
  res.send(`<b>${username} successfully logout.</b>`);
});



/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
app.use((err, req, res, next) => {
  res.status(500).send('Server Error');
});

app.use('/', router);

app.listen(8081, () => {
  console.log('Web Server is listening at port 8081');
});