import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const readtime = (text?: string): string => {
  if (text === undefined) return '';
  const averageWPM = 265;
  const adjustedText = text.replace(/(.)\1+/g, '$1');
  const adjustedSentences = adjustedText.replace(/([.!?])\s*\1+/g, '$1');
  const adjustedCharCount = adjustedSentences.length;
  const adjustedWords = adjustedSentences.trim().split(/\s+/);
  const adjustedWordCount = adjustedWords.length;
  const averageWordLength = adjustedCharCount / adjustedWordCount;
  const adjustedTime =
    (adjustedCharCount / averageWPM) * (averageWordLength / 60);
  const formattedAdjustedTime =
    adjustedTime > 1 ? Math.round(adjustedTime) + ' min read' : '1 min read';
  return formattedAdjustedTime;
};

export const year = new Date().getFullYear();