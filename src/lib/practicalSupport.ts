export interface PracticalSupport {
    practical_advice: string;
    resource_link: {
        title: string;
        url: string;
        type: "video" | "article";
    };
}

interface CrisisScenario {
    keywords: string[];
    support: PracticalSupport;
}

const crisisScenarios: CrisisScenario[] = [
    {
        keywords: ["suicide", "suicidal", "kill myself", "hurt myself", "self harm", "self-harm", "end my life", "want to die", "wish I were dead", "wish i was dead", "can't go on anymore", "end it all", "no reason to live"],
        support: {
            practical_advice: "Your immediate safety matters most. Contact local emergency services now if you may act on these thoughts or have already harmed yourself. Move away from anything you could use to hurt yourself, stay with another person if possible, and contact a crisis service or medical professional. You do not have to handle this moment alone.",
            resource_link: {
                title: "Find a Helpline - International Crisis Support",
                url: "https://findahelpline.com/",
                type: "article",
            },
        }
    },
    {
        keywords: ["abuse", "abusive", "hit me", "hits me", "beating me", "domestic violence", "hitting me", "threatened me", "unsafe at home", "afraid of my partner"],
        support: {
            practical_advice: "Your safety is the highest priority. If you are in immediate danger, please contact local emergency services. Reach out to a domestic violence hotline or shelter to create a safe exit plan. No one deserves to be abused.",
            resource_link: {
                title: "Domestic Violence Support and Resources",
                url: "https://www.thehotline.org/",
                type: "article",
            },
        }
    },
    {
        keywords: ["divorce", "divorcing", "separation", "leave my husband", "leave my wife", "marriage ending"],
        support: {
            practical_advice: "Give yourself time to understand what is happening before making a major decision, unless remaining in the situation is unsafe. A licensed individual or couples therapist can help you explore the relationship and your options; couples counselling is not recommended when abuse or coercive control is present. Seek legal advice when you need to understand your rights.",
            resource_link: {
                title: "The Difference Between Healthy and Unhealthy Love | Katie Hood | TED",
                url: "https://www.youtube.com/watch?v=ON4iy8hq2hM",
                type: "video",
            },
        }
    },
    {
        keywords: ["fired", "lost my job", "laid off", "job loss", "unemployed"],
        support: {
            practical_advice: "Losing a job is a major life transition, but it does not define your worth. Give yourself a moment to process the shock. When you are ready, update your resume, reach out to your network, and consider treating your job search as your new daily routine, taking regular breaks to rest.",
            resource_link: {
                title: "How to Get Back to Work After a Career Break | Carol Fishman Cohen | TED",
                url: "https://www.youtube.com/watch?v=_wMTKRixZIE",
                type: "video",
            },
        }
    },
    {
        keywords: ["addicted", "addiction", "relapse", "drugs", "alcoholism", "can't stop drinking"],
        support: {
            practical_advice: "Recovery is a journey, and acknowledging you need help is the bravest first step. Reach out to a local support group (like AA or NA) or a counselor specializing in addiction. Remove triggers from your environment immediately and lean on people who support your sobriety.",
            resource_link: {
                title: "Substance Abuse and Mental Health Services",
                url: "https://www.samhsa.gov/find-help/national-helpline",
                type: "article",
            },
        }
    },
    {
        keywords: ["cancer", "diagnosis", "sick", "illness", "terminal", "hospital"],
        support: {
            practical_advice: "Receiving a severe medical diagnosis is overwhelming. Try to bring someone with you to medical appointments to help listen and take notes. Focus on what you can control today, ask your doctors questions, and consider joining a support group for patients navigating the same illness.",
            resource_link: {
                title: "Coping With a Serious Illness Diagnosis",
                url: "https://www.apa.org/topics/chronic-illness/coping-diagnosis",
                type: "article",
            },
        }
    },
    {
        keywords: ["failed", "exam", "flunked", "dropped out", "academic failure"],
        support: {
            practical_advice: "Academic or professional failure is an event, not your identity. Allow yourself to feel disappointed, but do not let it stop you. Review what went wrong objectively, speak to an advisor or mentor for alternative paths, and remember that many successful people have bounced back from failure.",
            resource_link: {
                title: "What I Learned From 100 Days of Rejection | Jia Jiang | TED",
                url: "https://www.youtube.com/watch?v=-vZXgApsPCQ",
                type: "video",
            },
        }
    },
    // NEW THEMES ADDED
    {
        keywords: ["bankrupt", "debt", "lost all my money", "financial crisis", "evicted"],
        support: {
            practical_advice: "Financial crises are incredibly stressful, but there are structured ways out. Take a deep breath and avoid making panic-driven decisions. Consider speaking to a certified financial planner or a non-profit credit counseling agency to help you restructure debt and create a survival budget.",
            resource_link: {
                title: "Coping with Financial Stress",
                url: "https://www.apa.org/topics/stress/money",
                type: "article",
            },
        }
    },
    {
        keywords: ["cheated on me", "affair", "betrayed", "infidelity"],
        support: {
            practical_advice: "Betrayal shatters trust and causes profound pain. Give yourself time to process the shock before making any permanent decisions. Seek a safe space to express your anger and grief, whether that is with a trusted friend, a journal, or a licensed therapist.",
            resource_link: {
                title: "Rethinking Infidelity | Esther Perel | TED",
                url: "https://www.youtube.com/watch?v=P2AUat93a8Q",
                type: "video",
            },
        }
    },
    {
        keywords: ["miscarriage", "lost my baby", "stillbirth", "pregnancy loss"],
        support: {
            practical_advice: "Losing a pregnancy is a profound loss that requires space and time to grieve. Please know that this was not your fault. Allow yourself to feel whatever you are feeling, lean on supportive loved ones, and consider connecting with support groups specifically for pregnancy and infant loss.",
            resource_link: {
                title: "Coping with Pregnancy Loss",
                url: "https://www.marchofdimes.org/complications/coping-with-pregnancy-loss.aspx",
                type: "article",
            },
        }
    },
    {
        keywords: ["bullied", "harassed", "cyberbullying", "picking on me", "workplace bullying"],
        support: {
            practical_advice: "You do not deserve to be treated this way. It is important to document what is happening. Speak to an authority figure, HR department, or a trusted administrator about the harassment. If you are being bullied online, block the users and step away from social media temporarily.",
            resource_link: {
                title: "How to Deal with Bullying and Harassment",
                url: "https://www.stopbullying.gov/resources/get-help-now",
                type: "article",
            },
        }
    },
    {
        keywords: ["caregiver burnout", "exhausted taking care", "caring for sick", "burdened by care"],
        support: {
            practical_advice: "You cannot pour from an empty cup. Caring for a loved one is exhausting work, and experiencing burnout is completely normal. Please ask family members or community services for respite care, even if just for a few hours, so you can rest and recharge.",
            resource_link: {
                title: "Caregiver Burnout: Tips for Prevention",
                url: "https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/caregiver-stress/art-20044784",
                type: "article",
            },
        }
    },
    {
        keywords: ["postpartum", "failing as a mother", "overwhelmed parent", "hate being a parent", "ppd"],
        support: {
            practical_advice: "Parenting is incredibly demanding, and feeling overwhelmed does not mean you are a bad parent. Postpartum depression is a treatable medical condition, not a personal failing. Contact your doctor, obstetric provider, or a qualified mental-health professional to discuss how you are feeling—help is available.",
            resource_link: {
                title: "Postpartum Depression: Symptoms and Causes",
                url: "https://www.postpartum.net/get-help/",
                type: "article",
            },
        }
    }
];

