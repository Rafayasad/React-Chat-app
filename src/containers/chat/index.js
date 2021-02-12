import React from 'react';
import {connect} from 'react-redux';

class Chat extends React.Component{
    render(){
        console.log(this.props);
        let user = this.props.current_user;
        return(
            <div>
                <h1>WELCOME!{user.name}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    current_user: state.current_user,
})

export default connect(mapStateToProps,null)(Chat);
