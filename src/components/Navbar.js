import React, { Component } from 'react' 
export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <a className="navbar-brand" href="/">GitHub-Users</a>
                        </div>
                        {/* search  */}
                        <form className="navbar-form navbar-right" onSubmit={this.props.onSubmit}>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search User" onChange={this.props.changeQuery} /> 
                                <div className="input-group-btn">
                                    <button type="submit" className="btn btn-default">
                                    <i className="glyphicon glyphicon-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    
                </nav>
            </div>
        )
    }
}

export default Navbar 