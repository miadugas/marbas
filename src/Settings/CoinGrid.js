import React from 'react';
import styled from 'styled-components';
import {AppContext} from "../App/AppProvider";
import {SelectableTile} from "../Shared/Tile";

export const CoinGridStyled = styled.div`
    display: grid;   
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); 
    grid-gap: 15px; 
    /* margin-top: 40px;  */
`

// function getLowerSectionCoins(coinList, filteredCoins){
//   return (filteredCoins && Object.keys(filteredCoins)) ||
//     Object.keys(coinList).slice(0, 100)
// }

function getCoinsToDisplay(coinList){
    return Object.keys(coinList).slice(0, 100);
    // topSection ? favorites : getLowerSectionCoins(coinList, filterCoins);
}

export default function (){
    return <AppContext.Consumer>
        {({coinList}) => <CoinGridStyled>
            {Object.keys(coinList).map(coinKey =>
            <SelectableTile> {coinKey} </SelectableTile> 
            )}
        </CoinGridStyled>}
    </AppContext.Consumer>
    }

