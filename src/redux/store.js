import { configureStore} from "@reduxjs/toolkit";
import bazarRedcuer from './bazarSlice'

export const store = configureStore({
    reducer: {
        bazar: bazarRedcuer
    },
})