import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import "react-quill/dist/quill.snow.css";
import '../css/editor.css';
import  ImageResize from 'quill-image-resize-module-react';

import axios from 'axios';
const __ISMSIE__ = navigator.userAgent.match(/Trident/i) ? true : false;

// Quill.register('modules/clipboard', PlainClipboard, true);

const QuillClipboard = Quill.import('modules/clipboard');

class Clipboard extends QuillClipboard {

    getMetaTagElements = (stringContent) => {
        const el = document.createElement('div');
        el.innerHTML = stringContent;
        return el.getElementsByTagName('meta');
    };

    async onPaste(e) {
        let clipboardData = e.clipboardData || window.clipboardData;
        let pastedData = await clipboardData.getData('Text');

        const urlMatches = pastedData.match(/\b(http|https)?:\/\/\S+/gi) || [];
        if (urlMatches.length > 0) {
            e.preventDefault();
            urlMatches.forEach(link => {
                axios.get(link)
                    .then(payload => {
                        // let title, image, url, description;
                        let title, image, url;
                        for (let node of this.getMetaTagElements(payload)) {
                            if (node.getAttribute("property") === "og:title") {
                                title = node.getAttribute("content");
                            }
                            if (node.getAttribute("property") === "og:image") {
                                image = node.getAttribute("content");
                            }
                            if (node.getAttribute("property") === "og:url") {
                                url = node.getAttribute("content");
                            }
                            // if (node.getAttribute("property") === "og:description") {
                            //     description = node.getAttribute("content");
                            // }
                        }

                        const rendered = `<a href=${url} target="_blank"><div><img src=${image} alt=${title} width="20%"/><span>${title}</span></div></a>`;

                        let range = this.quill.getSelection();
                        let position = range ? range.index : 0;
                        this.quill.pasteHTML(position, rendered, 'silent');
                        this.quill.setSelection(position + rendered.length);
                    })
                    .catch(error => console.error(error));
            });

        } else {
            //console.log('when to use this') 보통 다른 곳에서  paste 한다음에  copy하면 이쪽 걸로 한다. 
            super.onPaste(e);
        }
    }

}
Quill.register('modules/clipboard', Clipboard, true);

const BlockEmbed = Quill.import('blots/block/embed');

//class ImageBlot extends BlockEmbed {
//
//    static create(value) {
//        const imgTag = super.create();
//        imgTag.setAttribute('src', value.src);
//        imgTag.setAttribute('alt', value.alt);
//        //imgTag.setAttribute('width', '100%');
//        return imgTag;
//    }

//    static value(node) {
//        return { src: node.getAttribute('src'), alt: node.getAttribute('alt') };
//    }
//
//}
//
//ImageBlot.blotName = 'image';
//ImageBlot.tagName = 'img';
//Quill.register(ImageBlot);

class VideoBlot extends BlockEmbed {

    static create(value) {
        if (value && value.src) {
            const videoTag = super.create();
            videoTag.setAttribute('src', value.src);
            videoTag.setAttribute('title', value.title);
            videoTag.setAttribute('width', '100%');
            videoTag.setAttribute('controls', '');

            return videoTag;
        } else {
            const iframeTag = document.createElement('iframe');
            iframeTag.setAttribute('src', value);
            iframeTag.setAttribute('frameborder', '0');
            iframeTag.setAttribute('allowfullscreen', true);
            iframeTag.setAttribute('width', '100%');
            return iframeTag;
        }
    }

    static value(node) {
        if (node.getAttribute('title')) {
            return { src: node.getAttribute('src'), alt: node.getAttribute('title') };
        } else {
            return node.getAttribute('src');
        }
        // return { src: node.getAttribute('src'), alt: node.getAttribute('title') };
    }

}

VideoBlot.blotName = 'video';
VideoBlot.tagName = 'video';
Quill.register(VideoBlot);

class FileBlot extends BlockEmbed {

    static create(value) {
        const prefixTag = document.createElement('span');
        prefixTag.innerText = "첨부파일 - ";

        const bTag = document.createElement('b');
        //위에 첨부파일 글자 옆에  파일 이름이 b 태그를 사용해서 나온다.
        bTag.innerText = value;

        const linkTag = document.createElement('a');
        linkTag.setAttribute('href', value);
        linkTag.setAttribute("target", "_blank");
        linkTag.setAttribute("className", "file-link-inner-post");
        linkTag.appendChild(bTag);
        //linkTag 이런식으로 나온다 <a href="btn_editPic@3x.png" target="_blank" classname="file-link-inner-post"><b>btn_editPic@3x.png</b></a>

        const node = super.create();
        node.appendChild(prefixTag);
        node.appendChild(linkTag);

        return node;
    }

