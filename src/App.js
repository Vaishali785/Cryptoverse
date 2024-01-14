import "./styles.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./App.css";
import "./App_updated.css";
import { Layout } from "antd";
import { Switch, Route, Routes } from "react-router-dom";
import HomePage from "./components/homepage";
import Cryptocurrencies from "./components/cryptocurrencies";
import Exchanges from "./components/exchange";
import News from "./components/news";
import CryptoDetails from "./components/cryptodetails";

export default function App() {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route path="/" exact element={<HomePage />} />
                            <Route
                                path="/cryptocurrencies"
                                exact
                                element={<Cryptocurrencies />}
                            />
                            <Route path="/exchanges" exact element={<Exchanges />} />
                            <Route path="/news" exact element={<News />} />
                            <Route path="/crypto/:coinId" exact element={<CryptoDetails />} />
                        </Routes>
                    </div>
                </Layout>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </div>
    );
}
