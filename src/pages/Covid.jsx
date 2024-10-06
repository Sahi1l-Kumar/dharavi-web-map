import { Container, Typography, Paper, Divider } from "@mui/material";
import equationImage from "../images/equation.png";
import timelineImage from "../images/timeline.png";

export default function Covid() {
  return (
    <Container sx={{ mt: -1 }}>
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          ANALYSIS OF COVID-19 IN DHARAVI (2020)
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>
          The COVID-19 outburst is at its peak in May and the curve gets
          flattened within the next two months. The migration of people from
          other Indian regions to Mumbai for Business and employment
          opportunities leads to a high population in the city. Due to this
          rapid expansion, a large percentage of residents live in the
          city&lsquo;s slums. The estimation of people living in slums is over 9
          million which means a rate of 41.3% as of Greater Mumbai.
        </Typography>
        <Typography variant="body1" paragraph>
          All over the world, Dharavi is recognized as one of the most densely
          populated urban agglomerations. Other than ever-increasing population
          density, the dearth of hygiene and awareness, miniature homes, and low
          income have made living conditions in Dharavi even worse. In these
          conditions, social distancing during the COVID-19 pandemic was very
          difficult.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          DATA ANALYSIS
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>
          This analysis involves the calculation of the Case Fatality Rate (CFR)
          and Case Recovery Rate (CRR) for confirmed cases of COVID-19 diagnosis
          in Mumbai till 31st July 2020 and calculated as per the equations
          given below:
        </Typography>
        <img src={equationImage} style={{ width: "70%", height: "70%" }}></img>
        <Typography variant="body1" paragraph>
          Maharashtra was in first place with 422,118 COVID-19 cases followed by
          Tamil Nadu, Andhra Pradesh, Delhi, and Karnataka the top five states
          with the number of cases more than one lakh. The case fatality rate of
          Maharashtra is nearly 4.3% which is significantly higher than other
          Indian states with large numbers of cases however it was lower than
          the global average rate as of 31st July 2020.
        </Typography>
        <Typography variant="body1" paragraph>
          Mumbai&lsquo;s 60% populations live in Dharavi and they occupy only 6%
          of the total land area of the city. However, the confirmed number of
          COVID-19 cases reported in Dharavi is only 2.2% in comparison to
          Mumbai. The total confirmed patients, recovered, and deaths from the
          COVID-19 timeline of the Dharavi sector up to 31st July 2020.
        </Typography>
        <img src={timelineImage} style={{ width: "70%", height: "70%" }} />
        <Typography variant="body1" paragraph>
          <strong>
            COVID-19 timeline of Dharavi from 21st March 2020 to 31st July 2020.
          </strong>
        </Typography>
        <Typography variant="body1" paragraph>
          The first COVID-19 case and causality from Dharavi were accounted for
          on 1st April 2020 three weeks after Mumbai&lsquo;s first case. In
          April, the COVID-19 cases in Dharavi shot up severely to 491 cases,
          with a 12% growth rate and an 18-day doubling period. In the month of
          May, an average of 48 cases per day was reported in Dharavi with the
          highest record of 94 cases on May 3. Thereafter, practical measures
          were taken by the BMC and other agencies to control the disease, and
          the growth rate declined to 4.3% at the end of May.
        </Typography>
        <Typography variant="body1" paragraph>
          Approximately 7 lakh people were screened and suspected 14,000 were
          tested and 13,000 were placed in quarantine centers. These were
          provided with a free community kitchen. In April, 491 corona virus
          positive cases were reported which gradually increased to 1212 in May.
          Therefore, at the first stage, state authorities directed 2450 health
          workers for mass testing and containment to gradually slow down the
          spread of the virus. Due to clinical management, hard-hitting testing
          was initiated on potential cases, and positive detected were isolated,
          and quarantined at separate COVID centers. Suspected cases were placed
          under different COVID Care centers and marked as CCC 1, who were
          asymptomatic, CCC2 having slight symptoms, and severe cases held under
          Clinical Management. Contact tracing, generating huge quarantine
          services, and separating the susceptible population were major steps,
          which paved the way for controlling the cases in Dharavi.
        </Typography>
        <Typography variant="body1" paragraph>
          More than 70% of people in Dharavi use Community toilets and it was
          the main apprehension in the enhancement of positive cases so to
          reduce this factor, community toilets were sanitized every hour by
          civic authorities. Many migrants in Dharavi were daily wagers and in
          May, nearly 1.5 lakh returned to their homes also further decreases
          the burden on civic bodies. BMC and many NGO&lsquo;s also distributed
          more than 25,000 grocery kits, and food packets for lunch and dinner
          to minimize the movement of people from their homes. Hence, the
          collective efforts of BMC, local clinical management, NGOs, and media
          could be able to curb the coronavirus spread and slow down the cases
          in Dharavi.
        </Typography>
        <Typography variant="body2">
          Reference:{" "}
          <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7832248/#:~:text=In%20the%20April%20month%2C%20the,94%20cases%20on%20May%203.">
            National Library of Medicine
          </a>{" "}
          (Source: Asia&lsquo;s largest urban slum-Dharavi: A global model for
          management of COVID-19, Authors: Jyotsna Kaushal and Pooja Mahajan)
        </Typography>
      </Paper>
    </Container>
  );
}
