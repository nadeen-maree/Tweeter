const Renderer = function(){

    const renderPosts = function(posts){

        $("#posts").empty()

        for (let post of posts) {
            const postElement = $(`
                <div class="post" data-id="${post.id}">
                <div class="post-text">${post.text}</div>
                <div class="comments"></div>
                </div>
            `)

            for(let comment of post.comments){
                const commentElement = $(`
                    <div class="comment" data-id="${comment.id}">
                        <span class="delete-comment">❌</span> ${comment.text}
                    </div>
                `)
                postElement.find('.comments').append(commentElement)
            }
            
            const commentInput = $("<input type=text placeholder=Got somethimg to say? id=comment-input>")
            const commentBtn = $("<button class=commentBtn>Comment</button>")
            const deletePostBtn = $("<button class=delete>Delete Post</button>")
           
            $("#posts").append(postElement)
            postElement.append(commentInput)
            postElement.append(commentBtn)
            postElement.append(deletePostBtn)
        }
    }

    return {
        renderPosts
    } 
}