const emotionMapping: Record<string, PracticalSupport> = {
    anxiety: {
        practical_advice: "Ground yourself by slowing your breathing without forcing it: breathe in gently, then let the exhale last a little longer. Notice five things you can see and four you can feel. When you are steadier, break the problem into one small next step. Stop the breathing exercise if it makes you dizzy or uncomfortable.",
        resource_link: {
            title: "How to Make Stress Your Friend | Kelly McGonigal | TED",
            url: "https://www.youtube.com/watch?v=RcGyVTAoXEU",
            type: "video",
        },
    },
    sadness: {
        practical_advice: "It's okay to feel sad; don't force yourself to pretend you are fine. Reach out to a friend just to talk, take a short walk outside to get some fresh air, and engage in one small activity that usually brings you comfort.",
        resource_link: {
            title: "Coping with Sadness and Depression",
            url: "https://www.mind.org.uk/information-support/types-of-mental-health-problems/depression/self-care/",
            type: "article",
        },
    },
    fear: {
        practical_advice: "Name what you are afraid of and separate what is known from what your mind is predicting. Check whether you are in immediate danger; if you are, move to safety and seek help. Otherwise, focus on one concrete action you can take now and one person you can contact for support.",
        resource_link: {
            title: "How to Stay Calm When You Know You'll Be Stressed | Daniel Levitin | TED",
            url: "https://www.youtube.com/watch?v=8jPQjjsBbIc",
            type: "video",
        },
    },
    loneliness: {
        practical_advice: "Loneliness is a feeling, not a measure of your worth. Try one small point of contact today—send a message to someone safe, spend time in a shared public place, or join a community group centred on an interest you enjoy. Repeated, low-pressure contact can help connection grow.",
        resource_link: {
            title: "The Lethality of Loneliness | John Cacioppo | TEDxDesMoines",
            url: "https://www.youtube.com/watch?v=_0hxl03JoA0",
            type: "video",
        },
    },
    anger: {
        practical_advice: "Before reacting, step away from the situation. Take deep breaths to lower your heart rate. Write down exactly why you are angry to get the feelings out of your head, then decide on a calm, constructive way to address the issue.",
        resource_link: {
            title: "Controlling Anger Before It Controls You",
            url: "https://www.apa.org/topics/anger/control",
            type: "article",
        },
    },
    joy: {
        practical_advice: "Take a moment to fully experience and appreciate this joy. Consider keeping a gratitude journal to write down this moment so you can look back on it during harder times. Share your happiness with someone else to multiply the feeling.",
        resource_link: {
            title: "Want to Be Happy? Be Grateful | David Steindl-Rast | TED",
            url: "https://www.youtube.com/watch?v=UtBsl3j0YRQ",
            type: "video",
        },
    },
    grief: {
        practical_advice: "Grief takes time and there is no 'right' way to mourn. Allow yourself to feel the emotions without judgment. Prioritize basic self-care like sleeping and eating, and consider joining a grief support group where you can share your feelings with people who understand your loss.",
        resource_link: {
            title: "We Don't Move On From Grief—We Move Forward With It | Nora McInerny | TED",
            url: "https://www.youtube.com/watch?v=khkJkR-ipfw",
            type: "video",
        },
    },
    // NEW EMOTIONS ADDED
    guilt: {
        practical_advice: "Guilt is a heavy burden, but holding onto it indefinitely prevents healing. If you made a mistake, acknowledge it, apologize if appropriate, and focus on what you can do differently next time. Remember that everyone is flawed and deserves grace.",
        resource_link: {
            title: "How to Let Go of Guilt",
            url: "https://www.psychologytoday.com/us/blog/the-mindful-self-express/201703/8-empowering-ways-to-let-go-of-guilt",
            type: "article",
        },
    },
    shame: {
        practical_advice: "Shame tells you that you are fundamentally broken, but that is a lie. Shame loses its power when it is spoken. Find one trusted, empathetic person to share your feelings with, and practice speaking to yourself with the same kindness you would offer a friend.",
        resource_link: {
            title: "Listening to Shame | Brené Brown | TED",
            url: "https://www.youtube.com/watch?v=psN1DORYYV0",
            type: "video",
        },
    },
    confusion: {
        practical_advice: "When you feel confused or uncertain, don't rush to find the perfect answer. Accept that it is okay to not know right now. Write down your options to clear your mind, and take just one small step forward instead of trying to map out the entire path.",
        resource_link: {
            title: "Navigating Uncertainty",
            url: "https://www.helpguide.org/articles/anxiety/dealing-with-uncertainty.htm",
            type: "article",
        },
    },
    frustration: {
        practical_advice: "Frustration happens when your expectations collide with reality. Step back and identify exactly what is blocking you. Ask yourself if the obstacle is within your control. If it isn't, practice radical acceptance and pivot your energy toward what you can change.",
        resource_link: {
            title: "The Gift and Power of Emotional Courage | Susan David | TED",
            url: "https://www.youtube.com/watch?v=NDQ1Mi5I4rg",
            type: "video",
        },
    },
    overwhelm: {
        practical_advice: "When everything feels like too much, your brain goes into survival mode. Stop what you are doing. Write down a 'brain dump' of everything on your mind. Pick just ONE small, low-effort task to complete today, and give yourself permission to let the rest go for now.",
        resource_link: {
            title: "What to Do When You're Feeling Overwhelmed",
            url: "https://hbr.org/2019/10/what-to-do-when-you-feel-overwhelmed-at-work",
            type: "article",
        },
    },
    apathy: {
        practical_advice: "Feeling numb or indifferent can happen during prolonged stress, burnout, grief, depression, or trauma. Do not force an emotion. Gently engage your senses—drink something cool, hold a warm blanket, or listen to familiar music—and consider speaking with a health professional if the numbness persists or interferes with daily life.",
        resource_link: {
            title: "Why Do I Feel Numb? Causes and Coping",
            url: "https://www.medicalnewstoday.com/articles/feeling-numb",
            type: "article",
        },
    },
    jealousy: {
        practical_advice: "Jealousy is a normal human emotion that highlights what we deeply desire. Instead of resenting the other person, get curious about your feeling. Use it as a compass to understand your own unmet goals, and gently shift your focus back to your own unique journey.",
        resource_link: {
            title: "The Difference Between Healthy and Unhealthy Love | Katie Hood | TED",
            url: "https://www.youtube.com/watch?v=ON4iy8hq2hM",
            type: "video",
        },
    },
    hopelessness: {
        practical_advice: "Hopelessness is exhausting. You do not need to figure out how to fix your life right now; you just need to survive this moment. Reach out to someone you trust, or a professional helpline, and borrow their hope until you can find your own again.",
        resource_link: {
            title: "Finding Hope When You Feel Hopeless",
            url: "https://www.verywellmind.com/how-to-find-hope-when-you-feel-hopeless-5114144",
            type: "article",
        },
    },
    stress: {
        practical_advice: "Ongoing stress can affect both physical and emotional health. Try a manageable action that helps your body settle, such as a short walk, gentle stretching, slow breathing, rest, or a supportive conversation. If stress is persistent or is disrupting sleep and daily functioning, consider speaking with a health professional.",
        resource_link: {
            title: "How to Make Stress Your Friend | Kelly McGonigal | TED",
            url: "https://www.youtube.com/watch?v=RcGyVTAoXEU",
            type: "video",
        },
    }
};

