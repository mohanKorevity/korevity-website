export function parseSpecialBlock(type: string, text: string): any {

    switch (type) {

        case "phase": {

            const parts = text.split("-");

            return {
                type: "phase",
                title: parts[0].trim(),
                description: parts.slice(1).join("-").trim(),
            };

        }

        case "timeline": {

            const parts = text.split("-");

            return {
                type: "timeline",
                label: parts[0].trim(),
                description: parts.slice(1).join("-").trim(),
            };

        }

        case "milestone": {

            const parts = text.split(":");

            return {
                type: "milestone",
                title: parts[0].trim(),
                description: parts.slice(1).join(":").trim(),
            };

        }

        default:

            return {
                type,
                text,
            };

    }

}