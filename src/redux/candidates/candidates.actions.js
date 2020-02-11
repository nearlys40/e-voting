import { CandidateActionTypes } from './candidates.types'

export const createCandidate = candidate => ({
    type: CandidateActionTypes.CREATE_CANDIDATE,
    payload: candidate
})

export const editCandidate = candidate => ({
    type: CandidateActionTypes.EDIT_CANDIDATE,
    payload: candidate
})

export const deleteCandidate = id => ({
    type: CandidateActionTypes.DELETE_CANDIDATE,
    payload: id
})

export const getCandidate = id => ({
    type: CandidateActionTypes.GET_CANDIDATE,
    payload: id
})