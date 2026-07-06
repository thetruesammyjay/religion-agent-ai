import { Book, Bookmark, Heart, Sparkles, Lightbulb, PlayCircle, FileText } from "lucide-react";

import type { ApiResponse } from "../types";
import { clsx } from "clsx";

interface ResponseCardProps {
    response: ApiResponse;
}

export function ResponseCard({ response }: ResponseCardProps) {
    const { detect_emotion, compassion_message } = response;
    const hasChristian = "bible_verse" in response;
    const hasIslamic = "quran_verse" in response;
    const hasMaharajJi = "maharaj_ji_teaching" in response;
    const hasInterfaith = hasChristian && hasIslamic && hasMaharajJi;

    return (
        <div className="w-full">
            <div className="bg-white rounded-2xl shadow-md border overflow-hidden shadow-gray-200">
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Heart className="text-pink-500 w-8 h-8" />
                            <div className="absolute -inset-1 bg-pink-500 rounded-full animate-ping opacity-20" />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl text-gray-900 capitalize">
                                {detect_emotion.primary_emotion}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                                <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-500"
                                        style={{
                                            width: `${
                                                detect_emotion.intensity * 10
                                            }%`,
                                        }}
                                    />
                                </div>
                                <span className="text-sm text-gray-600">
                                    Intensity: {detect_emotion.intensity}/10
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6 space-y-6">
                    {hasChristian && (
                        <div className="space-y-3 transform transition-all duration-300 hover:translate-x-1">
                            <div className="flex items-center gap-2 text-blue-600">
                                <Book className="w-5 h-5" />
                                <h4 className="font-semibold">Bible Verse</h4>
                            </div>
                            <blockquote className="pl-4 border-l-4 border-blue-200 py-2">
                                <p className="text-gray-700 font-medium">
                                    {response.bible_verse.verse_text}
                                </p>
                                <cite className="block mt-2 text-sm text-gray-500 font-normal">
                                    - {response.bible_verse.verse_ref}
                                </cite>
                            </blockquote>
                            <p className="text-sm text-gray-600 italic pl-4">
                                {response.bible_verse.relevance_explanation}
                            </p>
                        </div>
                    )}

                    {hasIslamic && (
                        <div className="space-y-3 transform transition-all duration-300 hover:translate-x-1">
                            <div className="flex items-center gap-2 text-green-600">
                                <Bookmark className="w-5 h-5" />
                                <h4 className="font-semibold">Quran Verse</h4>
                            </div>
                            <blockquote className="pl-4 border-l-4 border-green-200 py-2">
                                <p className="text-gray-700 font-medium">
                                    {response.quran_verse.verse_text}
                                </p>
                                <cite className="block mt-2 text-sm text-gray-500 font-normal">
                                    - {response.quran_verse.verse_ref}
                                </cite>
                            </blockquote>
                            <p className="text-sm text-gray-600 italic pl-4">
                                {response.quran_verse.relevance_explanation}
                            </p>
                        </div>
                    )}

                    {hasMaharajJi && response.maharaj_ji_teaching && (
                        <div className="space-y-3 transform transition-all duration-300 hover:translate-x-1">
                            <div className="flex items-center gap-2 text-amber-600">
                                <Sparkles className="w-5 h-5" />
                                <h4 className="font-semibold">Maharaj Ji Teaching</h4>
                            </div>
                            <blockquote className="pl-4 border-l-4 border-amber-200 py-2">
                                {response.maharaj_ji_teaching.exact_excerpt && (
                                    <p className="text-gray-700 font-semibold mb-2">
                                        "{response.maharaj_ji_teaching.exact_excerpt}"
                                    </p>
                                )}
                                <p className="text-gray-700 font-medium">
                                    {response.maharaj_ji_teaching.teaching_text}
                                </p>
                                <cite className="block mt-2 text-sm text-gray-500 font-normal">
                                    - {response.maharaj_ji_teaching.teaching_ref}
                                </cite>
                            </blockquote>
                            <p className="text-sm text-gray-600 italic pl-4">
                                {response.maharaj_ji_teaching.relevance_explanation}
                            </p>
                            {response.maharaj_ji_teaching.source_url && (
                                <a
                                    className="block text-sm text-amber-700 underline pl-4"
                                    href={response.maharaj_ji_teaching.source_url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Source
                                </a>
                            )}
                        </div>
                    )}

                    <div
                        className={clsx(
                            "mt-8 p-6 rounded-xl shadow-inner border",
                            hasInterfaith
                                ? "bg-gradient-to-r from-blue-50 via-purple-50 to-amber-50"
                                : hasChristian
                                ? "bg-gradient-to-r from-blue-50 to-purple-50"
                                : hasIslamic
                                ? "bg-gradient-to-r from-green-50 to-purple-50"
                                : "bg-gradient-to-r from-amber-50 to-purple-50"
                        )}
                    >
                        <p className="text-gray-700 font-medium leading-relaxed whitespace-pre-line">
                            {compassion_message}
                        </p>
                    </div>

                    {response.practical_advice && (
                        <div 
                            className="mt-8 pt-6 border-t border-gray-100"
                            role="region" 
                            aria-label="Practical Steps and Advice"
                        >
                            <div className="flex items-center gap-2 text-indigo-600 mb-3" aria-hidden="true">
                                <Lightbulb className="w-5 h-5" />
                                <h4 className="font-semibold text-lg">Practical Steps</h4>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                {response.practical_advice}
                            </p>
                        </div>
                    )}

                    {response.resource_link && (
                        <div className="mt-6" role="complementary" aria-label="Recommended External Resource">
                            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 hover:border-indigo-300 transition-colors duration-300">
                                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3" aria-hidden="true">Recommended Resource</h4>
                                <a
                                    href={response.resource_link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Open ${response.resource_link.type === 'video' ? 'video' : 'article'}: ${response.resource_link.title} in a new tab`}
                                    className="group flex items-center gap-4 bg-white p-3 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300"
                                >
                                    <div className="bg-indigo-100 text-indigo-600 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                                        {response.resource_link.type === "video" ? (
                                            <PlayCircle className="w-6 h-6" />
                                        ) : (
                                            <FileText className="w-6 h-6" />
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-gray-900 font-medium group-hover:text-indigo-600 transition-colors">
                                            {response.resource_link.title}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {response.resource_link.type === "video" ? "Watch Video" : "Read Article"}
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

