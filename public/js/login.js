//selectors for sign up form data

const signUpBtn = document.querySelector('#signUpBtn');
const loginBtn = document.querySelector('#loginBtn');

//even handler for sign up form submission
// async function signUpHandler()
// { 
//   //needs name, email and password
//   const username = document.querySelector('#username').value.trim();
//   const password = document.querySelector('#password').value.trim();

//   //fetch call to user api to create a new user
//   const response = await fetch('/api/user', {
//     method: 'POST',
//     body: JSON.stringify({
//       name,
//       username,
//       password
//     }),
//     headers: {"Content-Type": "application/json"}
//   });

//   //if response is ok 
//   if(response.ok)
//   {
//     //redirect to dashboard for that new user
//     document.location.replace(`/dashboard/${response.id}`);
//   }else
//   {
//     //redirect to an error page
//     document.location.replace('/404');
//   }
// }


//event handler for logging in
async function loginHandler()
{
  console.log('logging from line 42');
  const username = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();

  if(username && password)
  {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: {"Content-Type": "application/json" }
    });

    //
    if(response.ok)
    {
      //redirect to the dashboard for that existing user
      document.location.replace(`/dashboard/${response.id}`);
    }else
    {
      alert("unable to login");
    }
  }
}
  
// Event
//signUpBtn.addEventListener("click", signUpHandler);
loginBtn.addEventListener("click", loginHandler);
  