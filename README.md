# PhysCapBench website

Official project website for PhysCapBench: A Cross-Domain Benchmark for Physically Grounded Video Captioning.

- Website: https://hfwang2001.github.io/physcapbench-site/
- Benchmark code: https://github.com/hfwang2001/PhysCapBench
- Dataset: https://huggingface.co/datasets/hfwang01/PhysCapBench

## Preview locally

Run `python3 -m http.server 4181 --bind 127.0.0.1` in this directory and open http://127.0.0.1:4181/.

## Update the website

Edit the files in this repository, commit, and push to `main`. GitHub Pages publishes directly from the root of `main`; no build step is required. Keep `.nojekyll` tracked.

`index.html` is the About introduction; `intro.html` is the research page. Resource links are configured in `links.js`; the tech report URL is currently pending. Styles are in `academic.css`, `research.css`, and `story.css`; leaderboard data are in `leaderboard.json` and `leaderboard-third.json`. Keep the complete `assets/` directory when deploying.
