import React, { Fragment, useState } from "react";
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { Tooltip, Button } from "antd";
import { PlusOutlined, SaveOutlined, EditOutlined } from "@ant-design/icons";
import styles from './index.less';

interface Props {
    edit: () => void
}
const Children = (props: Props) => {

    const childLayout = [
        { i: 'd', x: 6, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
        { i: 'e', x: 8, y: 0, w: 1, h: 2 }
    ]
    const [edit, setEdit] = useState<boolean>(false);

    const [layout, setLayout] = useState<any[]>(childLayout);

    return (
        <Fragment>

            <GridLayout
                className="layout"
                layout={layout}
                cols={12}
                rowHeight={30}
                isDraggable={edit}
                isResizable={edit}
                width={1200}>
                {
                    layout.map(i => <div key={i.i} style={{ backgroundColor: '#69E2D4' }}>{i.i}</div>)
                }
            </GridLayout>
            <div className={styles.layoutOption}>
                {edit ?
                    <div style={{ float: 'right' }}>

                        <Tooltip title="新增" style={{ float: 'right' }}>
                            <Button
                                type="danger"
                                shape="circle"
                                size="large"
                                onClick={() => {
                                    layout.push({ i: Math.random(), x: 8, y: 7, w: 4, h: 4 })
                                    setLayout([...layout]);
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
                    <div style={{ float: 'right', textAlign: 'center' }}>
                        <Tooltip title="编辑" >
                            <Button
                                type="danger"
                                shape="circle"
                                size="large"
                                onClick={() => {
                                    setEdit(true)
                                    props.edit()
                                }}
                            >
                                <EditOutlined />
                            </Button>
                        </Tooltip>
                    </div>
                }
            </div>
        </Fragment >
    )
}
export default Children;