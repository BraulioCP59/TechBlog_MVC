//selectors for sign up form data
const signUpBtn = document.querySelector('#signUpBtn');
const loginBtn = document.querySelector('#loginBtn');


//event handler for logging in
async function loginHandler()
{
  const username = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();

  if(username && password)
  {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: {"Content-Type": "application/json" }
    });

    const data = await response.json();
    //
    if(response.ok)
    {
      window.localStorage.setItem('username',username);
      //redirect to the dashboard for that existing user
      document.location.replace(`/dashboard/${data.user.id}`);
    }else
    {
      alert("unable to login");
    }
  }
}
  
// Event
//signUpBtn.addEventListener("click", signUpHandler);
loginBtn.addEventListener("click", loginHandler);
  