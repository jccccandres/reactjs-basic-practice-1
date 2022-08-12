import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BudgetTracker = () => {
    const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const budgetInfo = useSelector(state => state.budgetTracker);
    const selectedIndex = budgetInfo.data.selected_index;

    return (
        <>
            <div className="container">
                <h1>Budget Tracker</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <div className="main-wrapper">
                    <h2>{months[budgetInfo.data.monthly_data[selectedIndex].month]}, {budgetInfo.data.monthly_data[selectedIndex].year}</h2>
                    <div className="form-wrapper">
                        {/* <select>
                            {
                                months.map((value, index) => (
                                    <option key={index}>{value}</option>
                                ))
                            }
                        </select>

                        <select>
                            <option>2020</option>
                            <option>2021</option>
                            <option>2022</option>
                        </select> */}
                    </div>
                    <div className="table">
                        <div className="table-row">
                            <div className="table-column"><h3><Link to="/reactjs-basic-practice-1/budget-tracker/income">Income</Link></h3></div>
                            <div className="table-column"><h5>{ budgetInfo.data.monthly_data[selectedIndex].income.total.toLocaleString('en-US') }</h5></div>
                        </div>
                        <div className="table-row">
                            <div className="table-column"><h3><Link to="/reactjs-basic-practice-1/budget-tracker/expense">Expense</Link></h3></div>
                            <div className="table-column"><h5>( { budgetInfo.data.monthly_data[selectedIndex].expense.total.toLocaleString('en-US') } )</h5></div>
                        </div>
                        <div className="table-row">
                            <div className="table-column"><h3><Link to="/reactjs-basic-practice-1/budget-tracker/savings">Savings</Link></h3></div>
                            <div className="table-column"><h5>( { budgetInfo.data.monthly_data[selectedIndex].savings.total.toLocaleString('en-US') } )</h5></div>
                        </div>
                        <div className="table-row">
                            <div className="table-column"><h3>Extra</h3></div>
                            <div className="table-column"><h5>{ budgetInfo.data.monthly_data[selectedIndex].extra.total.toLocaleString('en-US') }</h5></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BudgetTracker;