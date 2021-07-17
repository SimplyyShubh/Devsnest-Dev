const Card=(props)=>{
 const {calories, title}=props;
return(


    <div className="card">
        <div className="title">{title}</div>
        You have consumed {calories} calories today.
    </div>

);
}

export default Card;