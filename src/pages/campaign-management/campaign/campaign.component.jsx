import React from 'react'
import PieChart from 'react-minimal-pie-chart'
import './campaign.styles.scss'

const Campaign = ({ attendee = 75, notAttend = 25 }) => {
    return (
        <div className='campaign-dashboard'>
            <div className='campaign-header'>
                <span className='campaign-text'>Campaign Dashboard</span>
            </div>
            <div className='data-container'>
                <div className='container-1'>
                    <div className='container-1-1'>
                        <div className='container-1-1-1'></div>
                        <div className='container-1-1-2'></div>
                    </div>
                    <div className='container-1-2'>

                    </div>
                </div>
                <div className='container-2'>
                    <div className='header-container'>
                        <span className='text-1'>Overall Stats</span> <br />
                        <span className='text-2'>Overall Statistical Records of the Campaign</span>
                    </div>
                    <div className='data-section'>
                        <div className='piechart-container'>
                            <PieChart
                                className='pie'
                                animate={false}
                                animationDuration={500}
                                animationEasing="ease-out"
                                cx={50}
                                cy={50}
                                data={[
                                    {
                                        color: '#00FF00',
                                        title: attendee,
                                        value: attendee
                                    },
                                    {
                                        color: '#FF0000',
                                        title: notAttend,
                                        value: notAttend
                                    }
                                ]}

                                //แสดงตัวอักษร
                                label={false}
                                //ตำแหน่งที่แสดงตัวอักษร
                                labelPosition={50}
                                //วงกลมกี่องศา
                                lengthAngle={360}
                                //ความกว้างของเส้นกราฟ
                                lineWidth={50}
                                onClick={undefined}
                                onMouseOut={undefined}
                                onMouseOver={undefined}

                                //ระยะห่างระหว่างกราฟแต่ละเส้น
                                paddingAngle={0}
                                //รัศมีของวงกลม
                                radius={50}
                                rounded={false}
                                startAngle={0}
                                viewBoxSize={[
                                    100,
                                    100
                                ]}
                            />
                        </div>
                        <div className='data-container'>
                            <div className='percentage'>
                                <h4 className='attendee'>{ attendee } % Attendee</h4>
                                <h4 className='not-attend'>{ notAttend } % Not Attend</h4>
                            </div>
                            <div className='time-container'>
                                <h4 className='time-text'>Time Remaining</h4>
                                <h2 className='time'>00H : 30M : 20S</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Campaign