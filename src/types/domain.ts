/** 难度等级 */
export type DifficultyLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

/** FSRS 评分 */
export type FSRSRating = 1 | 2 | 3 | 4;

/** FSRS 记忆状态 */
export interface FSRSState {
  stability: number;
  difficulty: number;
  elapsedDays: number;
  scheduledDays: number;
  reps: number;
  lapses: number;
  lastReview: number;
  state: "new" | "learning" | "review" | "relearning";
}

// ── 数学题目（占位类型，后续扩展）──

/** 题目类型 */
export type ProblemType =
  | "mental-arithmetic"   // 口算
  | "column-addition"      // 竖式加法
  | "column-subtraction"   // 竖式减法
  | "column-multiplication" // 竖式乘法
  | "column-division"      // 竖式除法
  | "equation"             // 方程
  | "word-problem";        // 应用题

/** 单道数学题 */
export interface MathProblem {
  id: string;
  uuid: string;
  problemType: ProblemType;
  expression: string;       // 算式文本，如 "23 + 45 = ?"
  correctAnswer: string;    // 正确答案
  acceptableAnswers?: string[]; // 可接受的其他答案
  difficulty: DifficultyLevel;
  source: "builtin" | "ai-generated" | "user-imported";
  tags: string[];
  order: number;
  bookId: string;
  createdAt: number;
  updatedAt: number;
}

/** 学习卡片（FSRS 绑定） */
export interface LearningCard {
  id: string;
  cardType: "math-problem";
  contentId: string;
  fsrs: FSRSState;
  notes?: string;
  createdAt: number;
}

/** 答题记录 */
export interface Attempt {
  id: string;
  problemId: string;
  cardId?: string;
  userInput: string;
  isCorrect: boolean;
  timeSpentMs: number;
  createdAt: number;
}

/** 学习会话 */
export interface StudySession {
  id: string;
  sessionType: "review" | "learn-new" | "test" | "mixed";
  startTime: number;
  endTime?: number;
  cardsReviewed: number;
  cardsCorrect: number;
  newCardsLearned: number;
  totalTimeSpentMs: number;
}

/** 用户偏好设置 */
export interface UserPreferences {
  theme: "light" | "dark" | "system";
  autoPlay: boolean;
  dailyReminderEnabled: boolean;
  dailyReminderTime: string;
  /** 进度条位置：贴顶或贴底 */
  progressBarPosition: "top" | "bottom";
}
