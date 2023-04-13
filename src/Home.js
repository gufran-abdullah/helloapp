const Home = () => {
    let title = "Welcome to the new Blog!";
    
    const handleClick = () => {
        alert('clicked');
    }

    const handleClickAgain = (name) => {
        alert('hello ' + name)
    }

    return ( 
        <div className="home">
            <h1>{title}</h1>
            <button onClick={handleClick}>Record Clicks!</button>
            <button onClick={() => handleClickAgain('gufran')}>Record Name!</button>
        </div>
     );
}
 
export default Home;