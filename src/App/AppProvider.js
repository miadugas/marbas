// State Manager
import React from 'react';

const cc = require('cryptocompare');

cc.setApiKey('f91f26ff6de9facdecd7f2173c671c1bb2198013002fa10aa5b57d9435cae71e');

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        page: 'dashboard',
        ...this.savedSettings(),
        setPage: this.setPage,
        confirmFavorites: this.confirmFavorites
    }
}

componentDidMount = () => {
    this.fetchCoins();
    // this.fetchPrices();
    // this.fetchHistorical();
    }

fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    console.log(coinList);
    this.setState({coinList});
    }

confirmFavorites = () => {
    // let currentFavorite = this.state.favorites[0];
    this.setState({
        firstVisit: false,
        page: 'dashboard'
    //   currentFavorite,
    //   prices: null,
    //   historical: null
    // }, () => {
    //     this.fetchPrices();
    //     this.fetchHistorical();
    });
    localStorage.setItem('marbas', JSON.stringify({
    //   favorites: this.state.favorites,
    //   currentFavorite
            test:'hello'
        }));
    // console.log('Hello');
    }

savedSettings(){
    return {page: 'settings'}
        let marbasData = JSON.parse(localStorage.getItem('marbas'));
        if(!marbasData){
            return {page: 'settings', firstVisit: true}
        }
    // let {favorites, currentFavorite} = marbasData;
    // return {favorites, currentFavorite};
    return {};
    }

    setPage = page => this.setState({page})

    render(){
        return (
        <AppContext.Provider value={this.state}>
            {this.props.children}
        </AppContext.Provider>
        )
    }

}