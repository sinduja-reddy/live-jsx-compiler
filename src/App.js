import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state={
      content: '/*Add jsx code*/',
      output:'',
      err:''
    }
  }
  update(e){
    try {
      this.setState({
        output: window.Babel
                .transform(e.target.value, {presets: ['es2015','react']})
                .code,
        err: ''
      })
    }
    catch(err){
      this.setState({err: err.message})
    }
  }
  render() {
    return (
      <div className="container-fluid" >
        <h1 className="text-center">JSX live compiler</h1>
        <div className='row'>
          <div className="col-xs-12 col-md-6">
            <h3>Input</h3>
            <textarea id="input" className='col-xs-12 col-md-6' 
                                defaultValue={this.state.content}
                                onChange={this.update.bind(this)}>
            </textarea>
          </div>
          <div className='col-xs-12 col-md-6'>
            <h3>output</h3>
            <div id="output">{this.state.output}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
