import React from 'react';



class AdminSignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            open: false,
            admin: {
                email: 'abc@123',
                password: '123'
            },
            openSignUp: false
        };
        this.getValueSignIn = this.getValueSignIn.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    getValueSignIn() {
        var adminData = this.state.admin;
        this.props.signInFunc(adminData);
    }

    handleChange(att, e) {
        var newAdmin = this.state.admin;
        newAdmin[att] = e.target.value;
        this.setState({
          admin: newAdmin
        });
    }


    render(){
        return (
            <div>
               Email:
               <input type = "text" name = "email" value ={this.state.admin.email}
               onChange={(e) => this.handleChange('email', e)}
               />
               <br/>
               Password:
               <input type = "text" name= "password" value ={this.state.admin.password}
               onChange={(e) => this.handleChange('password', e)}
               />
               <br/>
               <button onClick={this.getValueSignIn}>Sign In</button>

              <p className="error">{this.props.adminData.message}</p>
            </div>
        );
    }
}


export default AdminSignIn;
