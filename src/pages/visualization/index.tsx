import React, { useState } from "react";
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { EditOutlined, PlusCircleOutlined, PlusOutlined, SaveOutlined } from "@ant-design/icons";
import { Tooltip, Button } from "antd";
import Children from "./Children";

import styles from './index.less';

const Visualization = () => {
    const data = [
        { i: 'a', x: 0, y: 0, w: 10, h: 8, },
        { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
        { i: 'c', x: 4, y: 0, w: 1, h: 2 },
    ];

    const [layout, setLayout] = useState(data);
    const [flag, setFlag] = useState(false);
    const [edit, setEdit] = useState<boolean>(false);

    const changeStatus = (key: string) => {
        setFlag(!flag);
    }
    return (
        <>
            <GridLayout
                className="layout"
                isDraggable={edit}
                isResizable={edit}
                layout={layout}
                cols={12} rowHeight={30} width={1200}>
                <div key="a" style={{ backgroundColor: '#1879FF' }}

                >
                    <PlusCircleOutlined style={{ margin: '5px' }} />
                    <EditOutlined onClick={() => {
                        changeStatus("a")
                    }} />
                    <Children edit={() => changeStatus("a")} />
                </div>
                <div key="b" style={{ backgroundColor: '#1879FF' }}>b</div>
                <div key="c" style={{ backgroundColor: '#1879FF' }}>c</div>
            </GridLayout>
            <div className={styles.optionGroup}>
                {edit ?
                    <div style={{ float: 'right' }}>

                        <Tooltip title="新增" style={{ float: 'right' }}>
                            <Button
                                type="danger"
                                shape="circle"
                                size="large"
                                onClick={() => {

                                }}
                            >
                                <PlusOutlined />
                            </Button>
                        </Tooltip>
                        <div style={{ float: 'right', marginLeft: 10 }}>
                            <Tooltip title="保存" >
                                <Button
                                    type="primary"
                                    shape="circle"
                                    size="large"
                                    onClick={() => {
                                        setEdit(false)
                                    }}
                                >
                                    <SaveOutlined />
                                </Button>
                            </Tooltip>
                        </div>
                    </div> :
                    <div style={{ textAlign: 'center' }}>
                        <Tooltip title="编辑" >
                            <Button
                                type="danger"
                                shape="circle"
                                size="large"
                                onClick={() => setEdit(true)}
                            >
                                <EditOutlined />
                            </Button>
                        </Tooltip>
                    </div>
                }
            </div>
        </>
    )
}
export default Visualization;