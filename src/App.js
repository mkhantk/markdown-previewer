// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import 'github-markdown-css';
import './markdown-style.css'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    
      output: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.setState({
      output: marked(document.getElementById('editor').value)
    })
  }
  handleChange (e) {
    // console.log(e.target.value)
    // console.log(typeof(e.target.value))
    // this.state.output = e.target.value;
    console.log(this.state.output)
    
    this.setState({
      output: e.target.value
    })
  }
  render(){
    return(
      <div className='container flex flex-col items-center h-screen w-screen p-5 gap-5 bg-green-200 overflow-auto' >
        <h1 className='text-xl font-bold'>Markdown Previewer</h1>
        <textarea id='editor' onChange={this.handleChange} 
          className='outline-dotted p-2 w-5/6 h-1/5 md:w-4/5 bg-gray-900 text-lime-600'
          defaultValue={'# Welcome \n ## This is markdown previewer. \n Here is the example of what a markdown previewer is. \n with markdown, we can share `<hello world>` \n ``` \n <div> \n <h1>heading</h1> \n </div> \n ``` \n like these. You can learn more about this in [marked.org.](https://marked.js.org/) \n we can make a list too. \n 1. ordered list \n 2. **unordered list** \n with style ofcourse. \n > and blockquote too \n I learn this all from \n ![freecodecamp](https://search.bus-hit.me/image_proxy?url=https%3A%2F%2Fi.pcmag.com%2Fimagery%2Freviews%2F01tPXClg2WjLamQzScplH3y-15.fit_scale.size_760x427.v1627670281.png&h=45b4aac7c2d3e09cff048a4e251df5eced3325620127bd1d8e4921b75d256d5c).  '} />

        <div id='preview' className='markdown-body markdown-background markdown-color h-4/5 overflow-auto w-5/6 md:w-4/5 p-2 outline-dotted'
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked(this.state.output)) }} />
      </div>
    )
  }
}

export default App;
