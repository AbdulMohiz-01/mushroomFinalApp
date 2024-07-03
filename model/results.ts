export const class_labels = ['Conditionally Edible', 'Deadly', 'Edible', 'Poisonous'];

export interface ServerResult {
    class: string;
    confidence: number;
    predictons: number[];
}

export interface MushroomEdibilityResult {
    description: string;
    details: {
        short_description: string;
        conditions?: string;  // Added to specify conditions for conditionally edible mushrooms
        precautions: string;
    };
}

export interface MushroomEdibilitySeverity {
    [key: string]: MushroomEdibilityResult;
}

export const mushroomEdibilityData: MushroomEdibilitySeverity = {
    "0": {
        description: "Conditionally Edible Mushroom",
        details: {
            short_description: "This mushroom is edible under certain conditions.",
            conditions: "Ensure proper preparation, cooking, or specific conditions are met before consuming.",
            precautions: "Consuming without proper preparation can cause health issues. Always follow guidelines for preparation and consult an expert if unsure."
        }
    },
    "1": {
        description: "Deadly Mushroom",
        details: {
            short_description: "This mushroom is highly toxic and can cause death.",
            precautions: "Do not consume. Seek immediate medical attention if ingested. Be able to identify these mushrooms to avoid accidental ingestion."
        }
    },
    "2": {
        description: "Edible Mushroom",
        details: {
            short_description: "This mushroom is safe to eat.",
            precautions: "Ensure proper identification to avoid confusing with similar-looking toxic mushrooms. Cook thoroughly before consumption."
        }
    },
    "3": {
        description: "Poisonous Mushroom",
        details: {
            short_description: "This mushroom is toxic and can cause illness.",
            precautions: "Do not consume. If ingested, seek medical attention immediately. Learn to identify these mushrooms to avoid accidental consumption."
        }
    }
};
