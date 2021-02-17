  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "build:style": "tailwind build src/index.css -o src/tailwind.css",
    "eject": "react-scripts eject"
  },

  call json-server : 
  >json-server --watch ./src/tutorials/rawdata/moviedb.json --port 3001