const defaultSupport: PracticalSupport = {
    practical_advice: "Take things one step at a time. Focus on things within your immediate control, ensure you are getting enough rest, and remember that faith offers a foundation of comfort when answers aren't immediately clear. Don't hesitate to reach out to a trusted friend or professional if you feel overwhelmed.",
    resource_link: {
        title: "Building Resilience in Difficult Times",
        url: "https://www.apa.org/topics/resilience",
        type: "article",
    },
};

export function getPracticalSupport(
    inputText: string,
    detectedEmotion: string
): PracticalSupport {
    const lowerInput = inputText.toLowerCase();

    // Helper to safely match exact keywords/phrases and ignore partial matches
    const hasKeyword = (keyword: string, text: string) => {
        const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // Word boundary that supports phrases like "can't" gracefully
        const regex = new RegExp(`(^|\\W)${escaped}(\\W|$)`);
        return regex.test(text);
    };

    // Helper to detect if a matched keyword is negated (e.g. "I am not getting a divorce")
    const isNegated = (keyword: string, text: string) => {
        const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(^|\\W)${escaped}(\\W|$)`);
        const match = text.match(regex);
        if (!match || match.index === undefined) return false;
        
        // Look at the 35 characters preceding the keyword
        const window = text.substring(Math.max(0, match.index - 35), match.index);
        return /\b(not|never|isn't|aren't|don't|doesn't|didn't|won't|cannot|can't|no)\b/.test(window);
    };

    // 1. Check for specific crisis or situation keywords first (checking all synonyms)
    for (const scenario of crisisScenarios) {
        for (const keyword of scenario.keywords) {
            if (hasKeyword(keyword, lowerInput)) {
                if (!isNegated(keyword, lowerInput)) {
                    return scenario.support;
                }
            }
        }
    }

    // 2. Fall back to the detected emotion
    const normalizedEmotion = detectedEmotion.toLowerCase().trim();
    
    // Exact match or partial match for emotion keys
    for (const [emotionKey, support] of Object.entries(emotionMapping)) {
        if (normalizedEmotion.includes(emotionKey)) {
            return support;
        }
    }

    return defaultSupport;
}
