import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component
{
    state={images:[]}

    //unplash api bata ajax client/or react clent le request magxa ani teslaii euta response varibale ma rakheko 
onSearchSubmit= async term =>
{
    // way of using axios
   const response=await axios.get('https://api.unsplash.com/search/photos/?client_id=1haC8gJULiJw6ZN5EZ5pfQdTM5vfG4IE5XEZcQGMN20',{
        params: { query: term} }
        
        //header: { Authorization: 'Client-ID 1haC8gJULiJw6ZN5EZ5pfQdTM5vfG4IE5XEZcQGMN20'

    );
    //console.log(response.data.results);
    console.log(response.data.results);

    //this.image.map;
    this.setState({images:response.data.results});
  // console.log(response.data.results);
}

render()
{
    console.log(this.state.images);
return (
<div className="container">
    < SearchBar Submit={this.onSearchSubmit} />
   
<ImageList images={this.state.images}/>
</div>
);
}
};

export default App;
