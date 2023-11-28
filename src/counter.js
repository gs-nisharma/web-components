import { html, define } from "hybrids";

function increaseCount(host) {
  let data = JSON.parse(host.count);
  data.count = data.count + 1;
  host.count = JSON.stringify(data);
}

export default define({
  tag: "simple-counter",
  count: "",

  render: ({ count }) => {
    const data = JSON.parse(count);
    console.log(data.action);
    return html`
      <h1>${data.name}</h1>
      <button onclick="${increaseCount}">Count: ${data.count}</button>
      <button onclick="${data.action}">Open Alert</button>
    `;
  },
});
