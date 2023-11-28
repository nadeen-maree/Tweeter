const INITIAL_POST_ID = 3
const INITIAL_COMMENT_ID = 7
const NOT_EXIST = -1
const FIRST_LETTER_IN_POST_ID = "p"
const FIRST_LETTER_IN_COMMENT_ID = "c"
const NUM_INDEXS_TO_SPLICE = 1

const Tweeter = function() {

    const _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    let postIdCounter = INITIAL_POST_ID
    let commentIdCounter = INITIAL_COMMENT_ID

    const getPosts = () => _posts 

    const addPost = function(text){
        const newPost = {
            text: text,
            id: FIRST_LETTER_IN_POST_ID+postIdCounter,
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

        if (postIndex !== NOT_EXIST) {
            const newComment = {
                id: FIRST_LETTER_IN_COMMENT_ID+commentIdCounter,
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
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }
}