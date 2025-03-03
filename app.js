async function search() {
  const query = document.getElementById("query").value;
  const apiKey =
    "148174506328-78uc28uqpf3s58r70ktju3j1tlmpk73k.apps.googleusercontent.com"; // Replace with your API key
  const cx =
    "148174506328-78uc28uqpf3s58r70ktju3j1tlmpk73k.apps.googleusercontent.com"; // Replace with your Search Engine ID
  const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${encodeURIComponent(
    query
  )}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    displayResults(data.items);
  } catch (error) {
    console.error("Error:", error);
  }
}

function displayResults(items) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";
  if (!items) {
    resultsDiv.innerHTML = "<p>No results found.</p>";
    return;
  }
  items.forEach((item) => {
    const resultItem = document.createElement("div");
    resultItem.innerHTML = `
            <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
            <p>${item.snippet}</p>
        `;
    resultsDiv.appendChild(resultItem);
  });
}
