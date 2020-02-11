import { CandidateActionTypes } from './candidates.types'

const INITIAL_STATE = {
    candidate: null
}

const candidateReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CandidateActionTypes.CREATE_CANDIDATE: 
            return {

            }
        case CandidateActionTypes.EDIT_CANDIDATE:
            return {

            }
        case CandidateActionTypes.DELETE_CANDIDATE:
            return {

            }
        case CandidateActionTypes.GET_CANDIDATE:
            return {
                
            }
        default:
            return state
    }
}