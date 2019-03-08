# Fullscreen Video Player

Very simple HTML page for autoplaying a fullscreen video with optional audio, and redirecting afterwards (or through
user interaction).

Works well on mobile and desktop alike.

## Usage

1.  Install dependencies: `npm install`
2.  Create a config file like `config.example.json`. All values are required.
    * The config file specifies paths to .mp4 and .webm versions of the video. Always provide both for maximum
       compatibility.
    * The specified video paths should be relative to where the generated HTML file will be hosted.
3.  Run `build.js` with the path to the config file as argument, or none if the file is named `config.json`.
4.  The generated page will be written to stdout. Redirect output as needed,
    e.g. `./build.js some_config.json >index.html`.