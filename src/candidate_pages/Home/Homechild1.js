const Homechild1 = ({blog, handleDelete}) => {
    
    return ( <>
        <ul>
        <li className="list-group-item list-group-item-action active" aria-current="true">All Blog list</li>
            {
          blog? blog.map((b)=> (<li key={b.id}>
                <h3>{b.title}</h3>
                <p>the author name is - {b.author} </p>
                <button onClick={()=>handleDelete(b.id)} >Delete Blog</button>
                </li>
                )) :"No blog list found"

            
            }
        </ul>
    </>);
}
 
export default Homechild1;