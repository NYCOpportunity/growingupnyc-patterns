# Growing Up NYC Patterns
The patterns library for [Growing Up NYC](https://growingupnyc.cityofnewyork.us/), the official resource for families in New York City.

## Getting Started
### Installation

```
npm install @nycopportunity/growingup-patterns
```

### Usage
#### Global Stylesheet
To include the entirety of the Growing Up NYC Patterns Library, include the following in the head of your application, replacing `<version>` with the latest release tag:

```
<link href="https://cdn.jsdelivr.net/gh/NYCOpportunity/growingupnyc-patterns@<version>/dist/styles/site-default.css" rel="stylesheet">
```

#### Global Javascript
To include all of the patterns-specific functionality, add the folloiwng before the closing `</body>` in your application, replacing `<version>` with the latest release tag:
```
<script src="https://cdn.jsdelivr.net/gh/nycopportunity/growingupnyc-patterns@<version>/dist/scripts/growingup-nyc.js"></script>
```

#### Individual Patterns
If there are just a few patterns you would like to include in your application, instead of adding the global stylesheet, you can import individual patterns.
###### Sass
The following is an example of including the button pattern from the library into your application:

```
@import '@nycopportunity/growingup-patterns/src/elements/button/button';
```

---
![The Mayor's Office for Economic Opportunity](NYCMOEO_SecondaryBlue256px.png)

[The Mayor's Office for Economic Opportunity](http://nyc.gov/opportunity) (NYC Opportunity) is committed to sharing open source software that we use in our products. Feel free to ask questions and share feedback. 

**Interested in contributing?** See our open positions on [buildwithnyc.github.io](http://buildwithnyc.github.io/). Follow our team on [Github](https://github.com/orgs/CityOfNewYork/teams/nycopportunity) (if you are part of the [@cityofnewyork](https://github.com/CityOfNewYork/) organization) or [browse our work on Github](https://github.com/search?q=nycopportunity).