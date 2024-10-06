import { Container, Divider, Paper, Typography } from "@mui/material";

import agricultureImg from "../layers/Agriculture-1(High-Res Sat).jpg";
import agricultureImg2 from "../layers/Agriculture-2(High-Res Sat).jpg";
import agricultureImg3 from "../layers/Agriculture-3(High-Res Sat).jpg";
import agricultureImg4 from "../layers/Agriculture-4(High-Res Sat).jpg";

import airimg from "../layers/Airports.jpg";

import co from "../layers/Coastline.jpg";
import co2 from "../layers/Coastline 2.jpg";

import da from "../layers/Dharavi Administrative.jpg";

import db from "../layers/Dharavi Births(2015).jpg";

import db1 from "../layers/Dharavi Building Count 2019.jpg";
import db2 from "../layers/Dharavi Building Count 2020.jpg";
import db3 from "../layers/Dharavi Building Count 2021.jpg";
import db4 from "../layers/Dharavi Building Count 2022.jpg";
import db5 from "../layers/Dharavi Building Count 2023.jpg";

import wq from "../layers/Water Quality.jpg";

export default function Layers() {
  return (
    <div>
      <Container sx={{ mt: -1 }}>
        <Paper elevation={0} sx={{ p: 3, mb: 4, bgcolor: "#eaeaea" }}>
          <Typography variant="h4" gutterBottom>
            Layers
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="h5" paragraph>
            <u>
              <strong>Agriculture:</strong>
            </u>
          </Typography>

          <img src={agricultureImg} style={{ width: "80%", height: "80%" }} />
          <img src={agricultureImg2} style={{ width: "80%", height: "80%" }} />
          <img src={agricultureImg3} style={{ width: "80%", height: "80%" }} />
          <img src={agricultureImg4} style={{ width: "80%", height: "80%" }} />

          <Typography variant="h5" paragraph>
            <u>
              <strong>Airports:</strong>
            </u>
          </Typography>
          <img src={airimg} style={{ width: "80%", height: "80%" }} />

          <Typography variant="h5" paragraph>
            <u>
              <strong>Coastline:</strong>
            </u>
          </Typography>
          <img src={co} style={{ width: "80%", height: "80%" }} />
          <img src={co2} style={{ width: "80%", height: "80%" }} />

          <Typography variant="h5" paragraph>
            <u>
              <strong>Dharavi Administrative:</strong>
            </u>
          </Typography>
          <img src={da} style={{ width: "80%", height: "80%" }} />

          <Typography variant="h5" paragraph>
            <u>
              <strong>Births:</strong>
            </u>
          </Typography>
          <img src={db} style={{ width: "80%", height: "80%" }} />
          <Typography variant="h5" paragraph>
            <u>
              <strong>Dharavi Building Counts:</strong>
            </u>
          </Typography>
          <img src={db1} style={{ width: "80%", height: "80%" }} />
          <img src={db2} style={{ width: "80%", height: "80%" }} />
          <img src={db3} style={{ width: "80%", height: "80%" }} />
          <img src={db4} style={{ width: "80%", height: "80%" }} />
          <img src={db5} style={{ width: "80%", height: "80%" }} />
          <Typography variant="h5" paragraph>
            <u>
              <strong>Water Quality:</strong>
            </u>
          </Typography>
          <img src={wq} style={{ width: "80%", height: "80%" }} />
        </Paper>
      </Container>
    </div>
  );
}
