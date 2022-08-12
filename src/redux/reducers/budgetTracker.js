import { SET_BUDGET_TRACKER } from "../types";

const initialState = {
    data: {
        'selected_index': '2022-7',
        'total_data': {
            'total_income': 230000.00,
            'total_expense': 20000.00,
            'total_savings': 210000.00,
            'total_extra': 0.00
        },
        'monthly_data': {
            '2022-7': {
                'month': '7',
                'year': '2022',
                'income': {
                    'total': 230000.00,
                    0: {
                        'description': 'Salary',
                        'value': 200000.00
                    },
                    1: {
                        'description': 'Freelance',
                        'value': 30000.00
                    }
                },
                'expense': {
                    'total': 20000.00,
                    0: {
                        'description': 'Rent',
                        'value': 10000.00
                    },
                    1: {
                        'description': 'Bills',
                        'value': 10000.00
                    }
                },
                'savings': {
                    'total': 210000.00,
                    0: {
                        'description': 'Savings 1',
                        'value': 210000.00
                    }
                },
                'extra': {
                    'total': 0.00
                }
            }
        }
    }
}

const budgetTrackerReducers = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_BUDGET_TRACKER:
            return {
                ...state,
                data: {
                    ...state.data,
                    ...action.payload
                }
            }
    
        default:
            return state
    }
}


export default budgetTrackerReducers;