const data = {
  api: "0.13",
  space: "Chaostreff Flensburg",
  url: "https://chaostreff-flensburg.de",
  location: {
    address: "Apenrader Str. 49, 24939 Flensburg, Germany",
    lon: 9.42341,
    lat: 54.8045
  },
  contact: {
    twitter: "@chaos_fl",
    email: "mail@chaostreff-flensburg.de",
    issue_email: "mail@chaostreff-flensburg.de"
  },
  issue_report_channels: ["twitter", "email"],
  state: {
    open: false
  },
  feeds: {
    blog: {
      type: "application/rss+xml",
      url: "https://chaostreff-flensburg.de/feed/"
    },
    calendar: {
      type: "ical",
      url:
        "https://calendar.google.com/calendar/ical/asgooqntcboot4uta3jvt30vus%40group.calendar.google.com/public/basic.ics"
    }
  }
};

module.exports = () => {
  return data;
};
