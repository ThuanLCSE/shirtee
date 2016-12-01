import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import Checkbox from 'material-ui/Checkbox';

class BecomeDesigner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            designer: {
                displayName: '',
                name: '',
                number: ''
            },
            agree: false
        };
        this.getValue = this.getValue.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.agreeLicense = this.agreeLicense.bind(this);
    }
    
    agreeLicense() {
        this.setState({agree: !this.state.agree});
    }
    
    getValue() {
        var designerData = this.state.designer;
        this.props.becomeNewDesigner(designerData);
//        this.props.closeDialog;
    }
    
    handleChange(att, e) {
        var newDesigner = this.state.designer;
        newDesigner[att] = e.target.value;
        this.setState({designer: newDesigner});
    }
    
    render() {
        const actions = [
            <RaisedButton label="Confirm" primary={true} onClick={this.getValue}/>,
            <FlatButton label="Cancel" primary={true} onClick={this.props.closeDialog}/>
        ];
        return (
            <Dialog
              title={(<p><b>Become Designer</b></p>)}
              modal={false}
              actions={actions}
              open={this.props.openDialog}
              onRequestClose={this.props.closeDialog}>
                    <TextField  floatingLabelText="Your display name"
                                hintText="Your display name"
                                fullWidth={true}
                                onChange={(e) => this.handleChange('displayName', e)}/><br/>
                    <TextField  floatingLabelText="Your bank account name"
                                hintText="Your bank account name"
                                fullWidth={true}
                                onChange={(e) => this.handleChange('name', e)}/>
                    <TextField  floatingLabelText="Your bank account number"
                                hintText="Your bank account number"
                                fullWidth={true}
                                onChange={(e) => this.handleChange('number', e)}/>
                    <div><p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore commodi, reiciendis et non doloremque perferendis quidem repellendus vel neque molestiae quod aliquid aliquam vero odit iure culpa. Magnam, qui, sed.</span>
                        <span>Numquam delectus, velit repellat eligendi asperiores sed in consequatur exercitationem laborum cum quam blanditiis, minus ipsam praesentium obcaecati nulla maiores animi optio nostrum minima aperiam enim quis ratione vel. Consequatur.</span>
                        <span>Officiis eius debitis dolore? Omnis nobis, iure earum cupiditate repudiandae veritatis repellat sunt obcaecati exercitationem! Voluptate, laborum, incidunt. Mollitia eaque expedita consectetur in tenetur, obcaecati esse officia, ut quisquam modi.</span>
                        <span>Repudiandae quo eaque error repellat cumque maiores consequatur, fugiat ad optio accusantium dignissimos sapiente magnam facilis consequuntur! Vitae in totam molestias, minus nisi, aperiam id rem architecto. Provident, quisquam, nesciunt.</span>
                        <span>Omnis libero nihil soluta enim laboriosam, repellendus itaque harum, quibusdam eum sequi, recusandae autem eos aliquam sunt fuga iste cum minus quaerat natus et ab iure perspiciatis ipsam! Adipisci, nesciunt.</span>
                    </p></div>
                    <Checkbox label="I Agree" onCheck={this.agreeLicense}/>
            </Dialog>
        );
    }
}

export default BecomeDesigner;