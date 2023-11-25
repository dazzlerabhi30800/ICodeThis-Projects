const leaderBoard = document.querySelector(".leaderboard");
const leaderboardData = [
  {
    img: "https://randomuser.me/api/portraits/men/46.jpg",
    name: "paul j. vanauken",
    votes: "22.343",
    recommendation: "18.220",
    earnings: "54.000",
  },

  {
    img: "https://randomuser.me/api/portraits/women/14.jpg",
    name: "bonnie rivera",
    votes: "21.804",
    recommendation: "16.490",
    earnings: "42.000",
  },

  {
    img: "https://randomuser.me/api/portraits/men/47.jpg",
    name: "thomas patrick",
    votes: "20.201",
    recommendation: "11.003",
    earnings: "35.000",
  },

  {
    img: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "james hardin",
    votes: "18.654",
    recommendation: "10.054",
    earnings: "14.000",
  },
  {
    img: "https://randomuser.me/api/portraits/women/59.jpg",
    name: "melba j. walker",
    votes: "15.403",
    recommendation: "8.478",
    earnings: "9.000",
  },
];

const tableHeader = `
<tr class="bg-teal-500" >
<th class="p-2 border-r border-gray-100/30">Rank</th>
<th class="p-2 border-r border-gray-100/30">Player</th>
<th class="p-2 border-r border-gray-100/30">Votes</th>
<th class="p-2">Earnings</th>
</ >
`;

const leaderData = leaderboardData
  .map((data, index) => {
    return `
        <tr class="h-[120px]">
            <td class="p-4 border-r border-gray-200">
              <span class="text-2xl mr-2 font-semibold">${index + 1}</span>
              <img
                class="inline-block w-[70px] h-[70px] object-cover rounded-md"
                src=${data.img} 
                alt=""
              />
            </td>
            <td
              class="p-6 text-2xl text-center whitespace-nowrap border-r border-gray-200 uppercase"
            >
            ${data.name}
            </td>
            <td class="p-8 text-center border-r border-gray-200">
              <p class="text-2xl font-bold">${data.votes}</p>
              <span class="text-xs">${
                data.recommendation
              } recommendations</span>
            </td>
            <td class="font-bold text-center text-2xl p-6">$${
              data.earnings
            }</td>
          </tr>
    `;
  })
  .join("");

// leaderBoard.insertAdjacentHTML('afterend', leaderData);
leaderBoard.innerHTML = `${tableHeader} ${leaderData}`;
