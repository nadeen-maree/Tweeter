const INITIAL_POST_ID = posts.length
const INITIAL_COMMENT_ID = 7
const NOT_EXIST = -1
const POST_IDENTEFIER = "p"
const COMMENT_IDENTEFIER = "c"
const NUM_INDEXS_TO_SPLICE = 1

const Tweeter = function() {

    const _posts = posts

    let postIdCounter = INITIAL_POST_ID
    let commentIdCounter = INITIAL_COMMENT_ID

    const getPosts = () => _posts 

    const addPost = function(text){
        const newPost = {
            text: text,
            id: POST_IDENTEFIER+postIdCounter,
            comments: []
        }
        _posts.push(newPost)
        postIdCounter++

    }

    const removePost = function(postID){
        const indexToRemove = _posts.findIndex(post => post.id === postID)

        if (indexToRemove !== NOT_EXIST) {
            _posts.splice(indexToRemove, NUM_INDEXS_TO_SPLICE)
        }
    }

    const addComment = function(text, postID){
        const postIndex = _posts.findIndex(post => post.id === postID)

        if (postIndex !== NOT_EXIST)  {
            const newComment = {
                id: COMMENT_IDENTEFIER+commentIdCounter,
                text: text
            }

            _posts[postIndex].comments.push(newComment)
            commentIdCounter++
        }
    }

    const removeComment = function(postID, commentID){
        const postIndex = _posts.findIndex(post => post.id === postID)

        if (postIndex !== NOT_EXIST) {
            _posts[postIndex].comments = _posts[postIndex].comments.filter(comment => comment.id !== commentID)
        }
    }

    return{
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    }
}