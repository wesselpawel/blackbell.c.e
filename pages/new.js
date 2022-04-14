import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import FileBase from 'react-file-base64'

const NewPost = () => {
    const [formData, setFormData] = useState({ title: '', description: '', image:'' });
    
    async function createPost(formData){
        console.log(formData);
        const response = await fetch("/api/posts/create", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({ data: formData }),
        });
        const data = await response;
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        createPost(formData);
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="form-container">
            <h1>Add new image</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Name of the Image</label>
                        <input id="title" name="title" type="text" onChange={handleChange}/>
                    <label htmlFor="description">Description</label>
                        <input id="description" name="description" type="text" onChange={handleChange}/>
                    <FileBase
                        type="file"
                        multiple={false}
                        name="img"
                        onDone={({base64}) => setFormData({ ...formData, image: base64 })}
                    />
                    <button type='submit'>Create</button>
                </form>
            </div>
        </div>
    )
}

export default NewPost;