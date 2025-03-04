const projects = [
    {
        img: "img/CuGreets.jpg",
        title: "CU Greets you",
        description: "I used surveys and Tableau to analyze feedback on an Information Science project, identifying areas for improvement. Insights from the data led to an app concept helping immigrants in Boulder find local resources."
    },
    {
        img: "img/NBA.jpg",
        title: "NBA Data",
        description: "Utilized Python to analyze the relationship between NBA player salaries, age, and performance. Using data from the NBA API, I identified patterns and visualized trends using pandas and matplotlib."
    },
    {
        img: "img/Twitter.jpg",
        title: "Twitter Analysis",
        description: "I developed a Python function to analyze Twitter data from a CSV file, identifying trends in political discourse. Using pandas, I extracted hashtags, and keywords to determine which politicians discussed issues frequently."
    }, {
        img: "img/TheBeach.jpg",
        title: "ICC in SEA",
        description: "examined how Western tourism shapes Southeast Asian cultures, highlighting power imbalances and cultural commodification. The research explored media influence, over-tourism, and economic dependence, emphasizing the need for a nuanced perspective."
    }, {
        img: "img/notsure.jpg",
        title: "Songs in Excel",
        description: "I used Excel to analyze the correlation between BPM and danceability in popular songs. Through regression analysis and data visualization, I identified trends showing how tempo influences listener engagement."
    }

];

function renderProjects() {
    const container = document.getElementById('projects-container');
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.display = 'flex';
        card.style.flexDirection = 'column';
        card.style.alignItems = 'center';
        card.style.marginBottom = '20px';

        const img = document.createElement('img');
        img.src = project.img;
        img.alt = project.title;
        img.style.width = "300px";
        img.style.marginBottom = "10px";

        const titleContainer = document.createElement('div');
        titleContainer.style.display = 'flex';
        titleContainer.style.justifyContent = 'space-between';
        titleContainer.style.width = '100%';
        titleContainer.style.alignItems = 'center';

        const title = document.createElement('h3');
        title.textContent = project.title;
        title.style.margin = "0px 0";
        title.style.fontSize = "20px";
        title.style.fontWeight = "bold";

        const links = document.createElement('div');
        links.style.display = 'flex';
        links.style.gap = '10px';

        const githubLink = document.createElement('a');
        githubLink.href = project.link;
        githubLink.textContent = "GitHub";
        githubLink.target = "_blank";

        const videoLink = document.createElement('a');
        videoLink.href = project.video;
        videoLink.textContent = "Video";
        videoLink.target = "_blank";

        // links.appendChild(githubLink);
        // links.appendChild(videoLink);

        titleContainer.appendChild(title);
        titleContainer.appendChild(links);

        const description = document.createElement('p');
        description.textContent = project.description;
        description.style.textAlign = 'center';
        description.style.margin = "10px 0";
        description.style.fontSize = "11px";

        card.appendChild(img);
        card.appendChild(titleContainer);
        card.appendChild(description);

        container.appendChild(card);
    });
}

renderProjects();
