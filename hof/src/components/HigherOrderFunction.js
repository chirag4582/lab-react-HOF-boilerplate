import React, { Component } from "react";

class HigherOrderFunctions extends Component {
    constructor() {
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
            ]
        };
    }

    renderList(data) {
        return (
            <ul>
                {
                    data.map((e)=>{
                        return(
                            <li>
                                <span>id={e.id} </span>
                                <span> Name={e.name} </span>
                                <span> UserType={e.user_type} </span>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }

    renderFragment(title, data) {
        return (
            <div>
                 <h1>{title}</h1>
                <div className="display-box">{data}</div>
            </div>  
        );
    }

    filterType(type) {
        let filterData = this.state.userData.filter((e)=>e.user_type===type)
        return this.renderList(filterData)
    }

    filterLetter(letter) {
        let filterData = this.state.userData.filter((e)=>e.name[0]===letter)
        return this.renderList(filterData)
    }

    filterAge() {
        let filterData = this.state.userData.filter((elt) => {
            return elt.age>28&&elt.age<=50
        });
        return this.renderList(filterData);
    }

    sumTypeYears(type){
        return this.state.userData
            .filter((elt) => elt.user_type === type)
            .reduce((sum, elt) => {
                return sum + elt.years;
            }, 0);
    }

    render() {
        return (
            <div>
                {this.renderFragment(
                    "Display ",
                    this.renderList(this.state.userData)
                )}
                {this.renderFragment(
                    "Display Based on User Type",
                    this.filterType("Designer")
                )}
                {this.renderFragment(
                    "Filter All data starting with letter J",
                    this.filterLetter("J")
                )}
                {this.renderFragment(
                    "Filter all data based on age greater than 28 and age less than or equal to 50",
                    this.filterAge()
                )}
                {this.renderFragment(
                    "Find the total years of the designers",
                    this.sumTypeYears("Designer")
                )}
            </div>
        );
    }
}

export default HigherOrderFunctions