const Card =()=>{
    const Image=()=>{
        return (  
            <img src="https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Jokes-Bugs-Errors-Lines-of-Code.jpg"/>
        );
    };//card parent component h and image child component
    return (
        <div className="card">
        <Image/>        
        <h2>Meme Card</h2>
        <p>This is a Meme Card<br/>
            For THA -16(a)</p>
        </div>
    );
};

export default Card ;