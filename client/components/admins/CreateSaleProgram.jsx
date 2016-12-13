import React from 'react';
import ReactDOM from 'react-dom';
import PatternItem from './PatternItem.jsx';

class CreateSaleProgram extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
            open: false,
            sale: {
                detail: '',
                percentage: 1,
                startDay: new Date(),
                endDay: new Date(),
                pattern: [],
            }
        };
        this.getValueCreate = this.getValueCreate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDay = this.handleChangeDay.bind(this);
        this.handleChoosePattern = this.handleChoosePattern.bind(this);
    }

    getValueCreate() {
        var sale = this.state.sale;
        this.props.createSale(sale);
    }

    handleChange(att, e) {
        var newSale = this.state.sale;
        newSale[att] = e.target.value;
        this.setState({sale: newSale});
    }
    
    handleChangeDay(e, att, date) {
        var newSale = this.state.sale;
        newSale[att] = date;
        this.setState({sale: newSale});
    }
    
    handleChoosePattern(e, id) {
        var newSale = this.state.sale;
        var i = newSale.pattern.indexOf(id);
        if (i === -1) newSale.pattern.push(id);
            else newSale.pattern.splice(i, 1);
        this.setState({sale: newSale})
    }
    
    componentWillMount(){
      this.props.getListPattern();
    }
    
    render(){
        console.log(this.state);
      return (
          <div>
               Detail:
               <input type = "text" name = "detail"
               onChange={(e) => this.handleChange('detail', e)}
               /><br/>
               Percentage:
               <input type = "number" min={1} max={99} name= "percentage"
               onChange={(e) => this.handleChange('percentage', e)}
               /><br/>
               Start Day:
               <input type = "date" name= "startDay"
               onChange={(e, att, date) => this.handleChangeDay(e, 'startDay', date)}
               /><br/>
               End Day:
               <input type = "date" name= "endDay"
               onChange={(e, att, date) => this.handleChangeDay(e, 'endDay', date)}
               /><br/>
               <button onClick={this.getValueCreate}>Create</button>
            <table className="table table-bordered">
             <thead>
               <tr>
                 <th>status</th>
                 <th>url</th>
                 <th>designer</th>
                 <th>vote</th>
                 <th>voteQuantity</th>
                 <th>name</th>
                 <th>available</th>
               </tr>
             </thead>
             <tbody>
              {this.props.PatternList.listPatternAdmin.map(pattern =>
                   <PatternItem
                   key = {pattern._id}
                   pattern = {pattern}
                   funcOnControl={this.handleChoosePattern}
                   control={"checkboxSale"}
                   />
                )
              }

             </tbody>
            </table>
          </div>
      );
    }
};

export default CreateSaleProgram;