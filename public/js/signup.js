

//even handler for sign up form submission
async function signUpHandler()
{ 
  //needs name and password
  const name = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();

  //fetch call to user api to create a new user
  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      name,
      password
    }),
    headers: {"Content-Type": "application/json"}
  });

  const data = await response.json();
  console.log(data.body.id);

  //if response is ok 
  if(response.ok)
  {
    //redirect to dashboard for that new user
    document.location.replace(`/dashboard/${data.body.id}`);
  }else
  {
    //redirect to an error page
    document.location.replace('/404');
  }
}

document.querySelector('#signUpBtn').addEventListener('click', signUpHandler);