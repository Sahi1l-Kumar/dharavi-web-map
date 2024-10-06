import {
  Container,
  Typography,
  Paper,
  Divider,
  List,
  ListItem,
} from "@mui/material";

export default function Diseases() {
  return (
    <Container sx={{ mt: -1 }}>
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Diseases
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>
          Dharavi, one of the largest slums in Mumbai, India, faces various
          public health challenges due to its high population density,
          inadequate sanitation, and poor living conditions.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Waterborne Diseases:
        </Typography>
        <List sx={{ listStyleType: "disc", pl: 4, fontFamily: "sans-serif" }}>
          <ListItem sx={{ display: "list-item" }}>
            <strong>Cholera:</strong> Spread through contaminated water, causing
            severe diarrhea and dehydration.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <strong>Typhoid:</strong> Caused by ingesting food or water
            contaminated with Salmonella typhi.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <strong>Diarrheal Diseases:</strong> Often related to poor
            sanitation and contaminated water.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <strong>Hepatitis A and E:</strong> Spread through consumption of
            contaminated food and water, leading to liver inflammation.
          </ListItem>
        </List>

        <Typography variant="h6" gutterBottom>
          Vector-borne Diseases:
        </Typography>
        <List sx={{ listStyleType: "disc", pl: 4, fontFamily: "sans-serif" }}>
          <ListItem sx={{ display: "list-item" }}>
            <strong>Dengue:</strong> Spread by Aedes mosquitoes, especially
            during the monsoon season.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <strong>Malaria:</strong> Spread by Anopheles mosquitoes, prevalent
            in areas with stagnant water.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <strong>Chikungunya:</strong> Another mosquito-borne disease similar
            to dengue.
          </ListItem>
        </List>

        <Typography variant="h6" gutterBottom>
          Respiratory Diseases:
        </Typography>
        <List sx={{ listStyleType: "disc", pl: 4, fontFamily: "sans-serif" }}>
          <ListItem sx={{ display: "list-item" }}>
            <strong>Tuberculosis (TB):</strong> Dharavi has high rates of TB due
            to overcrowding and poor ventilation.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <strong>Pneumonia:</strong> Common in densely populated areas,
            especially among children and the elderly.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <strong>Acute Respiratory Infections (ARI):</strong> Caused by a
            variety of viruses and bacteria, often worsened by poor air quality.
          </ListItem>
        </List>

        <Typography variant="h6" gutterBottom>
          Skin Infections:
        </Typography>
        <List sx={{ listStyleType: "disc", pl: 4, fontFamily: "sans-serif" }}>
          <ListItem sx={{ display: "list-item" }}>
            <strong>Scabies:</strong> A contagious skin infection caused by
            mites, often spread through overcrowded living conditions.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <strong>Fungal Infections:</strong> Due to humid conditions and poor
            hygiene, fungal infections of the skin are common.
          </ListItem>
        </List>
      </Paper>
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Epidemics
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>
          The Dharavi Slum has been attacked by many different diseases that
          have caused a loss of lives. The slum experienced its first plague
          back in 1896 when it severely suffered and almost lost half of its
          population. Slowly, more and more epidemics continued to critically
          affect the Dharavi Slum with high death rates; a few include typhoid,
          polio, and cholera. Patients with all the diseases were usually only
          brought to hospitals too late, which put them in critical care
          conditions. The coronavirus pandemic had indeed reached the Dharavi
          Slum and the first case was announced in April 2020. So far, there are
          about 900 cases, however, it is very possible for that number to be
          grossly underestimated due to the slum’s population and population
          density.
        </Typography>
      </Paper>
    </Container>
  );
}
