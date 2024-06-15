// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import 'github-markdown-css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // input: '',
      output: ''
    }
    this.handleChange = this.handleChange.bind(this);
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
      <div className='container flex flex-col items-center h-full w-full p-5 gap-5' >
        <h1 className='text-xl font-bold'>Markdown Previewer</h1>
        <textarea id='editor' onChange={this.handleChange} 
          className='outline-dotted p-2 w-5/6 h-1/5 md:w-4/5 text-lime-600'></textarea>

        <div id='preview' className='markdown-body h-4/5 w-5/6 md:w-4/5 p-2 outline-dotted'
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked(this.state.output))  }}/>
      </div>
    )
  }
}


export default App;
