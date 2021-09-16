import React from "react";
import Banner from "./Banner";
import "./Home.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SmallCard from "./SmallCard";
import MediumCard from "./MediumCard";
import LargeCard from "./LargeCard";
import ExploreNearByCard from "./ExploreNearByCard";

function Home() {
  const [exploreData, setExploreData] = useState([]);
  const [liveAnywhereData, setLiveAnywhereData] = useState([]);
  const [discoverData, setDiscoverData] = useState([]);

  const fetchData = async () => {
    const result = await axios(
      "https://run.mocky.io/v3/b82113bc-56b0-42a1-9176-05b50719ae3b",
    );
    setExploreData(result.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchLiveAnywhereData = async () => {
    const result = await axios(
      "https://run.mocky.io/v3/317a029a-a47e-44f5-95d4-5336a6719a3c",
    );
    setLiveAnywhereData(result.data);
  };
  useEffect(() => {
    fetchLiveAnywhereData();
  }, []);

  const fetchDiscoverData = async () => {
    const result = await axios(
      "https://run.mocky.io/v3/c8fc6ef6-7b14-465f-872d-484751917472",
    );
    setDiscoverData(result.data);
  };
  useEffect(() => {
    fetchDiscoverData();
  }, []);

  return (
    <div className="home">
      <Banner />
      <main className="main">
        <section className="explore_nearby">
          <h2>Explore Nearby</h2>
          <div className="small_card_div">
            {exploreData.map((item) => (
              <SmallCard
                key={item.img}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>
        <section className="live_anywhere">
          <h2>Live Anywhere</h2>
          <div className="medium_card_div">
            {liveAnywhereData?.map((item) => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
        <div className="try_hosting_card">
          <LargeCard
            img="https://a0.muscache.com/im/pictures/5b4dc94a-0b4c-4c27-b50f-9c5a5b93c775.jpg?im_w=1440"
            title="Try hosting"
            description="Earn extra income and unlock new opportunities by sharing your space."
            buttonText="Learn more"
          />
        </div>
        <section className="discover">
          <h2>Discover things to do</h2>
          <div className="discover_things">
            {discoverData?.map((item) => (
              <ExploreNearByCard
                key={item.img}
                img={item.img}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
