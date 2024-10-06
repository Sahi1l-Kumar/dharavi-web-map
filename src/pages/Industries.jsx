import { Container, Typography, Paper, Grid, Divider } from "@mui/material";
import potteryImage from "../images/pottery.jpg";
import potteryImage2 from "../images/pottery2.jpg";
import leatherImage from "../images/leather.jpg";
import leatherImage2 from "../images/leather2.jpg";
import textileImage from "../images/textile.jpg";
export default function Industries() {
  return (
    <Container sx={{ mt: -1 }}>
      {/* Leather Industry Section */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Leather Industry
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>
          The Dharavi leather industry is rooted in the 1950s. Originating as a
          means of survival for local families, it has grown into a
          multi-million business. Over decades, it has become a crucial
          contributor to Mumbai’s economy, garnering international acclaim for
          its quality and workmanship.
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <img src={leatherImage} style={{ width: "40%", height: "35%" }} />
          <img src={leatherImage2} style={{ width: "35%", height: "35%" }} />
        </div>
        <br />
        <Typography variant="body1" paragraph>
          Beyond the confines of Dharavi, the leather industry has intricately
          woven its economic threads into the fabric of Mumbai’s financial
          landscape.
        </Typography>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          {/* Tanning */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6">
              Tanning: A Prelude to Transformation
            </Typography>
            <Typography variant="body2">
              The art of leather-making in Dharavi commences with raw hides or
              skins, each bearing stories of the animal kingdom. Crucial for
              durability, the tanning process unfolds at government tanning
              plants, ensuring safety and adherence to quality standards. This
              step signifies the transformative journey of the leather market in
              Dharavi, where the raw materials are processed for artistic
              expression, underlining the sustainable practices embraced by the
              industry.
            </Typography>
          </Grid>
          {/* Dyeing */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6">The Dyeing Process</Typography>
            <Typography variant="body2">
              Skillful hands in Dharavi lead the dyeing process, where natural
              and synthetic hues converge on the leather canvas. This is not
              just a change of color; it is a nuanced transformation of texture
              and character. The repeated dyeing rituals narrate patience and
              dedication, revealing the meticulous artistry behind the vibrant
              and unique leather goods that grace the shelves of Dharavi’s
              workshops.
            </Typography>
          </Grid>
          {/* Finishing */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Finishing Touch</Typography>
            <Typography variant="body2">
              The post-dyeing phase is a delicate process of polishing, buffing,
              and treating the leather. Traditional hand tools seamlessly
              coexist with modern equipment, forming a blending that goes beyond
              mere formality. This finishing touch is the culmination of
              centuries-old craftsmanship and precision, adding the final layer
              of beauty and durability to each meticulously crafted piece.
            </Typography>
          </Grid>
          {/* Clustering */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Clustering</Typography>
            <Typography variant="body2">
              Beyond the individual workshops, the Dharavi leather industry is
              an ensemble of collaborative ecosystems, each playing a unique
              role in resilience. More than mere associations, these clusters
              are microcosms of innovation and efficiency. They embody a
              collaborative spirit where resources are shared, and knowledge is
              pooled, resulting in premium, unique leather items that showcase
              frugal innovation and adherence to global standards.
            </Typography>
          </Grid>
          {/* Technology */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Technological Integration</Typography>
            <Typography variant="body2">
              Despite infrastructural challenges, integrating technology into
              the craft is a defining characteristic of Dharavi’s artisans.
              Cutting machines and stitching devices are not just tools; they
              represent the blend of tradition with innovation, ensuring
              efficiency without compromising on the preservation of traditional
              techniques. This dynamic process positions Dharavi’s leather goods
              in local markets and as globally competitive products.
            </Typography>
          </Grid>
          {/* Generational Skill */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Generations of Hard Work</Typography>
            <Typography variant="body2">
              The leather industry in Dharavi transcends being just a job; it is
              a living legacy passed down through generations. Artisans take
              immense pride in perfecting their skills, creating a living
              tapestry that echoes the resilience and creativity embedded in the
              community. This journey goes beyond individual lifetimes,
              showcasing how each generation contributes to the continuous
              evolution of this cherished craft.
            </Typography>
          </Grid>
          {/* Group Efforts */}
          <Grid item xs={12} md={6} sx={{ mb: 2 }}>
            <Typography variant="h6">Group Efforts</Typography>
            <Typography variant="body2">
              Beyond the hum of machinery and the distinctive scent of leather,
              the Dharavi leather industry is a celebration of community. It is
              not just about the final products but about shared identities,
              communal celebrations, and the palpable sense of unity that
              defines the leather-making community. As one navigates the lively
              streets on a guided tour, the real sense of unity and shared
              identity becomes an integral part of the immersive experience,
              enhancing the understanding of the human connections woven into
              every aspect of the craft.
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" paragraph>
          Dharavi, the biggest slum in Mumbai, is a thriving hub of dreams and
          craftsmanship, where every stitch is a testimony to the resilience and
          creativity of the human soul. The essence of entrepreneurship in
          Dharavi’s leather industry lies in its adaptability – the ability to
          innovate and thrive despite challenges. The preservation of
          traditional techniques, such as dyeing and hand-stitching, alongside
          the seamless integration of modern technologies, reflects a resilience
          that has turned constraints into opportunities. This adaptability is a
          pillar of strength that ensures the continuous evolution and growth of
          the industry.
        </Typography>
        <Typography variant="body2">
          Reference:{" "}
          <a href="https://magicalmumbaitours.com/a-complete-guide-to-dharavi-leather-industry-in-mumbai/">
            Magical Mumbai Tours
          </a>
        </Typography>
      </Paper>

      {/* Textile Industry Section */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Textile Industry
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>
          Dharavi’s garments business, unlike the leather trade, seems to have
          remained immune to the ups and downs of the export trade because it
          caters mainly to the local market.
        </Typography>
        <img src={textileImage} style={{ width: "35%", height: "35%" }} />
        <Typography variant="body1" paragraph>
          This is your typical souk, your Kapda bazaar that can be found
          anywhere in India. Daylight never reaches the lane separating the
          shops. All the shops have tube lights, fans, and linoleum floors and
          some, have fancy shelves packed with shirts. There are few other
          garment exporters in Dharavi but there are hundreds who take on job
          work for exporters. They are around every corner in the rebuilt Chamda
          Bazaar or Bageecha area which was razed to the ground during the
          1992-93 riots. However, the majority of garment manufacturers in
          Dharavi cater to the local and national market. A small workshop turns
          out 500 to 600 shirts a day. Workers are paid on a piece-rate basis
          and can earn up to Rs 150 per day. They are mostly from Bihar and some
          from Tamil Nadu. Locals think there must be at least 500 workshop
          owners getting job work done in Dharavi and another 100 doing hand
          embroidery called zardozi and machine embroidery.
        </Typography>
        <Typography variant="body1" paragraph>
          The zardozi work requires great skill and is usually done by young
          boys from Bengal and Bihar. You find them sitting on the floor with a
          piece of cloth tautly stretched before them on a rack, doing intricate
          embroidery with gold and silver threads. It is painstaking work, often
          done in a bad light. As with other trades, the workmen eat, sleep, and
          work in the same space.
        </Typography>
        <Typography variant="body1" paragraph>
          You also come across men busy doing machine embroidery. It appears
          that the majority of men in this trade are from Bengal. The constant
          and virtually nonstop whirring of machines can usually lead you to one
          of these workshops. The machine embroidery is mostly done for the
          local market and for exports to the Gulf.
        </Typography>
        <Typography variant="body2">
          Reference:{" "}
          <a href="https://dharavimarket.com/blogs/news/garment-industry?srsltid=AfmBOoq-O1whI02x5Q2zsk45mxhd7GXnd-2Ff-POLo4qvESAbcWtN03F">
            Dharavi Market
          </a>{" "}
          (Source: Compiled from Kalpana Sharma’s book ‘Rediscovering Dharavi’,
          Penguin Books, 2000)
        </Typography>
      </Paper>

      {/* Pottery Industry Section */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Pottery Industry
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>
          The pottery industry in Dharavi began in the 1930s when Gujarati
          potters moved to the area. In India, potters make up a whole caste,
          better known as Kumbhar. The word stems from the Sanskrit words Kumbh,
          meaning earthen pot’, and kumbhakar translates to ‘earthen pot maker.
          The Kumbhars are the very first settlers of the slum and are a
          significant part of the population. The word Kumbharwada is formed by
          the combination of two words, kumbhars potters and wadi which means
          colony. There are approximately 500 potters’ families living in the
          colony, including permanent and temporary residents.
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <img src={potteryImage} style={{ width: "35%", height: "35%" }} />
          <img src={potteryImage2} style={{ width: "35%", height: "35%" }} />
        </div>
        <br />
        <Typography variant="body1" paragraph>
          Potters in the Dharavi slums of Mumbai use handcrafted techniques to
          make pottery. The potters get ray clay from Thane, a district close to
          Central Mumbai, and also from far-off places like Bhuj and Kutch,
          located in the state of Gujarat. This rich craft of India has been
          passed on to six generations of slum dwellers; some today are the
          seventh generation that has been practicing pottery to make a living.
        </Typography>
        <Typography variant="body1" paragraph>
          Clay is used with indigenous and traditional methods to make
          eco-friendly pottery items. The clay is molded in the desired shape by
          hand or on the potter’s wheel. The clay is kneaded with the feet and
          put in the pit for 15-20 days to melt. The kneading process is
          followed by wedging, which is done by hand to remove bubbles from the
          clay before shaping. After shaping, the pottery is left to dry in the
          sun. Finally, the pottery is fired in a kiln, which hardens and
          strengthens the clay, resulting in a long-lasting and durable product.
        </Typography>
        <Typography variant="body1" paragraph>
          Dharavi pottery is known for its distinct styles and designs, which
          are influenced by local culture and traditions. Numerous pottery
          products have intricate patterns, designs, and colors and are made
          with the dual purposes of function and decorative elements in mind.
          Based on seasonal needs, clay artists create items. In two to three
          months, they can produce between 25,000 and 30,000 pots for sale.
        </Typography>
        <Typography variant="body1" paragraph>
          To address modern technology’s challenges to potters, efforts have
          been made to promote the pottery industry in the Dharavi slum,
          creating opportunities for potters to access modern technology and
          equipment. To increase their productivity and product quality, some
          potters have begun to use electric pottery wheels and other
          contemporary tools.
        </Typography>
        <Typography variant="body2">
          Reference:{" "}
          <a href="https://magicalmumbaitours.com/dharavi-slum-in-mumbai/#:~:text=The%20traditional%20pottery%20industry%20of%20the%20Dharavi%20slum&text=The%20word%20Kumbharwada%20is%20formed,including%20permanent%20and%20temporary%20residents.">
            Magical Mumbai Tours
          </a>
        </Typography>
      </Paper>

      {/* Recycling Industry Section */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Recycling Industry
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>
          Dharavi has connections and relationships with most operations and
          restaurants around the city to send them their waste to be dealt with.
          A little like a recycling mafia chain. 60% of Mumbai’s plastic waste
          is recycled at Dharavi. Pretty impressive compared to Singapore’s mere
          19% and that’s with proper government recycling initiatives.
          Unregulated, ground-up initiatives don’t seem that bad now, do they?
          Dharavi’s plastic recycling industry alone employs almost 10,000 to
          12,000 people.
        </Typography>
        <Typography variant="body1" paragraph>
          It primarily focuses on recycling plastic, paper, and metal waste.
          Plastic waste is collected from various sources, sorted, cleaned, and
          processed into reusable materials. These recycled plastics are then
          transformed into new products, such as bags, containers, and other
          plastic items, significantly reducing the need for virgin plastic
          production.
        </Typography>
        <Typography variant="body1" paragraph>
          The paper recycling process involves collecting old newspapers,
          cardboard, and other paper waste, which are then sorted, pulped, and
          reprocessed into new paper products. This not only reduces
          deforestation but also saves energy and resources.
        </Typography>
        <Typography variant="body1" paragraph>
          In addition to plastic and paper, metal waste is also collected and
          recycled. Old cans, scrap metal, and other metal items are melted down
          and repurposed into new products, further contributing to a circular
          economy.
        </Typography>
        <Typography variant="body1" paragraph>
          The recycling industry in Dharavi not only provides livelihoods to
          many families but also helps in reducing pollution and conserving
          resources, making it a crucial part of the community&lsquo;s economic
          and environmental landscape.
        </Typography>
        <Typography variant="body1" paragraph>
          They even have a unique relationship with the paint shop owners around
          Mumbai. Collecting all used and thrown-away paint cans (the big ones
          we see at a hardware shop or at a Nippon paint shop), they clean the
          can inside and out. It’s then repainted to look brand new and sold
          back to the paint shops for them to reuse. This process can be done
          about 4 times before the metal is too weak and then it’s thrown into
          the regular metal recycling process.
        </Typography>
        <Typography variant="body2">
          Reference:{" "}
          <a href="https://www.linkedin.com/pulse/dharavi-asias-largest-slum-indias-very-own-recycling-mascarenhas/">
            LinkedIn
          </a>{" "}
          (Credit: Trisha Mascerenhas)
        </Typography>
      </Paper>
    </Container>
  );
}
