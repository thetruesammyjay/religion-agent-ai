import source from "../data/maharaj-ji-guidance.md?raw";

import type { Emotion, MaharajJiTeaching } from "../types";

type GuidanceRecord = MaharajJiTeaching & {
    emotion: string;
    keywords: string[];
    message: string;
};

const DEFAULT_EMOTION = "default";
const INTENSIFIERS = [
    "very",
    "really",
    "extremely",
    "so",
    "too",
    "deeply",
    "completely",
    "overwhelmed",
    "unbearable",
    "terrified",
    "devastated",
];

function readField(block: string, field: string) {
    const match = block.match(new RegExp(`^- ${field}:\\s*(.+)$`, "im"));
    return match?.[1]?.trim() ?? "";
}

function parseGuidanceSource(markdown: string): GuidanceRecord[] {
    return markdown
        .split(/\n(?=##\s+)/g)
        .map((block): GuidanceRecord | null => {
            const heading = block.match(/^##\s+(.+)$/m)?.[1]?.trim();

            if (!heading) {
                return null;
            }

            return {
                emotion: heading.toLowerCase(),
                teaching_ref: readField(block, "Reference"),
                teaching_text: readField(block, "Text"),
                relevance_explanation: readField(block, "Relevance"),
                source_url: readField(block, "Source"),
                exact_excerpt: readField(block, "Exact excerpt"),
                keywords: readField(block, "Keywords")
                    .split(",")
                    .map((keyword) => keyword.trim().toLowerCase())
                    .filter(Boolean),
                message: readField(block, "Message"),
            };
        })
        .filter((record): record is GuidanceRecord => Boolean(record));
}

const records = parseGuidanceSource(source);

function normalise(value: string | undefined | null) {
    if (!value) return "";
    return String(value).toLowerCase();
}

function scoreRecord(input: string, record: GuidanceRecord) {
    return record.keywords.reduce((score, keyword) => {
        return input.includes(keyword) ? score + 1 : score;
    }, 0);
}

function findRecord(text: string, emotion?: Emotion | null) {
    if (!records || records.length === 0) {
        return {
            emotion: "default",
            teaching_ref: "General Guidance",
            teaching_text: "Seek peace and truth in all things.",
            relevance_explanation: "A gentle reminder to find calm.",
            source_url: "",
            exact_excerpt: "",
            keywords: [],
            message: "Take a deep breath and give yourself a moment of peace."
        } as GuidanceRecord;
    }

    const input = normalise(`${text} ${emotion?.primary_emotion ?? ""} ${emotion?.context ?? ""}`);
    const directEmotionMatch = records.find(
        (record) => record.emotion === normalise(emotion?.primary_emotion ?? "")
    );

    if (directEmotionMatch) {
        return directEmotionMatch;
    }

    const scored = records
        .filter((record) => record.emotion !== DEFAULT_EMOTION)
        .map((record) => ({ record, score: scoreRecord(input, record) }))
        .sort((a, b) => b.score - a.score);

    if (scored[0]?.score > 0) {
        return scored[0].record;
    }

    return records.find((record) => record.emotion === DEFAULT_EMOTION) ?? records[0];
}

function estimateIntensity(text: string, record: GuidanceRecord) {
    const input = normalise(text);
    const keywordMatches = record.keywords.filter((keyword) => input.includes(keyword)).length;
    const intensifierMatches = INTENSIFIERS.filter((word) => input.includes(word)).length;
    return Math.min(10, Math.max(4, 4 + keywordMatches + intensifierMatches));
}

export function detectMaharajJiEmotion(text: string): Emotion {
    const record = findRecord(text);

    return {
        primary_emotion: record.emotion === DEFAULT_EMOTION ? "Need for Guidance" : record.emotion,
        intensity: estimateIntensity(text, record),
        context: "Faith-based emotional guidance requested from the Maharaj Ji tradition",
    };
}

export function getMaharajJiGuidance(text: string, emotion?: Emotion | null): MaharajJiTeaching {
    const record = findRecord(text, emotion);

    return {
        teaching_ref: record.teaching_ref,
        teaching_text: record.teaching_text,
        relevance_explanation: record.relevance_explanation,
        source_url: record.source_url,
        exact_excerpt: record.exact_excerpt,
    };
}

export function buildMaharajJiMessage(text: string, emotion?: Emotion | null) {
    const record = findRecord(text, emotion);
    return record.message;
}

