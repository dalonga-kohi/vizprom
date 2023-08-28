/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `VizProm`,
    siteUrl: `https://www.vizprom.pl`,
    description: "Agencja Marketingowa Vizprom. Zajmujemy się zarządzaniem kontami w mediach społecznościowych i wykorzystujemy nowoczesne kanały przekazu aby promować twoją markę.",
    keywords: "Marketing Online, Agencja, Vizprom, Promocja firmy, Tworzenie Stron"
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, {
    resolve: "gatsby-plugin-google-gtag",
    options: {
      "trackingIds": [
        "AW-11293587197", // Google Ads / Adwords / AW
      ],
      gtagConfig: {
        //optimize_id: "OPT_CONTAINER_ID",
        anonymize_ip: true,
        cookie_expires: 0,
      },
      pluginConfig: {
        head: false,
        respectDNT: true,
        exclude: ["/preview/**", ],
        // Defaults to https://www.googletagmanager.com
        //origin: "YOUR_SELF_HOSTED_ORIGIN",
        // Delays processing pageview events on route update (in milliseconds)
        delayOnRouteUpdate: 0,
      }
    }
  },{
    resolve: `gatsby-plugin-facebook-pixel`,
    options: {
      pixelId: "2531707206983774",
    },
  },
  "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};