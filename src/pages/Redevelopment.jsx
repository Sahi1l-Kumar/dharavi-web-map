import {
  Container,
  Typography,
  Paper,
  Divider,
  List,
  ListItem,
} from "@mui/material";

export default function Redevelopment() {
  return (
    <Container sx={{ mt: -1 }}>
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          What is the Dharavi redevelopment project?
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>
          In 2004, the Maharashtra state government envisaged Dharavi to be
          transformed into a cluster of high-rises with improved urban
          infrastructure. The project included relocating 68,000 people,
          including slum dwellers and those with commercial establishments. The
          state was to provide 300 sq ft houses for free to residents with proof
          that their slum structure was in existence before January 1, 2000, and
          for a price to those who settled in Dharavi between 2000 and 2011.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          History
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>
          In 2004, the Maharashtra government decided to redevelop Dharavi as an
          integrated planned township. It was decided to develop Dharavi by
          using land as a resource to cross-subsidize the cost of development
          through a sale component based on the slum rehabilitation scheme, by
          dividing it into sectors and appointing developers for the same. In
          addition, the government also decided to notify Dharavi as an
          undeveloped area and appoint a special planning authority to oversee
          its development.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Why did the Dharavi redevelopment project fail to take off?
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>
          In November 2018, the then Fadnavis-led government approved a new
          model for the slum’s redevelopment. Although Dubai-based
          infrastructure firm Seclink Technologies Corporation turned out to be
          a successful bidder in January 2019 against Adani, the tender was not
          awarded following the decision to include Railway land in the
          redevelopment project. In October 2020, the Uddhav Thackeray-led
          Maharashtra Vikas Aghadi (MVA) government canceled the tender and
          stated that new tenders would be floated soon. Also, Delay by the
          Centre in transferring the railway land, which was critical to the
          project.
        </Typography>

        <Typography variant="body1" paragraph>
          Dharavi Redevelopment Project Private Limited (DRPPL) has restated its
          commitment to transforming and improving Dharavi. The goal is to
          collaborate with all stakeholders to establish a Dharavi that stands
          out as a model for urban revitalization worldwide. The bids for the
          Dharavi redevelopment project were opened again at the end of November
          2022, and the Adani group emerged as the highest bidder. Gautam Adani
          submitted a bid of Rs 5,069 crore for the project.
        </Typography>
      </Paper>
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Project Goals
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>
          The Maharashtra government&lsquo;s dairy development department will
          pass up a 21-acre site from the Kurla dairy to the Dharavi
          Redevelopment Project and the Slum Rehabilitation Authority. The site
          can be utilized to help rehabilitate slum people who were not
          qualified for free housing under the Dharavi project.
        </Typography>

        <Typography variant="body1" paragraph>
          The project&lsquo;s goals include:
        </Typography>

        <List sx={{ listStyleType: "disc", pl: 4, fontFamily: "sans-serif" }}>
          <ListItem sx={{ display: "list-item" }}>
            Improving quality of life: The project aims to improve the quality
            of life for residents of the slum.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Preserving culture: The project aims to nurture the culture of the
            slum.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Learning from Singapore: The project aims to incorporate learnings
            from Singapore&lsquo;s experience.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Providing free housing: The project will provide free housing to
            residents who were living in Dharavi slums before January 1, 2000.
            The flats will be at least 350 square feet and will have independent
            kitchens and toilets.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Constructing new buildings: The project will construct new
            redeveloped buildings without shifting families to transit or rental
            houses.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Building confidence: The project aims to build confidence among
            residents by providing them with houses in the same place.
          </ListItem>
        </List>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Key Locations on the Map for Redevelopment:
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <List
          sx={{ listStyleType: "decimal", pl: 4, fontFamily: "sans-serif" }}
        >
          <ListItem sx={{ display: "list-item" }}>
            Sector 1 (Near Western Boundary): This area is located near the
            Mahim railway station and Mahim Causeway, on the western side of
            Dharavi. It covers several slum clusters near the Mithi River, which
            will see infrastructural upgrades and housing developments.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Sector 2 (Central Area of Dharavi): This is the core area of
            Dharavi, where many informal industries like pottery, recycling, and
            leatherwork operate. Located near 60 Feet Road (a major arterial
            road in Dharavi), it will see a mix of residential, commercial, and
            industrial developments.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Sector 3 (Southern Part): This area lies near the Sion railway
            station on the central line. It includes slums adjacent to the LBS
            Road and near the Sion-Bandra Link Road, which is a key traffic
            corridor in Mumbai.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Sector 4 (Eastern Boundary, Along Mithi River): This sector
            stretches along the Mithi River on the eastern side and borders the
            Bandra-Kurla Complex (BKC). It includes slums in areas closer to
            BKC, making it a prime location for mixed-use development.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Sector 5 (Northern Area): Located near Dharavi Main Road and Dharavi
            Bus Depot. It will have improved transportation links and public
            amenities, with better connectivity to areas like Kurla.s.
          </ListItem>
        </List>
        <Typography variant="body2">
          Reference:{" "}
          <a href="https://www.business-standard.com/india-news/what-is-the-dharavi-redevelopment-project-here-is-all-you-need-to-know-123072100721_1.html">
            Business-standard
          </a>
        </Typography>
      </Paper>
    </Container>
  );
}
