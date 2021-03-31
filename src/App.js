import React, { Component } from 'react' 
import List from './components/List'
import Navbar from './components/Navbar'
 
class App extends Component {
   
      constructor(props) {
        super(props)

        this.state = {
            query:"",
            istrue:false,
            name:"",
            url:"",
            avatar:"",
            id:""
        }
    }

    changeQuery = (e) =>{
        this.setState({
            query : e.target.value
        })
    }

    onSubmit = (e) =>{ 
        e.preventDefault()
        if(this.state.query === "") {
            alert("Enter valid user name..!!")
        }
        else{ 
          fetch(`https://api.github.com/search/users?q=`+this.state.query)
          .then(response => response.json())
          .then(data => { 
            if(data.items.length === 0) alert("User doesn't exist..!!")
            else{
            this.setState({
              istrue:true,
              name:data.items[0].login,
              url:data.items[0].html_url,
              avatar:data.items[0].avatar_url,
              id:data.items[0].id
            }) }
          })
          .catch(err => console.log(err))
      }
  }

   render() {
     return (
       <div>
         <Navbar 
            onSubmit={this.onSubmit} 
            changeQuery={this.changeQuery} />
         <List 
            istrue={this.state.istrue} 
            name={this.state.name} 
            url={this.state.url} 
            avatar={this.state.avatar} 
            id={this.state.id} />
        
       </div>
     )
   }
  }
export default App