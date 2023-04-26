import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h4>All Category: {categories.length}</h4>
            {
                categories.map(category=><p key={category.id}>
                    <Link to={`/category/${category.id}`} style={{color: 'black', textDecoration: 'none'}}>{category.name}</Link></p>)
            }
        </div>
    );
};

export default LeftNav;