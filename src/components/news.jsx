import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Avatar, Select, Row, Col, Card } from "antd";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";
import moment from "moment";
import Loader from "./loader";

const { Text, Title } = Typography;
const { Option } = Select;
const demoImage =
    "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";
export default function News({ simplified }) {
    const [newsCategory, setNewsCategory] = useState("CryptoCurrency");
    const { data: cryptoNews } = useGetCryptoNewsQuery({
        newsCategory,
        count: simplified ? 6 : 12
    });
    const { data, isFetching } = useGetCryptosQuery(100);

    console.log(cryptoNews)
    if (!cryptoNews?.value) return <Loader />;
    // console.log(data);
    // console.log(moment(cryptoNews.value[0].datePublished).startOf('hh').fromNow());
    return (
        <>
            <Row gutter={[24, 24]}>
                {!simplified && (
                    <Col span={24}>
                        <Select
                            showSearch
                            className="select-news"
                            placeholder="Select a crypto"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase())
                            }
                            onChange={(value) => setNewsCategory(value)}
                        >
                            <Option value="CryptoCurrency">CryptoCurrency</Option>
                            {data?.data?.coins.map((coin) => (
                                <Option value={coin.name} key={coin.uuid}>
                                    {coin.name}
                                </Option>
                            ))}
                        </Select>
                    </Col>
                )}
                {cryptoNews?.value.map((news, i) => (
                    <Col xs={24} sm={12} lg={8} className="crypto-card" key={i}>
                        <Card className="news-card" hoverable>
                            <a href={news.url} target="_blank" rel="noreferrer">
                                <div className="news-image-container">
                                    <Title className="news-title" level={4}>
                                        {news.name}
                                    </Title>
                                    <img
                                        style={{ maxWidth: "200px", maxHeight: "100px" }}
                                        src={news?.image?.thumbnail?.contentUrl || demoImage}
                                        alt="news"
                                    />
                                </div>
                                <p>
                                    {news.description > 50
                                        ? `${news.description.substring(0, 50)}...`
                                        : news.description}
                                </p>
                                <div className="provider-container">
                                    <div>
                                        <Avatar
                                            src={
                                                news.provider[0]?.image?.thumbnail?.contentUrl ||
                                                demoImage
                                            }
                                            alt="news"
                                        />
                                        <Text className="provider-name">
                                            {news.provider[0]?.name}{" "}
                                        </Text>
                                    </div>
                                    <Text>
                                        {moment(news.datePublished).startOf("ss").fromNow()}
                                    </Text>
                                </div>
                                {/* <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}</p> */}
                            </a>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
}
