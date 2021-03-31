import React, { useEffect, useState } from 'react'
import '../style/list.css' 

function List(props) { 
    const [users, setUsers] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(10)

    // fetching data from api
    useEffect(() =>{
      fetch('https://api.github.com/search/users?q=location%3Abangalore')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
    },[])

    const setData = (data) =>{
         setUsers(data.items) 
    }

    // page numbers
    const pageNumbers=[]
    for (let i = 1; i <= Math.ceil(30 / postsPerPage); i++) {
        pageNumbers.push(i);
      }

    // Get current posts
    const LastPost = currentPage * postsPerPage;
    const FirstPost = LastPost - postsPerPage;
    const currentPosts = users.slice(FirstPost, LastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // if search
    if(props.istrue){
        return (
            <div className="container">
                <h1>Results : </h1> 
                <div className="main container-fluid" key={props.id}>
                    <div className="profile col-lg-5 col-md-5 col-sm-12 col-xs-12" >
                        <img className="img-responsive center-block d-block mx-auto" src={props.avatar} alt="avatar"/>
                    </div>

                    <div className="col-lg-7 col-md-5 col-sm-12 col-xs-12" >
                        <h2>{props.name}</h2>
                        <h3><a href={props.url} target="blank">Visit Profile</a></h3> 
                    </div>
                </div>
            </div>
        )
    }
    // else normal results
    else{ 
    return ( 
        <div className="container">
           <h1>GitHub users from Bangalore</h1>
           <div className="pageicon container">
           {
                pageNumbers.map(num => (
                    <nav aria-label="Page navigation example" className="pagenav">
                    <ul className="pagination">
                      <li key={num} className="page-item"><a onClick={() => paginate(num)} className="page-link" href="!#">{num}</a></li> 
                    </ul>
                    </nav>
                ))
            } 
           </div>
           { 
               currentPosts.map(user => {
                   return ( 
                       <div className="main container-fluid" key={user.id}>
                           <div className="profile col-lg-5 col-md-5 col-sm-12 col-xs-12" >
                               <img className="img-responsive center-block d-block mx-auto" src={user.avatar_url} alt="avatar"/>
                           </div>

                           <div className="col-lg-7 col-md-5 col-sm-12 col-xs-12" >
                               <h2>{user.login}</h2>
                               <h3><a href={user.html_url} target="blank">Visit Profile</a></h3> 
                           </div>
                       </div>
                   )
               })
           }
           <div className="pageicon container">
           {
                pageNumbers.map(num => (
                    <nav aria-label="Page navigation example" className="pagenav">
                    <ul className="pagination">
                      <li key={num} className="page-item"><a onClick={() => paginate(num)} className="page-link" href="!#">{num}</a></li> 
                    </ul>
                    </nav>
                ))
            } 
           </div>
        </div>
    )}
}

export default List
