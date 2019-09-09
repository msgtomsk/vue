import Vue from "vue";

export const loadData = ({ commit }) => {
    Vue.http
        .get("data.json")
        .then(response => response.json())
        .then(data => {
            if (data) {
                const stocks = data.stocks;
                const funds = data.funds;
                const portfolio = data.portfolio;

                const stockPortfolio = {
                    funds,
                    portfolio
                };

                commit("SET_STOCKS", stocks);
                commit("SET_PORTFOLIO", stockPortfolio);
            }
        });
};
