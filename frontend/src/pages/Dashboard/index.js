import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import home from "../../assets/home.ico";

import "./styles.css";

export default function Dashboard() {
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem("user");
            const response = await api.get("/dashboard", {
                headers: { user_id }
            });

            setSpots(response.data);
        }

        loadSpots();
    }, []);

    //mostrando os spots na tela
    return (
        <>
            <ul className="spot-list">
                {spots.map(spot => (
                    <li key={spot._id}>
                        <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
                        <strong>{spot.company}</strong><br />
                        <span>{spot.price ? `R$${spot.price}/dia` : "GRATUITO"}</span>
                    </li>
                ))}
            </ul>

            <Link to="/new">
                <button className="btn">Cadastrar novo Spot</button>
            </Link>
            <br />
            <br />

            <Link to="/">
                <span >
                    <img className="btnIcon" src={home} alt="Select img" />
                </span>
            </Link>
        </>
    )
}