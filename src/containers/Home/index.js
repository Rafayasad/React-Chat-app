import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { facebook_login } from '../../store/action';

class Home extends React.Component {
    render() {
        console.log("props==>",this.props);
        return (
            <div>
                <h1>HOME</h1>
                <button onClick={()=>this.props.facebook_login(this.props.history)}>FB auth</button>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    users:state.users
})

const mapDispatchToProps = (dispatch) =>({
    facebook_login:(history)=>dispatch(facebook_login(history)),
    // set_data:()=>dispatch(set_data())
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);