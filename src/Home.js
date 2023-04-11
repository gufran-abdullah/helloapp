const Home = () => {
    let title = "Welcome to the new Blog!";
    
    const handleClick = () => {
        alert('clicked');
    }

    return ( 
        <div className="home">
            <h1>{title}</h1>
            <button onClick={handleClick}>Record Clicks!</button>
        </div>
     );
}
 
export default Home;