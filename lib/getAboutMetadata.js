import fs from "fs";
import matter from "gray-matter";

const getAboutMetadata = () => {
    const fileContents = fs.readFileSync(`data/about.md`, "utf8");
    const matterResults = matter(fileContents);
    return {
        image: matterResults.data.image,
        skills: matterResults.data.skills,
        homeD: matterResults.data.homeDescription,
        aboutD: matterResults.data.aboutDescription,
    }

};

export default getAboutMetadata;