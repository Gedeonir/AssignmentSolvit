import {Component} from 'react';
import './App.css';
class App extends Component{
  constructor(){
    super();
    this.state = {
      searchWord:'',
      products: [] 
     
    }
  }
  Search=(e)=>{
    this.setState({
      searchWord:e.target.value
    })
  }
  componentDidMount(){
    fetch('https://dummyjson.com/products')
    .then((response)=> response.json())
    .then(namelist=> {
      this.setState({products:namelist.products});
      
     
    });
    
  }

  render(){
    const filtered=this.state.products.filter(
      product=>{return product.title.toLocaleLowerCase().includes(this.state.searchWord.toLocaleLowerCase())});
      return(
        <div className='App'>
    
        <input type='text' onChange={this.Search} placeholder="Type in your search word"/>
        <div className='products'>
          {filtered.map((product)=>{return(
            
            <div className='product' key={product.id}>
              <h3>{product.title}</h3>
            </div>
          )})}
        </div>
        </div>
      )
  }}
export default App;

