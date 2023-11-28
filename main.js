const tweeter = Tweeter()
const renderer = Renderer()

const post = function(){
    const postText = $("#input").val()
    tweeter.addPost(postText)
    renderer.renderPosts(tweeter.getPosts())
    $('#input').val('')
}

$("#posts").on("click", ".delete", function(){
   const postId = $(this).closest(".post").data().id
   tweeter.removePost(postId)
   renderer.renderPosts(tweeter.getPosts())
})

$("#posts").on("click", ".commentBtn", function(){
    const postId = $(this).closest(".post").data().id
    const text = $(this).siblings("#comment-input").val()
    tweeter.addComment(text, postId)
    renderer.renderPosts(tweeter.getPosts())
    $(this).siblings("#comment-input").val('')
})

$("#posts").on("click", ".delete-comment", function(){
    const postId = $(this).closest(".post").data().id
    const commentId = $(this).closest(".comment").data().id
    tweeter.removeComment(postId, commentId)
    renderer.renderPosts(tweeter.getPosts())
})

renderer.renderPosts(tweeter.getPosts())

