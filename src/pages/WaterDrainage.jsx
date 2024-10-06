import { Container, Typography, Paper, Divider } from "@mui/material";

export default function WaterDrainage() {
  return (
    <Container sx={{ mt: -1 }}>
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          WATER SYSTEM
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>
          Along the lanes of Dharavi, we can encounter several pipes on the
          ground surface. Small pipes branch out of bigger pipes, while other
          pipes carry sewage water. Not every house in Dharavi has direct access
          to fresh water. But most have pipes hanging outside. The longer the
          roll of pipe, the further the fresh water tap from the house. Along
          the lines, we also observed open drains that simultaneously carry
          sewage and stormwater. These sewage drains are sometimes contaminated
          by pollutants from small industries and are typically filled up by
          insoluble things like plastic articles.
        </Typography>
      </Paper>
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Brihanmumbai Municipal Corporation (BMC)
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>
          It takes five houses to come together to get a connection for water
          from the BMC. Each house ends up selling around 3500 Rupees for this
          kind of shared connection. When a legal water connection is
          established, BMC workers make sure that openings for a few additional
          connections are made but not given to anyone. If one needs access to
          these spare connections, which are not officially accounted for by the
          BMC, they have to bribe BMC officers. Such connections typically cost
          5000 Rupees each.
        </Typography>
      </Paper>
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Availability of Water
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>
          The water is released by BMC in the mornings for approximately 2 hours
          at varying times in different areas. The pressure of water depends
          upon the proximity of the house to the main water pipe. When several
          small pipes are connected to one big pipe, the person staying closest
          to the big pipe receives water at a high pressure. At times no water
          is released. This uncertainty is a great stress factor for the
          residents. In such instances, either the resident takes help from the
          neighbors or has to buy water from stores or the tankers thus
          incurring an extra expense.
        </Typography>
        <Typography variant="body1" paragraph>
          There is very poor plumbing, and there are open sewers everywhere. The
          pipes carrying clean water usually only run a few hours a day and, on
          top of that, are very fragile. They break easily, which can lead to
          clean water becoming contaminated. Only a small number of people have
          access to clean drinking water; others have to filter water through a
          fine fabric and then boil it to ensure cleanliness. It is not unusual
          to see children playing outside amid toxic sludge lodged in gutters
          and ramshackle infrastructure.
        </Typography>
      </Paper>
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Quality of Water
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>
          The fresh water pipes bring in murky water initially so the residents
          need to let it go and wait for clean water to store it for cleaning
          and drinking purposes. Most residents filter the water using a fine
          fabric and boil the water for drinking purposes. For some residents
          boiling water is an extra expense that they cannot afford.
        </Typography>
        <Typography variant="body1" paragraph>
          It is very interesting to study the intricate water system in the
          user-generated habitat of Dharavi. The complex network of pipes is
          legible to the residents and local plumbers alone. They are the only
          ones who can recognize their particular water connection pipe. There
          is always a sense of insecurity among the residents of Dharavi as they
          do all they can to ensure that their connection is safe and the water
          available. Houses that have no connection rely on their neighbors. The
          people of Dharavi have been very innovative in working with the water
          system and have succeeded in improving their conditions. There were
          times when people had to form queues early in the morning for water.
          And not everybody would make it to the tap before the water stopped.
          Till about a generation ago, wells were present in many parts of
          Dharavi. Only a handful of wells can be found in Dharavi today. The
          availability of piped water and the lack of space have made them
          defunct.
        </Typography>
      </Paper>
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          DRAINAGE
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>
          Due to its location and poor sewage and drainage systems, Dharavi
          particularly becomes vulnerable to floods during the wet season.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Poor drainage:</strong> Open sewers drain into Mahim Creek,
          which is used for defecation and urination by residents.This causes
          the water to become polluted with septic conditions and foul odors.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Limited access to toilets:</strong> There is roughly one
          toilet for every 1,440 people, and many are broken down and unsafe.
          Contaminated water 77% of households in Dharavi receive contaminated
          water, which can contain dissolved solids, nitrates, arsenic, lead,
          and disease-causing bacteria. Flooding During monsoon season, the
          Sion-Mahim-Dharavi areas experience severe flooding.The Brihanmumbai
          Municipal Corporation (BMC) is seeking approval to install a
          stormwater pumping system to address this issue.
        </Typography>
        <Typography variant="body1" paragraph>
          Children play in open sewers, and there is approximately 1 toilet per
          1440 people to share, hence many inhabitants turn to the river as a
          substitute. Dharavi also has poor drainage systems, and the annual
          monsoons bring seasonal diseases. Overall, the health and hygiene
          conditions in Dharavi are perilous. As a result, the life expectancy
          in Dharavi is 7 years lower than the national Indian average, 4000
          cases of various types of disease are reported every day such as
          diarrhea, malaria, and tuberculosis, and the hospitals treat 3000
          patients a day, many of whom are children.
        </Typography>
        <Typography variant="body1" paragraph>
          The drainage crisis has reached a tipping point in Ward 183, which
          comprises New Parsi, Indravilas, Kalekar, Lakda Patil, and Kirloskar
          chawls. The gutters adjacent to these neighborhoods perpetually
          overflow on main roads, while the drainage system is clogged with
          cement and other waste.
        </Typography>
      </Paper>
    </Container>
  );
}
