export default function PostDetails ({post}){
    return(
        <div>
            <h1> {post.id}</h1>
            <h1> {post.title}</h1>
            <h1> {post.body}</h1>


        </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      const posts = await res.json();
      const paths = posts.map(post =>{
            return{
                params:{
                    id:post.id.toString()
                }
            }
      })
    return {
      paths,
      fallback: false // false or 'blocking'
    };
  }

export async function getStaticProps(context) {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
    );
    const post = await res.json();
    return {
      props: {
        post,
      },
    };
  }
  