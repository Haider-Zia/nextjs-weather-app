import { Card, Row, Col, Typography, Image } from "antd";
import React from "react";

const CityWeatherCard = ({
  temperatureCelcius,
  temperatureFahrenheit,
  condition,
  humidity,
  wind,
  icon,
  city,
  region,
  country,
}) => {
  return (
    <Card
      title={
        <Typography.Title
          style={{ color: "#666", marginTop: "5vh" }}
        >{`${temperatureCelcius}°C/${temperatureFahrenheit}°F`}</Typography.Title>
      }
      extra={
        <>
          <Row>
            <Typography.Title style={{ color: "#666", marginTop: "5vh" }}>
              {condition}
            </Typography.Title>
            <Image width={100} src={icon} />
          </Row>
        </>
      }
      style={{
        width: "60vw",
        background: "#dde",
        marginTop: "20vh",
      }}
    >
      <Row>
        <Col span={12}>
          <Typography.Title level={2}>{city}</Typography.Title>
          <Typography.Title level={3}>{region}</Typography.Title>
          <Typography.Title level={3}>{country}</Typography.Title>
        </Col>

        <Col span={12}>
          <Row
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Typography.Title
              level={3}
            >{`Humidity: ${humidity}%`}</Typography.Title>
          </Row>
          <Row
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Typography.Title
              level={3}
            >{`Wind: ${wind} km/h`}</Typography.Title>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default CityWeatherCard;
