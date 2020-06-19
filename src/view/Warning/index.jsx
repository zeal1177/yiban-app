import React from 'react';
import { TabBar, NavBar, Icon  } from 'antd-mobile';
import {Table} from 'antd';
import Tab from '../Tab'
import './index.css'

const arr = ['', '概率论', '', '大学英语', '数学分析', '高等函数', 'java编程', '', '数理统计', '']

const dataSource = [
    {
      key: '1',
      name: '必修（45）',
      due: '134.0',
      have: '126.0',
      not: '8.0',
    },
    {
        key: '2',
        name: '限选（0）',
        due: '0.0',
        have: '0.0',
        not: '0.0',
      },
      {
        key: '3',
        name: '任选',
        due: '',
        have: '10.0',
        not: '0.0',
      },
      {
        key: '4',
        name: '实践',
        due: '4.0',
        have: '4.0',
        not: '0.0',
      },
  ];
  const notData = [
    {
      key: '1',
      name: '数学分析（三）',
      due: '必修',
      have: '6.0',
      grade: '58',
    },
    {
        key: '2',
        name: '大学英语',
        due: '必修',
        have: '2.0',
        grade: '56',
      },
     
  ];

  const columns = [
    {
      title: '类别',
      dataIndex: 'name',
      key: 'name',
      width:'25%',
    },
    {
      title: '应修学分',
      dataIndex: 'due',
      key: 'due',
      width:'25%',
    },
    {
      title: '已获学分',
      dataIndex: 'have',
      key: 'have',
      width:'25%',
    },
    {
      title: '未获学分',
      dataIndex: 'not',
      key: 'not',
      width:'25%',
    },
  ];
  const notColumns = [
    {
      title: '课程',
      dataIndex: 'name',
      key: 'name',
      width:'30%',
    },
    {
      title: '类别',
      dataIndex: 'due',
      key: 'due',
      width:'20%',
    },
    {
      title: '学分',
      dataIndex: 'have',
      key: 'have',
      width:'20%',
    },
    {
      title: '成绩',
      dataIndex: 'grade',
      key: 'grade',
      width:'20%',
      render:(text) => {
          return <span style={{color:'red'}}>{text}</span>
      }
    },
  ];
const Warning = () => {
    return(
        <div className="warning" >
           <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => console.log('onLeftClick')}
            
            >学情警示</NavBar>
                <div className="content-main">
                    <p style={{marginTop:'10px'}}>入学以来修读情况</p>
                    <Table dataSource={dataSource} columns={columns} size='small' pagination={false}/>
                    <p style={{marginTop:'10px'}}>未获得学分的具体情况</p>
                    <Table dataSource={notData} columns={notColumns} size='small' pagination={false}/>
                </div>
                    

            <Tab/>
        </div>
    )
}

export default Warning;