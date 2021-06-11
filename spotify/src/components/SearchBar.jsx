import { Component } from "react";
import { Form } from "react-bootstrap";
class SearchBar extends Component {
  state = {
    searchQuery: "queen",
    song: [],
  };

  componentDidUpdate = async () => {
    console.log("Fetching data...");
    let response = await fetch(
      'https://striveschool-api.herokuapp.com/api/deezer/search?q=${this.state.searchQuery}'
    );
    let song = await response.json();
    console.log(
      'search fetch result ${this.state.searchQuery} are:'
    );
   
    console.log(song.Search);
  };

  render() {
    return (
      <div className="mt-5">
        <Form.Group controlId="formGroupEmail">
        
          <Form.Control
            type="text"
            placeholder="Search movie"
            value={this.state.searchQuery}
            onChange={(e) =>
              this.setState({
                searchQuery: e.target.value,
              })
            }
          />
        </Form.Group>

       
      </div>
    );
  }
}

export default SearchBar;
