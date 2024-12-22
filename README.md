![GitHub last commit](https://img.shields.io/github/last-commit/jwds1178/Control-D) ![GitHub repo size](https://img.shields.io/github/repo-size/jwds1178/Control-D) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fjwds1178%2FControl-D&count_bg=%23754400&title_bg=%235F5F5F&icon=awesomelists.svg&icon_color=%23E7E7E7&title=visitors&edge_flat=false)](https://github.com/jwds1178/Control-D)

# Control D
## [Folders](Folders/)
These JSON files can be uploaded to Control D as custom rule folders.
- [Redirect to time.google.com](Folders/Redirect-to-time.google.com.json)
  - [Google Public NTP](https://developers.google.com/time) serves [leap-smeared time](https://developers.google.com/time/smear).

## [Cloudflare Workers](Cloudflare-Workers/)
Paste the code from the JS file into a worker at Cloudflare.
- [DNS over HTTPS](Cloudflare-Workers/DNS-over-HTTPS.js)
  - Using a Cloudflare worker with a custom domain(s), you can potentially circumvent network blocks preventing you from connecting directly to Control D.
  - Change the hostnames and resolver paths, add/remove IF statements, etc. to suit your needs.  For example, on your device, you'd configure `https://resolver2.example.net` as your DoH resolver.
  - The `*.example.net` hostnames are the route(s) you've configured at Cloudflare for the worker.  The `doh` variable within a given IF statement is the Control D resolver you want a particular `example.net` hostname associated with.
  - The caveat with this is that Control D will see the queries as coming from whatever edge server Cloudflare sees fit to use at the moment.  Given that, if you rely on ECS, it will be based upon the Control D resolver that Cloudflare happens to connect to based on which of their edge servers is handling your worker request at the time.
