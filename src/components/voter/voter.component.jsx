import React from 'react'

class Voter extends React.Component {
    render() {
        const { id } = this.props

        return (
            <div>
                <span><strong>VOTER</strong> ID:{ id }</span>
            </div>
        )
    }
}

export default Voter