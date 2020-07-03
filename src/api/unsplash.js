import axios from 'axios';

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: 'Client-ID I3OrDI57rJazRaPRHKbp2gPnPCn3f6bZybC5-fEtTXk'
  }
});
