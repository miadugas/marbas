// State Manager
import React from 'react';

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

confirmFavorites = () => {
    // let currentFavorite = this.state.favorites[0];
        this.setState({
        firstVisit: false,
        page: 'dashboard',
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