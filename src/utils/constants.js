export const logo='https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png';
  
export const UserAvatar="https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049569.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1705622400&semt=ais";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_KEY,
    }
  };
  
export const IMG_CDN_URL="https://image.tmdb.org/t/p/w400"

export const BG_URL="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_small.jpg";


export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY;