import React from "react";
import { useGetExchangesQuery } from "../services/cryptoApi";
import Loader from "./loader";
// import {Link} from 'react-router-dom';
import { Typography, Avatar, Row, Col, Collapse } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import millify from "millify";

const { Title, Text } = Typography;
const { Panel } = Collapse;
export default function Exchanges() {
  const { data, isFetching } = useGetExchangesQuery();
  if (isFetching) return <Loader />;
  const exchangeData = data?.data?.exchanges;
  console.log("exchange", exchangeData[0]?.recommended);

  return (
    <>
      <Row className="">
        <Col span={9}>
          <strong>Exchanges</strong>
        </Col>
        <Col span={5}>
          <strong>24h Traded Volume</strong>
        </Col>
        <Col span={5}>
          <strong>Market</strong>
        </Col>
        <Col span={5}>
          <strong>Change</strong>
        </Col>
      </Row>

      {exchangeData.map((exchange) => (
        <Col span={24} className="exchange-row">
          <Row key={exchange.uuid}>
            <Col span={9}>
              <Text>{exchange.rank}.</Text>
              <Avatar src={exchange.iconUrl} className="exchange-image" />
              <Text>{exchange.name} </Text>
            </Col>
            <Col span={5}>{millify(exchange["24hVolume"])}</Col>
            <Col span={5}>{millify(exchange["numberOfMarkets"])}</Col>
            <Col span={5}>
              {exchange.recommended ? (
                <CheckCircleTwoTone twoToneColor="green" />
              ) : (
                ""
              )}
            </Col>
          </Row>
        </Col>
      ))}
    </>
  );
}
