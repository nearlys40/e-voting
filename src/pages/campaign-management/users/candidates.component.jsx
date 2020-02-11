import React from 'react'
import { Button, Upload, message, Icon } from 'antd'
import { Modal, Form, TextArea } from 'semantic-ui-react'
import _ from 'lodash'
import Candidate from '../../../components/candidate/candidate.component'
import './candidates.styles.scss'

class Candidates extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
            candidateName: '',
            description: ''
        }
    }

    handleCreateNewCandidate = (event) => {
        event.preventDefault()
        //to something
        this.close()
    }

    handleSubmit = (event) => {
        event.preventDefault()
        //do something
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    close = () => {
        this.setState({ open: false })
    }

    AddCandidateModal = () => {
        const { open } = this.state
        const uploadProps = {
            name: 'file',
            accept: 'image/png, image/jpeg',
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            headers: {
                authorization: 'authorization-text',
            },
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };

        return (
            <Modal
                open={open}
                onClose={this.close}
                closeOnDimmerClick={false}
                trigger={
                    <Button type="primary" icon="plus" size={'large'} onClick={() => this.setState({ open: true })}>
                        <p style={{ display: "inline", marginLeft: '15px', color: 'white' }}>Add New Candidate</p>
                    </Button>
                }>
                <div className='header-section'>
                    <h1
                        style={{
                            width: '100%',
                            color: 'white',
                            display: 'inline-block',
                            position: 'relative',
                            backgroundColor: 'grey',
                            textAlign: 'center',
                            paddingTop: '10px',
                            paddingBottom: '10px'
                        }}>New Candidate</h1>
                    <Button
                        onClick={this.close}
                        style={{
                            width: '40px',
                            height: '40px',
                            display: 'inline-block',
                            position: 'absolute',
                            marginLeft: '10px',
                            backgroundColor: 'transparent',
                            borderColor: 'red',
                            color: 'white'
                        }}>
                        X
                    </Button>
                </div>
                <Modal.Content image scrolling>
                    <Modal.Description>
                        <Form size='large' onSubmit={this.handleSubmit} >
                            <Form.Field>
                                <label className='text-label'><h4>NAME</h4></label>
                                <Form.Input
                                    placeholder='Person name / Party name'
                                    value={this.state.candidateName}
                                    name='username'
                                    onChange={this.handleChange}
                                    required />
                            </Form.Field>
                            <Form.Field>
                                <label className='text-label'><h4>DESCRIPTION</h4></label>
                                <TextArea
                                    placeholder='Description here...'
                                    value={this.state.description}
                                    onChange={this.handleChange}
                                    required
                                />
                            </Form.Field>
                            <Form.Field>
                                <label className='text-label'><h4>PHOTO / LOGO</h4></label>
                                <Upload
                                    {...uploadProps}>
                                    <Button style={{
                                        borderColor: 'blue',
                                        color: 'blue',
                                        marginTop: '4px',
                                        marginRight: '20px'
                                    }}>
                                        Browse File
                                    </Button> <span>File Size must not exceed xxxMB Image Size : 222 x 333 px</span>
                                </Upload>
                            </Form.Field>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
                <div
                    className='button-section'
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '10px'
                    }}>
                    <Button
                        onClick={this.handleCreateNewCandidate}
                        size={'large'}
                        style={{
                            width: '150px',
                            color: 'white',
                            backgroundColor: 'green',
                            borderColor: 'green',
                        }}
                    >
                        Save
                    </Button>
                </div>
            </Modal>
        )
    }

    render() {
        const { candidates } = this.props

        return (
            <div className='candidates'>
                <div className='candidates-header'>
                    <span className='header-text'>Candidates</span>
                    {this.AddCandidateModal()}
                </div>
                <div className='candidates-container'>
                    <div className='candidates-list-header'>
                        <span>Users</span>
                    </div>
                    <div className='candidates-list'>
                        {
                            candidates.map(({ id, ...otherProps }) => (
                                <Candidate key={id} {...otherProps} />
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Candidates