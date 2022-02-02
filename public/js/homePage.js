const postCards = document.querySelectorAll('.postCards');
const submitBtn = document.querySelector('#createComment');

async function commentHandler()
{
    //gets comment content
    const content = document.querySelector('#content').value;
    const author_id = parseInt(window.localStorage.getItem('userId'));
    const post_id = parseInt(document.querySelector('.postCard').getAttribute('id'));

    //submits fetch call to create comment
    const response = await fetch('/api/comment/', {
        method: 'POST',
        body: JSON.stringify({
            content, 
            author_id,
            post_id
        }),
        headers: {"Content-Type": "application/json"}
    });

    //if response is ok 
    if(response.ok)
    {
        //parses response for comment details
        const {body} = await response.json();

        //format the date
        let msec = Date.parse(body.created);
        let commentDate = new Date(msec).toString();

        //rebuilds comment form to display newly created comment
        const commentCard = document.querySelectorAll('.card')[1];
        commentCard.innerHTML = `<div class="card-header bg-dark text-white">
        <h4 class="fw-bold mb-2 text-uppercase">Comment</h4>
        </div>
        <div class="card-body">
        <div class="mb-md-5 mt-md-4 pb-1" style="margin-bottom: 5%;">
    
            <h5 class="fw-bold mb-2 text-uppercase">${body.content}</h5>
            <h6 class="fw-bold mb-2 text-uppercase">--${window.localStorage.getItem('username')}, ${commentDate.substring(0, commentDate.indexOf("2022") + 4)} </h6>
    
        </div>
    </div>`;


    }else
    {
        //redirect to an error page
        document.location.replace('/404');
    } 

}

async function expandHandler(e)
{
    console.log(e.currentTarget.getAttribute('id'));
    document.location.replace(`/comment/${e.currentTarget.getAttribute('id')}`);

}

if(postCards)
{
    postCards.forEach((card) => {
        card.addEventListener('click', expandHandler);
    })
}else
{
    console.log('existing posts not found');
}

submitBtn ? submitBtn.addEventListener('click', commentHandler): console.log('the comment form was not found');
