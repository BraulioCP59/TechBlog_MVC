
const logout = async () => {
   
    const response = await fetch('/api/auth/logout');

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Unable to logout, here we go again");
    }
  };
  
document.querySelector('#logout').addEventListener("click", logout);
  