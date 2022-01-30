const addPostBtn = document.querySelector('#newPost');
const postCards = document.querySelector('.card');


async function newPostHandler ()
{

}

async function editPostHandler(e)
{
    console.log(e.currentTarget.getAttribute('id'));
    document.location.replace(`/update-post/${e.currentTarget.getAttribute('id')}`)
}

addPostBtn.addEventListener('click', newPostHandler);
postCards.addEventListener('click', editPostHandler);