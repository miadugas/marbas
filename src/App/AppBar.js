import React from 'react';
import styled, {css} from 'styled-components';

const Bar = styled.div`
    display: grid; 
    /* margin-bottom: 40px;  */
    grid-template-columns: 180px auto 100px 100px; 
`

export default function(){
    return <Bar>
        <div> Marbas </div>
        <div></div>
        <div> Dashboard </div>
        <div> Settings </div>
    </Bar>
}