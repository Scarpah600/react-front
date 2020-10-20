import { combineReducers} from 'redux'
import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReduce'
import BillingCycleReducer from '../billingCycle/billingReducer'

const rootReducer = combineReducers({
    dashboard:  DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer

})

export default rootReducer