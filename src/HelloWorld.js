import React, { useState, useEffect } from 'react';

function HelloWorld() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/api/hello')
            .then(response => response.text())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="HelloWorld">
            {data !== null ? (
                <h1>{data}</h1>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
}

export default HelloWorld;