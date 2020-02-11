import { CandidateActionTypes } from './candidates.types'

const INITIAL_STATE = {
    candidate: null
}

const candidateReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CandidateActionTypes.CREATE_CANDIDATE: 
            return {
                //return new state
            }
        case CandidateActionTypes.EDIT_CANDIDATE:
            return {
                //return new state
            }
        case CandidateActionTypes.DELETE_CANDIDATE:
            return {
                //return new state
            }
        case CandidateActionTypes.GET_CANDIDATE:
            return {
                //return new state
            }
        default:
            return state
    }
}

export default candidateReducer