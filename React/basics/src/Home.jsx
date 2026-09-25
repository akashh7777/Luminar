import React from "react";
import Child from "./child";
const Home =()=>{
    let userName ="Nithin"
    // state
    userName ="Nithin Abc"

    return(
        <div>
            <h2>home</h2>
            <Child userName={userName} />
            {/* props */}
        </div>
    )
}
export default Home