import React, { Component } from "react";
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'
import List from '@editorjs/list'
import Link from '@editorjs/link'
import Embed from '@editorjs/embed'
import Marker from '@editorjs/marker'
import Image from '@editorjs/image'
import Delimiter from '@editorjs/delimiter'
import Personality from '@editorjs/personality'
import Warning from '@editorjs/warning'
import Table from '@editorjs/table'



const editor = new EditorJS({
  holderId: 'editorjs', 

  tools: {
        header: Header,
        list :List,
        link : Link,
        embed : Embed,
        marker: Marker,
        delimter: Delimiter,
        image: Image,
        personality : Personality,
        warning :Warning,
        table : Table
  }
});

class Write extends Component {
  constructor(props) {
    super(props);
    
}
  render() {
   

    return (
      
      <div className="container" >
        <div className="row">
          <div className="container rowpadding">

            <div class="card-body">
            <h1>New Post</h1>
            <hr></hr>
              <div  id="editorjs"/></div>
            </div>
          </div>  
      </div>  )
  }
}

export default Write;