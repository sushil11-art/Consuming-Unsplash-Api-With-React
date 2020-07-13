import React from 'react';
class ImageCard extends React.Component {


constructor(props)
{
    super(props);
    this.state={spans:0};
    this.imageRef=React.createRef();
}    
componentDidMount()
{
    //console.log(this.imageRef);
    this.imageRef.current.addEventListener('load',this.setSpans)

}
setSpans=()=>
{
    //  console.log(this.imageRef.current.clientHeight);
const height=this.imageRef.current.clientHeight;
const spans=Math.ceil(height/10);
this.setState({spans});

}
    render()
    {
        /*props call garda this use vaxa kina vanda image list aafaima child
         component ho tesbata feripani as a props kunai value 
         aarko component ma pathauda speciofy garna parxa */

        return(
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}> 
                <img ref={this.imageRef} alt={this.props.image.description}
                src={this.props.image.urls.regular}
                />
            </div>
        );
    }
}
export default ImageCard;