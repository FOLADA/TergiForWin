// src/NatsarmoebaniPage/Nats.tsx
import React from 'react';
import "../NatsarmoebaniPage/Nats.css";
import { Link } from 'react-router-dom';

interface NatsProps {
  image: string;
  title: string;
}

const NatsBox: React.FC<NatsProps> = ({ title }) => {

  return (
    <div className="nats-box">
      <h3 className="nats-box-title"><strong>{title}</strong></h3>
    </div>
  );
};
const RedaqtirebaPage: React.FC = () => (
  <>
    <div className="nats-h1-div"><h1 className="nats-h1">ტექსტის რედაქტირების სავარჯიშოები</h1></div>
    <div className="natsarmoebani-div">
     <Link to={"/რედაქტირება/ტესტი1"}>
      <NatsBox image="vefxistyaosani.png" title="ტექსტის რედაქტირების ტესტი №1" />
      <NatsBox image="vefxistyaosani.png" title="ტექსტის რედაქტირების ტესტი №2" />
      <NatsBox image="vefxistyaosani.png" title="ტექსტის რედაქტირების ტესტი №3" />
     </Link>
    </div>
  </>
);

export default RedaqtirebaPage;