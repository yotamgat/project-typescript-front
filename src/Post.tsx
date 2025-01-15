function Post(){
    const title = "Post Title11aa1"

    const getTitle = () => {
        return title
    }

    return(
      <div>
        <h2> {getTitle()} </h2>
        <p> Post Description </p>
      </div>
    )
  }

    export default Post