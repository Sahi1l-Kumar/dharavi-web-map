import { Container, Divider, Paper, Typography } from "@mui/material";
import hom1 from "../layers/Moisture_index.jpg";
import hom2 from "../layers/NDVI.jpg";
import hom3 from "../layers/False_color_(urban).jpg";
import hom4 from "../layers/NDWI.jpg";

import mes1 from "../layers/SWIR.jpg";
import mes2 from "../layers/Scene_classification_map.jpg";
import mes3 from "../layers/True_color.jpg";
import mes4 from "../layers/False_color.jpg";
import mes5 from "../layers/Highlight_Optimized_Natural_Color.jpg";

import agricultureImg from "../layers/EVI.jpg";
import agricultureImg2 from "../layers/Barren_Soil.jpg";
import agricultureImg3 from "../layers/Moisture_Stress.jpg";
import agricultureImg4 from "../layers/Agriculture.jpg";
import agricultureImg5 from "../layers/SAVI.jpg";

import cdt from "../layers/True_color_-_pansharpened.jpg";

export default function Layers() {
  return (
    <div>
      <Container sx={{ mt: -1 }}>
        <Paper elevation={0} sx={{ p: 3, mb: 4, bgcolor: "#eaeaea" }}>
          <Typography variant="h4" gutterBottom>
            Satellite Images
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="h5" paragraph>
            <u>
              <strong>Highlights of the Month:</strong>
            </u>
          </Typography>
          <Typography variant="h6" paragraph>
            <strong>
              Moisture Index (Normal Difference Moisture Index (NDMI))
            </strong>
          </Typography>
          <img src={hom1} style={{ width: "80%", height: "80%" }} />
          <Typography variant="body1" paragraph>
            NDMI is used to determine vegetation water content and monitor
            droughts. The value range of NDMI is -1 to 1. Negative values of
            NDMI (values approaching -1) correspond to barren soil. Values
            around zero (-0.2 to 0.4) correspond to water stress. High, positive
            values represent high canopy without water stress ( approximately
            0.4 to 1).
          </Typography>
          <Typography variant="h6" paragraph>
            <strong>Normalized difference Vegetation Index (NDVI)</strong>
          </Typography>
          <img src={hom2} style={{ width: "80%", height: "80%" }} />
          <Typography variant="body1" paragraph>
            The normalized difference vegetation index is a simple, but
            effective index for quantifying green vegetation. It is a measure of
            the state of vegetation health based on how plants reflect light at
            certain wavelengths. The value range of the NDVI is -1 to 1.
            Negative values of NDVI (values approaching -1) correspond to water.
            Values close to zero (-0.1 to 0.1) generally correspond to barren
            areas of rock, sand, or snow. Low, positive values represent shrub
            and grassland (approximately 0.2 to 0.4), while high values indicate
            temperate and tropical rainforests (values approaching 1).
          </Typography>
          <Typography variant="h6" paragraph>
            <strong>False Color Urban composite</strong>
          </Typography>
          <img src={hom3} style={{ width: "80%", height: "80%" }} />
          <Typography variant="body1" paragraph>
            This composite is used to visualize urbanized areas more clearly.
            Vegetation is visible in shades of green, while urbanized areas are
            represented by white, grey, or purple. Soils, sand, and minerals are
            shown in a variety of colors. Snow and ice appear as dark blue, and
            water as black or blue. Flooded areas are very dark blue and almost
            black. The composite is useful for detecting wildfires and calderas
            of volcanoes, as they are displayed in shades of red and yellow.
          </Typography>
          <Typography variant="h6" paragraph>
            <strong>Normalized Difference Water Index (NDWI)</strong>
          </Typography>
          <img src={hom4} style={{ width: "80%", height: "80%" }} />
          <Typography variant="body1" paragraph>
            The normalized difference water index is most appropriate for water
            body mapping. Values of water bodies are larger than 0.5. Vegetation
            has smaller values. Built-up features have positive values between
            zero and 0.2.
          </Typography>
          <Typography variant="h5" paragraph>
            <u>
              <strong>Monitoring Earth From Space :</strong>
            </u>
          </Typography>
          <Typography variant="h6" paragraph>
            <strong>Short Wave Infrared Composite (SWIR)</strong>
          </Typography>
          <img src={mes1} style={{ width: "80%", height: "80%" }} />
          <Typography variant="body1" paragraph>
            Short wave infrared (SWIR) measurements can help scientists estimate
            how much water is present in plants and soil, as water absorbs SWIR
            wavelengths. Short wave infrared bands (a band is a region of the
            electromagnetic spectrum; a satellite sensor can image Earth in
            different bands) are also useful for distinguishing between cloud
            types (water clouds versus ice clouds), snow, and ice, all of which
            appear white in visible light. In this composite vegetation appears
            in shades of green, soils and built-up areas are in various shades
            of brown, and water appears black. Newly burned land reflects
            strongly in SWIR bands, making them valuable for mapping fire
            damages. Each rock type reflects shortwave infrared light
            differently, making it possible to map out geology by comparing
            reflected SWIR light.
          </Typography>
          <Typography variant="h6" paragraph>
            <strong>Scene Classification Map</strong>
          </Typography>
          <img src={mes2} style={{ width: "80%", height: "80%" }} />
          <Typography variant="body1" paragraph>
            Scene classification was developed to distinguish between cloudy
            pixels, clear pixels and water pixels of Sentinel-2 data and is a
            result of ESA&lsquo;s Scene classification algorithm. Twelve
            different classifications are provided including classes of clouds,
            vegetation, soils/desert, water and snow. It does not constitute a
            land cover classification map in a strict sense.
          </Typography>
          <Typography variant="h6" paragraph>
            <strong>True Color Composite</strong>
          </Typography>
          <img src={mes3} style={{ width: "80%", height: "80%" }} />
          <Typography variant="body1" paragraph>
            Sensors carried by satellites can image Earth in different regions
            of the electromagnetic spectrum. Each region in the spectrum is
            referred to as a band. Sentinel-2 has 13 bands. True color composite
            uses visible light bands red, green, and blue in the corresponding
            red, green, and blue color channels, resulting in a natural colored
            product, that is a good representation of the Earth as humans would
            see it naturally.
          </Typography>
          <Typography variant="h6" paragraph>
            <strong>False Color Composite</strong>
          </Typography>
          <img src={mes4} style={{ width: "80%", height: "80%" }} />
          <Typography variant="body1" paragraph>
            A false-color composite uses at least one non-visible wavelength to
            image Earth. The false color composite using near-infrared, red, and
            green bands is very popular (a band is a region of the
            electromagnetic spectrum; a satellite sensor can image Earth in
            different bands). The false color composite is most commonly used to
            assess plant density and health since plants reflect near-infrared
            and green light, while they absorb red. Cities and exposed ground
            are grey or tan, and water appears blue or black.
          </Typography>
          <Typography variant="h6" paragraph>
            <strong>Highlight Optimized Natural Color</strong>
          </Typography>
          <img src={mes5} style={{ width: "80%", height: "80%" }} />
          <Typography variant="body1" paragraph>
            This script aims to display the Earth in beautiful natural color
            images. It uses highlight optimization to avoid burnt-out pixels and
            to even out the exposure.
          </Typography>
          <Typography variant="h5" paragraph>
            <u>
              <strong>Agriculture:</strong>
            </u>
          </Typography>
          <Typography variant="h6" paragraph>
            <strong>Enhanced Vegetation Index (EVI)</strong>
          </Typography>
          <img src={agricultureImg} style={{ width: "80%", height: "80%" }} />
          <Typography variant="body1" paragraph>
            The enhanced vegetation index (EVI) is an &apos;optimized&apos;
            vegetation index as it corrects for soil background signals and
            atmospheric influences. It is very useful in areas of dense canopy
            cover. The range of values for EVI is -1 to 1, with healthy
            vegetation generally around 0.20 to 0.80.
          </Typography>
          <Typography variant="h6" paragraph>
            <strong>Barren Soil Visualization</strong>
          </Typography>
          <img src={agricultureImg2} style={{ width: "80%", height: "80%" }} />
          <Typography variant="body1" paragraph>
            The Barren Soil Visualization can be useful for soil mapping, to
            investigate the location of landslides or the extent of erosion in
            non-vegetated areas. This visualization shows all vegetation in
            green and the barren ground in red. The water appears black.
          </Typography>
          <Typography variant="h6" paragraph>
            <strong>NDMI For Moisture Stress</strong>
          </Typography>
          <img src={agricultureImg3} style={{ width: "80%", height: "80%" }} />
          <Typography variant="body1" paragraph>
            The Normalized Difference Moisture Index (NDMI) for moisture stress
            can be used to detect irrigation. For all the index values above 0,
            knowing the land use and land cover, it is possible to determine
            whether irrigation has taken place. Knowing the type of crop grown
            (e.g. citrus crops), it is possible to identify whether irrigation
            is effective or not during the crucial growing summer season, as
            well as find out if some parts of the farm are being under or
            over-irrigated.
          </Typography>
          <Typography variant="h6" paragraph>
            <strong>Agriculture Composite</strong>
          </Typography>
          <img src={agricultureImg4} style={{ width: "80%", height: "80%" }} />
          <Typography variant="body1" paragraph>
            This composite uses short-wave infrared, near-infrared, and blue
            bands to monitor crop health (a band is a region of the
            electromagnetic spectrum; a satellite sensor can image Earth in
            different bands). Both short-wave and near-infrared bands are
            particularly good at highlighting dense vegetation, which appears
            dark green in the composite. Crops appear in a vibrant green and
            bare earth appears magenta.
          </Typography>
          <Typography variant="h6" paragraph>
            <strong>Soil Adjusted Vegetation Index (SAVI)</strong>
          </Typography>
          <img src={agricultureImg5} style={{ width: "80%", height: "80%" }} />
          <Typography variant="body1" paragraph>
            The Soil Adjusted Vegetation Index is similar to the Normalized
            Difference Vegetation Index (NDVI) but is used in areas where
            vegetative cover is low (&lt; 40%). The index is a transformation
            technique that minimizes soil brightness influences from spectral
            vegetation indices involving red and near-infrared (NIR)
            wavelengths. The index is helpful when analyzing young crops, arid
            regions with sparse vegetation, and exposed soil surfaces.
          </Typography>
          <Typography variant="h5" paragraph>
            <u>
              <strong>Change Detection through Time:</strong>
            </u>
          </Typography>
          <Typography variant="h6" paragraph>
            <strong>Landsat 8-9 L1 (Pan-sharpened True Color)</strong>
          </Typography>
          <img src={cdt} style={{ width: "80%", height: "80%" }} />
          <Typography variant="body1" paragraph>
            The pan-sharpened true color composite is done by using the usual
            true color data (red, green, and blue (RGB)) and enhancing them by
            using the panchromatic band 8, or pan band (a band is a region of
            the electromagnetic spectrum; a satellite sensor can image Earth in
            different bands). An image from the pan band is similar to
            black-and-white film: it combines light from the red, green, and
            blue parts of the spectrum into a single measure of overall visible
            reflectance. Pan-sharpened images have 4x the resolution of the
            usual true color composite, greatly enhancing the usefulness of
            Landsat imagery.
          </Typography>
        </Paper>
      </Container>
    </div>
  );
}
