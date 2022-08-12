import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Income = () => {
    const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    const budgetInfo = useSelector(state => state.budgetTracker);
    const selectedIndex = budgetInfo.data.selected_index;

    return (
        <>
            <div className="container">
                <h2><Link to="/reactjs-basic-practice-1/budget-tracker/"> &lt; Back</Link></h2>
                <h1>Income</h1>

                <div className="main-wrapper">
                    <h2>{months[budgetInfo.data.monthly_data[selectedIndex].month]}, {budgetInfo.data.monthly_data[selectedIndex].year}</h2>
                    <h3>Total: { budgetInfo.data.monthly_data[selectedIndex].income.total.toLocaleString('en-US') }</h3>
                    <div className="table table-income">
                        {
                            Object.keys(budgetInfo.data.monthly_data[selectedIndex].income).map((value, index) => (
                                value !== 'total' ? 
                                <div className="table-row" key={index}>
                                    <div className="table-column"><h3>{ budgetInfo.data.monthly_data[selectedIndex].income[value].description.toLocaleString('en-US') }</h3></div>
                                    <div className="table-column"><h5>{ budgetInfo.data.monthly_data[selectedIndex].income[value].value.toLocaleString('en-US') }</h5></div>
                                    <div className="table-column action-column">
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </div>
                                </div>
                                : ''
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Income;