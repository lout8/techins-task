import fs from "fs";
import matter from "gray-matter";

const getProjectsMetadata = () => {
    const folder = "data/projects/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    const markdownFiles = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`data/projects/${fileName}`, "utf8");
        const matterResults = matter(fileContents);
        return{
            title: matterResults.data.title,
            image: matterResults.data.image,
            tech: matterResults.data.technologies,
            links: matterResults.data.Links,
            date: matterResults.data.date,
            shortD: matterResults.data.shortDescription,
            description: matterResults.data.description,
            slug: fileName.replace(".md", "").toLowerCase(),
        };
    });

    const markdownFilesByDate = markdownFiles.sort(function(a,b){return new Date(b.date) - new Date(a.date);});
    return markdownFilesByDate
}

export default getProjectsMetadata