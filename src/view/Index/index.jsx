import React from 'react';
import { TabBar, NavBar, Icon  } from 'antd-mobile';
import {Table} from 'antd';
import Tab from '../Tab'
import './index.css'

const arr = ['', '概率论', '', '大学英语', '数学分析', '高等函数', 'java编程', '', '数理统计', '']

const dataSource = [
    {
      key: '1',
      name: '1',
      mon: arr[Math.round(Math.random()*10)],
      tue: arr[Math.round(Math.random()*10)],
      wed: arr[Math.round(Math.random()*10)],
      thu: arr[Math.round(Math.random()*10)],
      fri: arr[Math.round(Math.random()*10)],
      sat: '',
      sun: '',
    },
    {
        key: '2',
        name: '2',
        mon: arr[Math.round(Math.random()*10)],
        tue: arr[Math.round(Math.random()*10)],
        wed: arr[Math.round(Math.random()*10)],
        thu: arr[Math.round(Math.random()*10)],
        fri: arr[Math.round(Math.random()*10)],
        sat: '',
        sun: '',
    },
    {
        key: '3',
        name: '3',
        mon: arr[Math.round(Math.random()*10)],
        tue: arr[Math.round(Math.random()*10)],
        wed: arr[Math.round(Math.random()*10)],
        thu: arr[Math.round(Math.random()*10)],
        fri: arr[Math.round(Math.random()*10)],
        sat: '',
        sun: '',
    },
    {
        key: '4',
        name: '4',
        mon: arr[Math.round(Math.random()*10)],
        tue: arr[Math.round(Math.random()*10)],
        wed: arr[Math.round(Math.random()*10)],
        thu: arr[Math.round(Math.random()*10)],
        fri: arr[Math.round(Math.random()*10)],
        sat: '',
        sun: '',
    },
    {
        key: '5',
        name: '5',
        mon: arr[Math.round(Math.random()*10)],
        tue: arr[Math.round(Math.random()*10)],
        wed: arr[Math.round(Math.random()*10)],
        thu: arr[Math.round(Math.random()*10)],
        fri: arr[Math.round(Math.random()*10)],
        sat: '',
        sun: '',
    },
  ];

  const columns = [
    {
      title: '时间',
      dataIndex: 'name',
      key: 'name',
      width:'12%',
    },
    {
      title: '周一',
      dataIndex: 'mon',
      key: 'mon',
      width:'12%',
    },
    {
      title: '周二',
      dataIndex: 'tue',
      key: 'tue',
      width:'12%',
    },
    {
      title: '周三',
      dataIndex: 'wed',
      key: 'wed',
      width:'12%',
    },
    {
        title: '周四',
        dataIndex: 'thu',
        key: 'thu',
        width:'12%',
    },
      {
        title: '周五',
        dataIndex: 'fri',
        key: 'fri',
        width:'12%',
      },
      {
        title: '周六',
        dataIndex: 'sat',
        key: 'sat',
        width:'12%',
      },
      {
        title: '周日',
        dataIndex: 'sun',
        key: 'sun',
        width:'12%',
      },
  ];
const Index = () => {
    return(
        <div className="user" >
           <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => console.log('onLeftClick')}
            rightContent={[
                <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                <Icon key="1" type="ellipsis" />,
            ]}
            >我的课表</NavBar>

                <div className="content-main">
                    <Table dataSource={dataSource} columns={columns} size='small' pagination={false}/>
                </div>
                    

            <Tab/>
        </div>
    )
}

export default Index;