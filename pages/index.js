import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home({ posts }) {
  if(posts){
    return (
      <div>
        <h1>List of posts</h1>
        <div>
  
          {posts.map((post,index) => {
            console.log(post)
            return (
              <Link href={`/${post.id}`} key={index} passHref>
                <h2>
                  {post.id} {post.title}
                </h2>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
 
}

export async function getStaticProps(context) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
