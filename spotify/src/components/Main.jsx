import {Component} from 'react'



class Main extends Component {

    componentDidMount= async ()  =>{
    const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/album')
    let album = await response.json().data[0];
    console.log(album)
    
}
 render() {
    return console.log(response)
    }
}
export default Main
