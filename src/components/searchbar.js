import React from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import ImageResults from '../components/imageresult';
import '../styles/myStyles.css';
import axios from 'axios';
class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api',
        apiKey : '18059459-9ab65a7ccaebe4af588728230',
        images: []
    }
  }
  // event handler to set Search value in Text field
  onTextChange = e=> {
        let val = e.target.value;
        this.setState({[e.target.name]: val},()=>{
            if (val === ''){
                this.setState({images:[]})
            }
            else {
                axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}
                &image_type=photo&per_page=${this.state.amount}&safesearch=true`)
                .then(res=> this.setState({images:res.data.hits}))
                .catch(err=>console.log(err))
        }
        });    
    }

// event handler to set Selected Value  in Menu field  
onAmountChange = (e) => this.setState({[e.target.name]: e.target.value},()=>{
    axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}
    &image_type=photo&per_page=${this.state.amount}&safesearch=true`)
    .then(res=> this.setState({images:res.data.hits}))
    .catch(err=>console.log(err))
});
  
  
render() {
      console.log(this.state.images);
    return (
        <div>
            <TextField
            name = "searchText"
            id="outlined-name"
            label="Search Images"
            className = "search"
            margin="normal"
            variant="outlined"
            onChange= {this.onTextChange}
            value = {this.state.searchText}
            /> 
            <br/>
            <Select
                className="select"
                name = "amount"
                onChange = {this.onAmountChange}
                value = {this.state.amount}>   
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
            </Select> 
            <br/>  
            <br/>
            {this.state.images.length > 0 ?  (
                <ImageResults images={this.state.images} />
            ) : null} 
        </div>
    )
  }
}

export default SearchBar;
