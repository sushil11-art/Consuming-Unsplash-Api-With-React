import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component 
{
state={term: ''}

    onInputChange=(event)=>
    {
this.setState( {term: event.target.value})
;
    }
    onChangeSubmit=(event)=>
    {
      // console.log(term);
        event.preventDefault();
        this.props.Submit(this.state.term);
    }

/*  onInputClick()
  {
      console.log('i was clicked')
  }
  */
   render()
   {
       return  (
       <div className="ui segment">
           <form className="ui form" onSubmit={this.onChangeSubmit}>
<div className="field">
    <label>Image search</label>
               <input type='text' value={this.state.term} onChange={this.onInputChange} onClick={this.onInputClick}/>
               </div>
               </form>
               </div>
       );
   }
}
export default SearchBar;
