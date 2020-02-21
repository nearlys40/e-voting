import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'

const CustomModalButton = (props) => {
    const { modalName, header, content, okText, cancelText } = props

    return (
        <Modal
            {...props}

            trigger={
                <Button>{ modalName }</Button>
            } basic size='small'
        >
            <Header content={header} />
            <Modal.Content>
                <p>
                    { content }
                </p>
            </Modal.Content>
            <Modal.Actions>
                <Button basic color='red' inverted>
                    { cancelText }
                </Button>
                <Button color='green' inverted>
                    { okText }
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default CustomModalButton