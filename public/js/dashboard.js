
const addPostBtn = document.querySelector('#newPost');
const postCards = document.querySelector('.card');
const titleField = document.querySelector('#title'); 
const contentField = document.querySelector('#content');
let author_id = window.location.pathname.substring(11);
const createPostBtn = document.querySelector('#createPost');


async function newPostHandler ()
{
    document.location.replace('/create-post');
    window.localStorage.setItem('userId', author_id);
}

async function editPostHandler(e)
{
    console.log(e.currentTarget.getAttribute('id'));
    document.location.replace(`/update-post/${e.currentTarget.getAttribute('id')}`)
}

async function createPostHandler()
{
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value;
    author_id = parseInt(window.localStorage.getItem('userId'));
    console.log(author_id);

    const response = await fetch('/api/post',{
        method: 'POST',
        body: JSON.stringify({
            title,
            content,
            author_id
        }),
        headers: {"Content-Type": "application/json"}
    });

    //if response is ok 
    if(response.ok)
    {
        //redirect to dashboard for that new user
        document.location.replace(`/dashboard/${author_id}`);
    }else
    {
        //redirect to an error page
        document.location.replace('/404');
    }

}

async function editPostHandler()
{

}

addPostBtn ? addPostBtn.addEventListener('click', newPostHandler) : console.log('add post option not found');
postCards ? postCards.addEventListener('click', editPostHandler) : console.log('existing posts not found');
createPostBtn? createPostBtn.addEventListener('click', createPostHandler) : console.log('create post form not found');
titleField && contentField ? titleField.addEventListener('click', editPostHandler) : console.log('edit post form not found');
