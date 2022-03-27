const cleanString = (s) => s.trim();

const upperCaseFirstLetter = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const prepareTopics = (topics) =>
  topics.map((t) => cleanString(upperCaseFirstLetter(t))).join(",");

const createRow = ({ name, description, html_url, topics }) =>
  [
    `"${name}"`,
    `"${cleanString(description)}"`,
    `"${html_url}"`,
    `"${prepareTopics(topics)}"`,
    true,
  ].join(",");

const stars = async (user) => {
  const fetch = await import("node-fetch").then((m) => m.default);
  const res = await fetch(`https://api.github.com/users/${user}/starred`);
  const starred = await res.json();
  return starred.reduce(
    (acc, s) => `${acc}\n${createRow(s)}`,
    `Name,Description,Link,Tags,Starred`
  );
};

stars("vogelino").then(console.log);
