import React, { useState } from "react";
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { Rnd } from 'react-rnd';

const Visualization = () => {

    return (
        <>
            <Rnd
                style={{ backgroundColor: 'green' }}
                default={{
                    x: 0,
                    y: 0,
                    width: 320,
                    height: 200,
                }}
                disableDragging

            >
                <Rnd
                    style={{ backgroundColor: '#02101F' }}
                    default={{
                        x: 0,
                        y: 0,
                        width: 120,
                        height: 100,
                    }}
                >
                    Rnd
        </Rnd>
            </Rnd>
            <Rnd
                style={{ backgroundColor: 'red' }}
                default={{
                    x: 0,
                    y: 0,
                    width: 320,
                    height: 200,
                }}
            >
                Rnd
        </Rnd>
            <Rnd
                style={{ backgroundColor: 'blue' }}
                default={{
                    x: 0,
                    y: 0,
                    width: 320,
                    height: 200,
                }}
            >
                Rnd
        </Rnd>
        </>
    )
}
export default Visualization;