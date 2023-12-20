const Homechild2 = ({blog}) => {
    return ( <>
        <ul className="list-group">
  <li className="list-group-item list-group-item-action active" aria-current="true">The current link item</li>
            {
          blog? blog.map((b)=> (<li key={b.id} className="list-group-item list-group-item-action">
                <h3>{b.title}</h3>
                <p>the author name is - {b.author} </p>
                </li>
                )) :"No blog list found"
            }
        </ul>
    </>);
}
 
export default Homechild2;