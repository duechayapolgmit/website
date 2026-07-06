import data from "@/data/socials.json";

export const getSocials = (social, type) => {
    let jsonData;
    // switch based on the type of project
    switch (type) {
        case "general":
            jsonData = data.general;
            break;
        default:
            return null;
    }

    return jsonData[social] || null;
}