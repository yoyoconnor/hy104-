const examples = [
  {
    title: "The Death Song of Lone Wolf (1901)",
    theme: "Indians as impediments to American progress and expansion",
    description:
      "Charles M. Russell’s painting 'The Death Song of Lone Wolf' serves as a poignant symbol of how Native Americans were romanticized in Western art. The image of a solitary Native leader facing his final moments evokes tragedy but distorts historical reality by implying that Indigenous peoples nobly accepted their downfall. In truth, Native resistance to U.S. expansion was active, strategic, and enduring. Tribes like the Comanche, Lakota, and Apache fought fiercely to protect their lands and ways of life through both diplomacy and warfare...",
    image: "https://3.api.artsmia.org/800/3321.jpg"  },
  {
    title: "The Rifleman (1959 TV Show)",
    theme: "The cowboy as an iconic hero",
    description:
      "'The Rifleman' portrays the West as a moral frontier where justice is clearly defined and delivered by the individual—namely Lucas McCain, a widowed father and sharpshooter. The show embraces American values like rugged masculinity, family integrity, and frontier justice. However, this portrayal is steeped in myth...",
    image: "https://m.media-amazon.com/images/M/MV5BMjA2NDUwOTc2MV5BMl5BanBnXkFtZTgwMDk0MjcwMTE@._V1_FMjpg_UX1000_.jpg"  },
  {
    title: "Hold Up (1899)",
    theme: "The West as an outlet for rugged individualism",
    description:
      "Russell’s 'Hold Up' captures the iconic image of a stagecoach robbery, transforming a crime into an adventure. The painting aligns with the myth of the outlaw hero—an individual who operates outside the law in pursuit of freedom...",
    image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/the-hold-up-1899-charles-marion-russell.jpg"  },
  {
    title: "The Virginian (1902 novel)",
    theme: "The cowboy as an iconic hero",
    description:
      "Owen Wister’s 'The Virginian' helped cement the cowboy as the quintessential American hero—noble, reserved, and deeply moral. The novel’s protagonist is the idealized Western man...",
    image: "https://m.media-amazon.com/images/I/61ASOWNB+XL._AC_UF894,1000_QL80_.jpg"  },
  {
    title: "Pale Rider (1985 film)",
    theme: "The cowboy as an iconic hero",
    description:
      "'Pale Rider' reimagines the Western hero as a mysterious preacher who arrives in a mining town to protect workers from exploitation. The film’s protagonist channels both religious and gunfighter tropes...",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFiw_N-CzgmKFVuXmdGxdDoo4Ip239CaYusrwQsaTV2oy6odmZeu3ysj3XvxFLDKyA6Yn0Qw" },
  {
    title: "Questionable Companionship – Remington",
    theme: "Indians as impediments",
    description:
      "This ambiguous painting by Frederic Remington shows a settler and a Native American in uneasy proximity. The composition subtly suggests distrust, reinforcing the stereotype that Indigenous people were threats to Western settlers...",
    image: "https://centerofthewest.org/wp-content/uploads/bbcw-remington/medium/00963.jpg"  },
];

const container = document.getElementById("card-container");

examples.forEach(({ title, theme, description, image }) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${image}" alt="${title}">
    <h2>${title}</h2>
    <div class="theme">Theme: ${theme}</div>
    <p>${description}</p>
  `;
  container.appendChild(card);
});
