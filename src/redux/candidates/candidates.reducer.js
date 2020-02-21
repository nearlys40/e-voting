import { CandidateActionTypes } from './candidates.types'

const INITIAL_STATE = {
    candidate: null
}

const candidateReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CandidateActionTypes.CREATE_CANDIDATE: 
            return {
                //return new state
                //POST
                //baseUrl + 'create_candidate'
            }
        case CandidateActionTypes.EDIT_CANDIDATE:
            return {
                //return new state
                //PUT
                //edit_candidate
            }
        case CandidateActionTypes.DELETE_CANDIDATE:
            return {
                //return new state
            }
        default:
            return state
    }
}

export default candidateReducer