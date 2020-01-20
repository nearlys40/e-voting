import React from 'react'
import { ReactComponent as TestLogo } from '../../assets/crown.svg'
import { Steps, Button, message, Upload } from 'antd'
import './new-campaign.styles.scss'

class NewCampaignPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            current: 0
        }
    }

    next() {
        this.setState((prevState) => ({
            current: prevState.current + 1
        }))
    }

    prev() {
        this.setState((prevState) => ({
            current: prevState.current - 1
        }))
    }

    done() {
        setTimeout(() => {
            this.props.history.push('/all-campaigns')
        }, 2000);
    }

    render() {
        const { current } = this.state
        const { Dragger } = Upload
        const props = {
            name: 'file',
            multiple: false,
            onChange(info) {
                const { status } = info.file;
                if (status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully.`);
                } else if (status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };

        const { Step } = Steps
        const steps = [
            {
                title: 'STEP 1/3',
                content: (
                    <div className='campaign-info-container'>
                        <span className='campaign-name-text'>
                            Campaign Name
                        </span><br />
                        <input className='campaign-name-input' type='text' /><br /><br />
                        <span className='description-text'>
                            Description
                        </span><br />
                        <textarea className='description-input' rows='4' cols='50' />
                    </div>
                ),
            },
            {
                title: 'STEP 2/3',
                content: (
                    <div className='campaign-info-container'>
                        <p className='upload-campaign-poster-text'>
                            Upload Campaign Poster
                        </p>
                        <Dragger {...props}>
                            <TestLogo />
                            <p className='browse-file-text'>
                                Browse file  |  Drag and Drop
                            </p>
                        </Dragger>
                    </div>
                )
            },
            {
                title: 'STEP 3/3',
                content: (
                    <div className='campaign-info-container'>
                        <p className='upload-campaign-poster-text'>
                            What's Your User Size
                        </p>
                        <div className='plan-container'></div>
                    </div>
                )
            },
        ];

        return (
            <div className='create-new-campaign'>
                <div className='new-campaign-header'>
                    <span className='title'>New Campaign</span>
                </div>
                <div className='create-campaign-container'>
                    <div className='form-container'>
                        <div className='steps-container'>
                            <Steps current={current}>
                                {steps.map(item => (
                                    <Step key={item.title} title={item.title} />
                                ))}
                            </Steps>
                        </div>

                        {steps[current].content}

                        <div className="steps-button-container">
                            {current > 0 && (
                                <Button style={{ marginRight: 8 }} onClick={() => this.prev()}>
                                    Previous
                                </Button>
                            )}
                            {current < steps.length - 1 && (
                                <Button type="primary" onClick={() => this.next()}>
                                    Next
                                </Button>
                            )}
                            {current === steps.length - 1 && (
                                <Button type="primary" onClick={() => this.done()}>
                                    Done
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewCampaignPage