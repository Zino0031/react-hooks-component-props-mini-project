import React from "react";
import Article from "./Article";


function ArticleList({posts}){
    const artcl = posts.map((arti)=>(
         <Article title={arti.title} date={arti.date} preview={arti.preview} key={arti.id} minutes={arti.minutes} />
    ))
    return (
        <main>
            {artcl}
        </main>
    )
}

export default ArticleList