    static value(node) {
        const linkTag = node.querySelector('a');
        return linkTag.getAttribute('href');
    }

}

FileBlot.blotName = 'file';
FileBlot.tagName = 'p';
FileBlot.className = 'file-inner-post';
Quill.register(FileBlot);

class PollBlot extends BlockEmbed {

    static create(value) {
        const prefixTag = document.createElement('span');
        prefixTag.innerText = "투표 - ";

        const bTag = document.createElement('b');
        bTag.innerText = value.title;

        const node = super.create();
        node.setAttribute('id', value.id);
        node.appendChild(prefixTag);
        node.appendChild(bTag);

        return node;
    }

    static value(node) {
        const id = node.getAttribute('id');
        const bTag = node.querySelector('b');
        const title = bTag.innerText;
        return { id, title };
    }

}

PollBlot.blotName = 'poll';
PollBlot.tagName = 'p';
PollBlot.className = 'poll-inner-post';
Quill.register(PollBlot);


Quill.register('modules/imageResize', ImageResize);

var Font = Quill.import('formats/font');
Font.whitelist = Font.whitelist = [
    "arial",
    "comic-sans",
    "courier-new",
    "georgia",
    "helvetica",
    "lucida",
    "impact"
  ];
Quill.register(Font, true);

const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);


class QuillEditor extends React.Component {

    bandId;
    placeholder;
    onEditorChange;
    onFilesChange;
    onPollsChange;
    _isMounted;

    constructor(props) {
        super(props);

        this.state = {
            editorHtml: __ISMSIE__ ? "<p>&nbsp;</p>" : this.props.value,
            files: [],
        };

        this.reactQuillRef = null;

        this.inputOpenImageRef = React.createRef();
        this.inputOpenVideoRef = React.createRef();
        this.inputOpenFileRef = React.createRef();
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    handleChange = (html) => {
        console.log('html', html)
        // https://youtu.be/BbR-QCoKngE
        // https://www.youtube.com/embed/ZwKhufmMxko
        // https://tv.naver.com/v/9176888
        // renderToStaticMarkup(ReactHtmlParser(html, options));

        this.setState({
            editorHtml: html
        }, () => {
            this.props.onEditorChange(this.state.editorHtml);
        });
    };


    videoHandler = () => {
        this.inputOpenVideoRef.current.click();
    };

    fileHandler = () => {
        this.inputOpenFileRef.current.click();
    };


    imageHandler = () => {
        const input = document.createElement('input');

        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
            const file = input.files[0];

            let formData = new FormData();
            const config = {
                header: { 'content-type': 'multipart/form-data' }
            }
            formData.append("cloudImage", file);
            formData.append("imageName",(Math.floor((Math.random() * 1000000) + 100000)).toString())

            axios.post('https://productservices.herokuapp.com/posts/addImage', formData, config)
                .then(response => {
                    console.log(response)
                    if (response.data.created) {

                        const quill = this.reactQuillRef.getEditor();

                        let range = quill.getSelection(true);
                        console.log(response.data.created.cloudImage)
                        quill.insertEmbed(range.index, 'image',response.data.created.cloudImage);

                        if (this._isMounted) {
                            this.setState({
                                files: [...this.state.files, file]
                            }, () => { this.props.onFilesChange(this.state.files) });
                        }
                    } else {
                        return alert('failed to upload file')
                    }
                })
        }
    };

    insertVideo = (e) => {
        e.stopPropagation();
        e.preventDefault();

        if (e.currentTarget && e.currentTarget.files && e.currentTarget.files.length > 0) {
            const file = e.currentTarget.files[0];

            let formData = new FormData();
            const config = {
                header: { 'content-type': 'multipart/form-data' }
            }
            formData.append("file", file);

            axios.post('/api/blog/uploadfiles', formData, config)
                .then(response => {
                    if (response.data.success) {

                        const quill = this.reactQuillRef.getEditor();
                        quill.focus();

                        let range = quill.getSelection();
                        let position = range ? range.index : 0;
                        quill.insertEmbed(position, "video", { src: "http://localhost:5000/" + response.data.url, title: response.data.fileName });
                        quill.setSelection(position + 1);

                        if (this._isMounted) {
                            this.setState({
                                files: [...this.state.files, file]
                            }, () => { this.props.onFilesChange(this.state.files) });
                        }
                    } else {
                        return alert('failed to upload file')
                    }
                })
        }
    }

