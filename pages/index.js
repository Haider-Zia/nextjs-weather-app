import CityWeatherCard from "@/components/CityWeatherCard";
import { Layout, Spin, Result, Empty } from "antd";
import SearchBar from "@/components/SearchBar";
const { Header, Content } = Layout;
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(false);
  const [searchEntry, setSearchEntry] = useState("");

  const handleSearch = async (input) => {
    setSearchEntry(input);
    setError(false);
    setLoading(true);
    try {
      const res = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${input}&aqi=no`
      );
      const body = await res.json();
      if (body.error) {
        setError(true);
        setLoading(false);
      }
      setData(body);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Stixor Weather App</title>
        <link rel="icon" href="/weather.svg" />
      </Head>
      <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SearchBar search={handleSearch} />
        </Header>
        <Content
          style={{
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {loading ? (
            <Spin size="large" style={{ marginTop: "10vh" }} />
          ) : error ? (
            <Result
              status="error"
              title="Error"
              subTitle={`There was an error searching for ${
                searchEntry ? searchEntry : "your entered city."
              }`}
            />
          ) : data ? (
            <CityWeatherCard
              temperatureCelcius={data.current.temp_c}
              temperatureFahrenheit={data.current.temp_f}
              condition={data.current.condition.text}
              humidity={data.current.humidity}
              wind={data.current.wind_kph}
              icon={data.current.condition.icon}
              city={data.location.name}
              region={data.location.region}
              country={data.location.country}
            />
          ) : (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description="No data, search for a city!"
            />
          )}
        </Content>
      </Layout>
    </>
  );
}
