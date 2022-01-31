
const addPostBtn = document.querySelector('#newPost');
const postCards = document.querySelectorAll('.postCards');
const titleField = document.querySelector('#title'); 
const contentField = document.querySelector('#content');
let author_id = window.location.pathname.substring(11);
const createPostBtn = document.querySelector('#createPost');
const updatePostBtn = document.querySelector('#updatePost');
const deletePostBtn = document.querySelector('#deletePost');

console.log(postCards);

async function newPostHandler ()
{
    document.location.replace('/create-post');
    window.localStorage.setItem('userId', author_id);
}

async function editPostPageHandler(e)
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
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value;
    const postId = document.querySelector('.postId').getAttribute('id');
    console.log("Here it is!!!! ", postId);
    author_id = parseInt(window.localStorage.getItem('userId'));
    console.log(author_id);

    const response = await fetch(`/api/post/${postId}`,{
        method: 'PUT',
        body: JSON.stringify({
            title,
            content,
            author_id
        }),
        headers: {"Content-Type": "application/json"}
    });

    console.log(response);

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



//function invocations
addPostBtn ? addPostBtn.addEventListener('click', newPostHandler) : console.log('add post option not found');

if(postCards)
{
    postCards.forEach((card) => {
        card.addEventListener('click', editPostPageHandler);
    })
}else
{
    console.log('existing posts not found');
}

createPostBtn? createPostBtn.addEventListener('click', createPostHandler) : console.log('create post form not found');
updatePostBtn ? updatePostBtn.addEventListener('click', editPostHandler) : console.log('edit post form not found');