    insertFile = (e) => {
        e.stopPropagation();
        e.preventDefault();

        if (e.currentTarget && e.currentTarget.files && e.currentTarget.files.length > 0) {
            const file = e.currentTarget.files[0];
            console.log(file);

            let formData = new FormData();
            const config = {
                header: { 'content-type': 'multipart/form-data' }
            }
            formData.append("file", file);

            axios.post('/api/blog/uploadfiles', formData, config)
                .then(response => {
                    if (response.data.success) {

                        const quill = this.reactQuillRef.getEditor();
                        quill.focus();

                        let range = quill.getSelection();
                        let position = range ? range.index : 0;
                        quill.insertEmbed(position, "file", response.data.fileName);
                        quill.setSelection(position + 1);

                        if (this._isMounted) {
                            this.setState({
                                files: [...this.state.files, file]
                            }, () => { this.props.onFilesChange(this.state.files) });
                        }
                    };
                })
        }
    };

    render() {
        return (
            <div>
                <div id="toolbar">
                    <span class="ql-formats">
                    <select class="ql-header"></select>
                    <select className="ql-font">
                      <option value="arial" selected>
                        Arial
                      </option>
                      <option value="comic-sans">ComicSans</option>
                      <option value="courier-new">CourierNew</option>
                      <option value="impact">impact</option>
                      <option value="georgia">Georgia</option>
                      <option value="helvetica">Helvetica</option>
                      <option value="lucida">Lucida</option>
                    </select>
                    <select className="ql-size">
                      <option value="extra-small">Size 1</option>
                      <option value="small">Size 2</option>
                      <option value="medium" selected>
                        Size 3
                      </option>
                      <option value="large">Size 4</option>
                    </select>
                    </span>
                    <span class="ql-formats">
                      <button class="ql-bold"></button>
                      <button class="ql-italic"></button>
                      <button class="ql-underline"></button>
                      <button class="ql-strike"></button>
                    </span>
                    <span class="ql-formats">
                      <select class="ql-color"></select>
                      <select class="ql-background"></select>
                      <button class="ql-script" value="super"></button>
                      <button class="ql-script" value="sub"></button>
                    </span>
                    <span class="ql-formats">
                    <button class="ql-list" value="ordered"></button>
                    <button class="ql-list" value="bullet"></button>
                      <select class="ql-align">
                        <option selected></option>
                        <option value="center"></option>
                        <option value="right"></option>
                        <option value="justify"></option>
                      </select>
                      <button class="ql-indent" value="-1"></button>
                      <button class="ql-indent" value="+1"></button>
                      <button class="ql-direction"></button>
                    </span>
                    <span class="ql-formats">
                      <button class="ql-blockquote"></button>
                      <button class="ql-link"></button>
                      <button class="ql-image"></button>
                      <button class="ql-code-block"></button>
                      <button class="ql-video"></button>
                    </span>
                    <span class="ql-formats">
                      <button class="ql-clean"></button>
                    </span>
                   {/* <button className="ql-insertVideo">
                        V
                    </button>
                    <button className="ql-insertFile">
                        F
                    </button>*/}
                </div>
                <ReactQuill
                    ref={(el) => { this.reactQuillRef = el }}
                    theme={'snow'}
                    onChange={this.handleChange}
                    modules={this.modules}
                    formats={this.formats}
                    value={this.state.editorHtml}
                    placeholder={this.props.placeholder}
                />
                <input type="file" accept="image/*" ref={this.inputOpenImageRef} style={{ display: "none" }} onChange={this.image} />
               {/* <input type="file" accept="video/*" ref={this.inputOpenVideoRef} style={{ display: "none" }} onChange={this.insertVideo} />
                <input type="file" accept="*" ref={this.inputOpenFileRef} style={{ display: "none" }} onChange={this.insertFile} />*/}
            </div>
        )
    }

    modules = {
        syntax: true,
        imageResize: {
            parchment: Quill.import('parchment')
            // See optional "config" below
        },
        toolbar: {
            container: "#toolbar",
            //id ="toorbar"
            handlers: {
                image: this.imageHandler,
                insertVideo: this.videoHandler,
                insertFile: this.fileHandler,
                insertPoll: this.pollHandler,
            }
        },
        


    };

    formats = [
        'header',
        'bold', 'italic', 'underline', 'strike',
        'image', 'video', 'file', 'link',"code-block",
         "blockquote", "clean",'color','background',
         'list','align','fonts', 'indent', 'size', 
         'script', 'direction', 'font'
    ];
}

export default QuillEditor;