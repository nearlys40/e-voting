import React from 'react'
import './voters.styles.scss'
import { message, Upload, Button, Icon } from 'antd'

class Voters extends React.Component {
    handleClick = () => {
        alert('File Downloaded!!')
    }

    render() {
        const { Dragger } = Upload

        return (
            <div className='voters'>
                <div className='header-container'>
                    <span className='header-text'>Voters</span>
                </div>
                <div className='voters-content-container'>
                    <div className='content-data'>
                        <div className='upload-file'>
                            <div className='upload-header'>
                                <span className='upload-header-text'>Upload Voters Data</span>
                            </div>
                            <Dragger
                                name={'file'}
                                multiple={false}
                                action={'https://www.mocky.io/v2/5cc8019d300000980a055e76'}
                                onChange={(info) => {
                                    const { status } = info.file;
                                    if (status !== 'uploading') {
                                        console.log(info.file, info.fileList);
                                    }
                                    if (status === 'done') {
                                        message.success(`${info.file.name} file uploaded successfully.`);
                                    } else if (status === 'error') {
                                        message.error(`${info.file.name} file upload failed.`);
                                    }
                                }}
                            >
                                <Icon type='upload' />
                                <p className='browse-file-text'>
                                    Browse file  |  Drag and Drop
                        </p>
                            </Dragger>
                        </div>
                        <div className='download-file'>
                            <p>Supported Data template</p>
                            <p>Is available for download</p>
                            <Button
                                className='download-file-button'
                                type='primary'
                                onClick={() => this.handleClick()}
                            >
                                <Icon type='download' />
                                <span>Download</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Voters