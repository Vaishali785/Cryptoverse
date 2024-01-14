import React from "react";
import { Link } from "react-router-dom";
import millify from "millify";
import { Typography, Avatar, Row, Col, Statistic } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Cryptocurrencies from "./cryptocurrencies";
import News from "./news";
import Loader from "./loader";

export default function HomePage() {
    const { Title } = Typography;
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;
    // console.log("data", data);

    if (isFetching) return <Loader />;
    return (
        <>
            <Title level={2} className="heading">
                Global Crypto Stats
            </Title>
            <Row>
                <Col span={12}>
                    <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
                </Col>
                <Col span={12}>
                    <Statistic
                        title="Total Exchanges"
                        value={millify(globalStats.totalExchanges)}
                    />
                </Col>
                <Col span={12}>
                    <Statistic
                        title="Total Market Cap"
                        value={millify(globalStats.totalMarketCap)}
                    />
                </Col>
                <Col span={12}>
                    <Statistic
                        title="Total 24h Volume"
                        value={millify(globalStats.total24hVolume)}
                    />
                </Col>
                <Col span={12}>
                    <Statistic
                        title="Total Markets"
                        value={millify(globalStats.totalMarkets)}
                    />
                </Col>
            </Row>

            <div className="home-heading-container">
                <Title level={2} className="home-title">
                    Top 10 Cryptocurrencies
                </Title>
                <Title level={4} className="home-title show-more">
                    <Link to="/cryptocurrencies">Show More</Link>
                </Title>
            </div>
            <Cryptocurrencies simplified />

            {/* <div className="home-heading-container">
                <Title level={2} className="home-title">
                    Latest Cryptos News
                </Title>
                <Title level={2} className="home-title">
                    <Link to="/cryptocurrencies">Show More</Link>
                </Title>
            </div> */}
            {/* <News simplified /> */}
        </>
    );
}
