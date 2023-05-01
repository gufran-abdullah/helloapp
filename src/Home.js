import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [name, setName] = useState('Gufran');
    const [age, setAge] = useState(23);

    const [blogs, setBlogs] = useState([
        {title: 'First Blog', body: "this is first blog...", author:"gufran", id:1},
        {title: 'Second Blog', body: "this is second blog...", author:"kashif", id:2},
        {title: 'Third Blog', body: "this is third blog...", author:"gufran", id:3}
    ]);

    // Rerender after every referesh(action) data(component) render
    useEffect(() => {
        console.log('use effect hook.');
        console.log(blogs);
    });

    const handleDelete = (id) => {
        const newBlog = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlog);
    }

    let title = "Welcome to the new Blog!";
    
    const handleClick = () => {
        alert('clicked');
    }

    const handleClickAgain = (name) => {
        alert('hello ' + name)
    }

    const handleStates = () => {
        setName('Kashif');
        setAge(27);
    }

    return ( 
        <div className="home">
            <h1>{title}</h1>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Record Clicks!</button>
            <button onClick={() => handleClickAgain('gufran')}>Record Name!</button>
            <button onClick={handleStates}>Change State</button>
            <hr /><br />
            <BlogList blogs={ blogs } title="All Blogs" handleDelete={handleDelete}/>
            <BlogList blogs={ blogs.filter((blog) => blog.author === "gufran") } title="Gufran's Blogs" handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;