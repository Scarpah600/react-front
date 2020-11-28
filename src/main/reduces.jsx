import { combineReducers} from 'redux'
import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReduce'
import BillingCycleReducer from '../billingCycle/billingReducer'
import {reducer as formReducer}from 'redux-form'
import {reducer as toastrReducr} from 'react-redux-toastr'

const rootReducer = combineReducers({
    dashboard:  DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer,
    toastr: toastrReducr
    


})

export default rootReducer