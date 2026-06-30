export type Faith = "Christian" | "Islamic" | "Maharaj Ji" | "Interfaith";
export type ApiFaith = "Christian" | "Islamic" | "Both";

export interface Emotion {
    primary_emotion: string;
    intensity: number;
    context: string | null;
}

export interface BibleVerse {
    verse_ref: string;
    verse_text: string;
    relevance_explanation: string;
}

export interface QuranVerse {
    verse_ref: string;
    verse_text: string;
    relevance_explanation: string;
}

export interface MaharajJiTeaching {
    teaching_ref: string;
    teaching_text: string;
    relevance_explanation: string;
    source_url?: string;
    exact_excerpt?: string;
}

export interface ChristianResponse {
    detect_emotion: Emotion;
    bible_verse: BibleVerse;
    compassion_message: string;
}

export interface IslamicResponse {
    detect_emotion: Emotion;
    quran_verse: QuranVerse;
    compassion_message: string;
}

export interface MaharajJiResponse {
    detect_emotion: Emotion;
    maharaj_ji_teaching: MaharajJiTeaching;
    compassion_message: string;
}

export interface CombinedResponse {
    detect_emotion: Emotion;
    bible_verse: BibleVerse;
    quran_verse: QuranVerse;
    maharaj_ji_teaching?: MaharajJiTeaching;
    compassion_message: string;
}

export type ApiResponse =
    | ChristianResponse
    | IslamicResponse
    | MaharajJiResponse
    | CombinedResponse;

