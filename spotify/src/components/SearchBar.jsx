import { Component } from "react";
import { Form } from "react-bootstrap";
class SearchBar extends Component {
  state = {
    searchQuery: "",
    song: [],
  };

  componentDidUpdate = async () => {
    console.log("Fetching data...");
    let response = await fetch(
      'https://striveschool-api.herokuapp.com/api/deezer/search?q=${this.props.search}'
    );
    let song = await response.json();
    console.log(
      'search fetch result ${this.state.searchQuery} are:'
    );

    console.log('there are songs', song.Search);
  };

  render() {
    return (
      <div className="mt-5">
        <Form inline>

          <Form.Control
            type="text"
            placeholder="Search"
            value={this.props.search}
            onChange={(e) =>
              this.props.changeSearchState(e.target.value)
            }
          />
        </Form>


      </div>
    );
  }
}

export default SearchBar;
