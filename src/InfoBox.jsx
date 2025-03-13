import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

function InfoBox({info}) {
  const IMG_URL =
    "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const HOT_URL = "https://images.unsplash.com/photo-1604228741406-3faa38f4907a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3Vubnl8ZW58MHx8MHx8fDA%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1475664658589-2b8a04893db5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHdpbnRlciUyMHNlYXNvbiUyMHRyZWV8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://plus.unsplash.com/premium_photo-1671406233410-9727cf249910?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFpbiUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D";
    return (
    <div className="InfoBox">
      <div className="card">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={info.humidity > 80? RAIN_URL : info.temp > 10 ? HOT_URL : COLD_URL}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <b>{(info.city).toUpperCase()}</b>
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <p>Temperture = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <i>{info.description}</i> and feels
                like {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default InfoBox;
