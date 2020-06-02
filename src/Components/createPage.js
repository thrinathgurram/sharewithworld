import React, { useEffect, useState } from 'react'
import QuillEditor from './QuillEditor';
import { Typography, Button, Form, message } from 'antd';
import axios from 'axios';
import { useSelector } from "react-redux";

const { Title } = Typography;

function CreatePage(props) {
    //const user = useSelector(state => state.user);

    const [content, setContent,] = useState("")
    const [files, setFiles] = useState([])
   
    const [mainCategory, setMainCategory,] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [value, setValue] = useState("");
    const [tags, setTags,] = useState([])
    // Form methods added
    const onTitleChange =(event) =>{
        setTitle(event.target.value)
        console.log('Title'+event.target.value);
    }

    const onSelectMainChange =(event) =>{
        setMainCategory(event.target.value)
        console.log('Selected'+event.target.value);
    }

    const onSelectSubChange =(event) =>{
        setSubCategory(event.target.value);
    }
//Editor methods
    const onEditorChange = (value) => {
        setContent(value)
        console.log(content)
    }

    const onFilesChange = (files) => {
        setFiles(files)
    }

    const onPriceChange =(event) =>{
        setPrice(event.target.value);
    }

    const onSubmits = (event) => {
        console.log("Control is on submit");
        event.preventDefault();

        setContent("");

      

        const variables = {
            content: content,
            category: mainCategory,
            subCategory: subCategory,
            title : title,
            price : price,
            author : "Sumateja K",
            authorid : "12345"
            //userID: user.userData._id
        }

        axios.post('https://productservices.herokuapp.com/posts', variables)
            .then(response => {
                if (response) {
                    message.success('Post Created!');

                    setTimeout(() => {
                        props.history.push('/blog')
                    }, 2000);
                }
            })
    }


    return (
        <div className="container" >
        <div className="row">
           <div className="col-md-8"><h3>New Post</h3>
            <QuillEditor
                placeholder={"Start Posting Something"}
                onEditorChange={onEditorChange}
                onFilesChange={onFilesChange}
                value={value}
            />
            </div> 

            <div className="col-md-4">
            <Form onSubmit={onSubmits}>

            <div className="form-group">
            <label for="title">Enter Post Title</label>
            <input className="form-control"  type="text" value={title} placeholder="New Post Title" id="title" onChange={onTitleChange}></input>

            <label for="mainCat">Select Category</label>
            <select className="form-control" id="mainCat" value={mainCategory} onChange={onSelectMainChange}>
            <option value="None">Select One</option>
            <option value="Gadgets">Gadgets</option>
            <option value="Home Decor" >Home Decor</option>
            <option value="Electronics">Electronics</option>
            <option value="Unique Stuff">Unique Stuff</option>
            <option value="Toys & Stuff" >Toys & Stuff</option>
            <option value="Lifestyle">Lifestyle</option>
            </select>

             <label for="subCat">Select Sub  Category</label>
             <select className="form-control" value={subCategory} id="subCat" onChange={onSelectSubChange}>
             <option value="None">Select One</option>
             <option>Mobiles</option>
             <option>Wallpapers</option>
             <option>Kitchen Ware</option>
             <option>Cookware</option>
             <option>Gifting</option>

             </select>
             <label for="price">Enter Price</label>
            <input className="form-control"  type="text" placeholder="Price" id="price" onChange={onPriceChange}></input>
             <label>Tags</label>
             <input type="text" placeholder="Enter Tags Comma seperated" className="form-control"></input>
             </div>
            <Button  className="btn btn-success" onClick={onSubmits}  >Create Post</Button>
            </Form>
             </div>
        </div>
            
        </div>
    )
}

export default CreatePage