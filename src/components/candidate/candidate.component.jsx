import React from 'react'
import { Button, Icon } from 'antd'
import {
    Button as ButtonSem,
    Icon as IconSem,
    Grid, Responsive
} from 'semantic-ui-react'
import './candidate.styles.scss'


export default class Candidate extends React.Component {
    state = {}

    handleOnUpdate = (e, { width }) => this.setState({ width })

    render() {
        let { id, firstName, lastName, description, imageUrl } = this.props;
        const { width } = this.state;
        const gridWidth =
            width <= Responsive.onlyMobile.maxWidth ? [5, 8, 3] : [3, 8, 5]

        return (
            <Responsive onUpdate={this.handleOnUpdate}>
                <div className='candidate-container'>
                    <Grid columns={3} style={{ width: '100%' }}>
                        <Grid.Row>
                            <Grid.Column width={gridWidth[0]}>
                                <div className='profile-container'>
                                    <img className='candidate-profile' alt='candidate-profile' src={`${imageUrl}`} />
                                </div>
                            </Grid.Column>
                            <Grid.Column width={gridWidth[1]}>
                                <div className='data-container'>
                                    <span className='name'>{firstName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{lastName}</span><br />
                                    <span className='description'>{description}</span>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={gridWidth[2]}>
                                <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                                    <div className='button-container'>
                                        <Button
                                            className='edit-button'
                                            type='primary'
                                            onClick={() => alert('edit candidate')}
                                        >
                                            <Icon type='edit' />
                                            <span><p style={{ color: 'white' }}>EDIT</p></span>
                                        </Button>
                                        <Button
                                            className='delete-button'
                                            type='primary'
                                            onClick={() => alert('delete candidate')}
                                        >
                                            <Icon type='delete' />
                                            <span><p style={{ color: 'white' }}>REMOVE</p></span>
                                        </Button>
                                    </div>
                                </Responsive>


                                <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
                                    <Grid className='collapse-bttn-grid'>
                                        <Grid.Row className='edit-bttn'>
                                            <ButtonSem animated='vertical' color='red' style={{ backgroundColor: '#1890FF' }} size='medium' onClick={() => alert('edit candidate')}>
                                                <ButtonSem.Content hidden><p>edit</p></ButtonSem.Content>
                                                <ButtonSem.Content visible>
                                                    <Icon type='edit' color='white' />
                                                </ButtonSem.Content>
                                            </ButtonSem>
                                        </Grid.Row>
                                        <Grid.Row className='delete-bttn'>
                                            <ButtonSem animated='vertical' color='red' style={{ backgroundColor: '#FF0000' }} size='medium' onClick={() => alert('remove candidate')}>
                                                <ButtonSem.Content hidden><p>remove</p></ButtonSem.Content>
                                                <ButtonSem.Content visible>
                                                    <Icon type='delete' />
                                                </ButtonSem.Content>
                                            </ButtonSem>
                                        </Grid.Row>
                                    </Grid>
                                </Responsive>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </Responsive>
        )
    }
}