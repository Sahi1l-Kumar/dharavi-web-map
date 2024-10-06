import { Container, Typography, Paper, Divider } from "@mui/material";

export default function LivingCondition() {
  return (
    <Container sx={{ mt: -1 }}>
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          STATISTICS
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>
          <strong>Population:</strong> 300,000 to about 1,00,00,000. It is also
          estimated to have a population density of 869,565 people per square
          mile. With a literacy rate of 69%, Dharavi is the most literate slum
          in India.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Language:</strong>The western edge of Dharavi is where its
          original inhabitants, the Kolis, reside. Dharavi consists of various
          language speakers such as Gujarati, Hindi, Marathi, Tamil, Telugu, and
          many more.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Religions:</strong> About 29% of the population of Dharavi is
          Muslim. The Christian population is estimated to be about 6%, while
          the rest are predominantly Hindus with some Buddhists and other
          minority religions. Among the people, about 20% work in animal skin
          production, tanneries, and leather goods. The slum residents are from
          all over India, people who migrated from rural regions of many
          different states. The slum has numerous mosques, temples, and churches
          to serve people of Hindu, Islam, and Christian faiths; with Badi
          Masjid, a mosque, as the oldest religious structure in Dharavi.
        </Typography>
      </Paper>
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Living conditions
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>
          <strong>Housing:</strong> With a population density of about
          277,136/km2 (717,780/sq mi), Dharavi is one of the world’s most
          densely populated places. Residents of Dharavi, like most slum
          dwellers around the world, live in illegal housing units with few
          utilities and are socially excluded. The majority of these are 120 sq
          ft in size and can accommodate four to ten people. People from low
          socio-economic backgrounds can afford to live here because the rentals
          are substantially lower than in other parts of the city. A kitchen,
          storage, and a sleeping section that may also be utilized as a living
          room are all common features of these homes. Residents have become
          unbearably burdened by the slums’ cramped informal settlements and
          fragile constructions, which have been worsened by drastic weather
          variations and Mumbai’s flooding. The situation has gotten to the
          point that it’s uninhabitable. Women also have to live in a dangerous
          atmosphere with minimal privacy.
        </Typography>
        <Typography variant="body1" paragraph>
          Most residents live in illegal housing units that are small, cramped,
          and lack basic utilities. Dharavi roads are clogged with traffic on
          most days and at most hours. Women have to live in a dangerous
          atmosphere with minimal privacy. The entire residential area lacks any
          sort of infrastructure such as roads, public conveniences, and
          toilets.
        </Typography>
        <Typography variant="body1" paragraph>
          The countless number of ramshackle houses placed together in tiny
          spaces increases the risk of a devastating fire breaking out or the
          potential for damage when monsoon season is in full force. Overall,
          there is a lack of privacy and hygiene. And because of the ramshackle
          and unregulated method Dharavi was built, wages are generally very
          low, and working conditions are bad. Geographically, the slum is built
          between two railway lines and can be loud and generally not peaceful.
        </Typography>
      </Paper>
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Sanitation
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>
          The public health in Dharavi has long been a subject of concern. The
          bulk of slum dwellers rely on public restrooms and toilets, which are
          frequently dirty. Water is available from public standpipes strewn
          over the slum. In addition, the few lavatories available are filthy
          and dangerously broken down. Mahim Creek is a local waterway where
          locals routinely urinate and defecate, resulting in the spread of
          infectious diseases. In the slums, there are few wells that produce
          non-potable water. Due to a scarcity of potable water, residents rely
          on creeks and wells for washing clothing and drinking water, leading
          health and hygiene to deteriorate. Increased air pollutants, foul
          odors, and septic conditions have resulted from an open sewer and no
          designated garbage disposal zones.
        </Typography>
        <Typography variant="body1" paragraph>
          With an average of 1 toilet per 500, most residents use alleys or the
          local river as a toilet, even though the river is also a source of
          Dharavi&lsquo;s fresh water. Children play in open sewers, while dead
          rats line the alleyways, and live ones run up and down.
        </Typography>
      </Paper>
    </Container>
  );
}
