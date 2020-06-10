module.exports = {
  siteMetadata: {
    title: `Game Design Journey`,
    name: `Team Dados`,
    siteUrl: `http://htw-m1.surge.sh/`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Welcome to our journey on making an awesome game: DADOS test CI 2`,
      maxWidth: 800,
    },
    social: [
      {
        name: `twitter`,
        url: ``,
      },
      {
        name: `github`,
        url: ``,
      },
      {
        name: `instagram`,
        url: ``,
      },
      {
        name: `linkedin`,
        url: ``,
      },
      {
        name: `dribbble`,
        url: ``,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {},
    },
  ],
};
