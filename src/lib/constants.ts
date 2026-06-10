import type { DifficultyLevel, UserPreferences } from "@/types/domain";
import { Calculator, Columns3 } from "lucide-react";

/** 部署路径，由 VITE_BASE 环境变量决定，默认 "/" */
export const BASE_PATH = (import.meta.env.VITE_BASE as string) || "/";

export const APP_NAME = "Evergrow Math";

export const DIFFICULTY_LABELS: Record<DifficultyLevel, string> = {
  A1: "入门",
  A2: "基础",
  B1: "中级",
  B2: "进阶",
  C1: "高级",
  C2: "精通",
};

export const FSRS_RATING_LABELS: Record<number, string> = {
  1: "重来",
  2: "困难",
  3: "良好",
  4: "简单",
};

export const DEFAULT_PREFERENCES: UserPreferences = {
  theme: "system",
  autoPlay: true,
  dailyReminderEnabled: false,
  dailyReminderTime: "09:00",
  progressBarPosition: "top",
};

export const PLAYBACK_SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 2] as const;

// ── 数学学习 ──

export const DEFAULT_PROBLEMS_PER_ROUND = 20;
export const PROBLEMS_PER_ROUND_MIN = 5;
export const PROBLEMS_PER_ROUND_MAX = 50;
export const PROBLEMS_PER_ROUND_STEP = 5;

/** 打错后重置延迟 (ms) */
export const WRONG_RESET_DELAY_MS = 300;

/** 跳过按钮出现的错误次数阈值 */
export const SKIP_WRONG_THRESHOLD = 4;

/** 题目切换延迟 (ms) */
export const PROBLEM_TRANSITION_DELAY_MS = 400;

// ── 路由 ──

export const ROUTES = {
  HOME: "/",
  CENTER: "/center",
  KNOWLEDGE: "/center/knowledge",
  PRACTICE: "/center/practice",
  EXAM: "/center/exam",
  MENTAL_ARITHMETIC: "/center/mental",
  COLUMN_MATH: "/center/column",
  SETTINGS: "/settings",
  WELCOME: "/welcome",
  LEARN: "/learn",
} as const;

// ── 快捷入口（首页 + 学习中心共享）──

export const QUICK_ACTIONS = [
  {
    to: ROUTES.MENTAL_ARITHMETIC,
    label: "口算练习",
    desc: "加减乘除心算，提升计算速度",
    icon: Calculator,
    color: "oklch(0.55 0.18 280 / 0.1)",
    iconColor: "text-primary",
    shadow: "0 4px 16px oklch(0.55 0.18 280 / 0.15)",
  },
  {
    to: ROUTES.COLUMN_MATH,
    label: "竖式计算",
    desc: "逐位对齐运算，掌握笔算方法",
    icon: Columns3,
    color: "oklch(0.62 0.16 170 / 0.1)",
    iconColor: "oklch(0.62 0.16 170)",
    shadow: "0 4px 16px oklch(0.62 0.16 170 / 0.15)",
  },
];
