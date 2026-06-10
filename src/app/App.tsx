import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryProvider } from "./providers/QueryProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import { AppShell } from "@/components/layout/AppShell";
import { CenterLayout } from "@/components/layout/CenterLayout";
import { LandingPage } from "@/components/pages/LandingPage";
import { WelcomePage } from "@/components/pages/WelcomePage";
import { LearningCenterHub } from "@/components/pages/LearningCenterHub";
import { PagePlaceholder } from "@/components/shared/PagePlaceholder";
import { WelcomeGuard } from "@/components/shared/WelcomeGuard";
import { ROUTES } from "@/lib/constants";
import { Settings, BookOpen, Pencil, FileText } from "lucide-react";

export function App() {
  const basename = import.meta.env.VITE_BASE || "/";

  return (
    <QueryProvider>
      <ThemeProvider>
        <BrowserRouter basename={basename}>
          <Routes>
            {/* 官网首页 — 全屏，无 AppShell */}
            <Route path={ROUTES.HOME} element={<LandingPage />} />

            {/* 欢迎页面 — 全屏，无 AppShell */}
            <Route path={ROUTES.WELCOME} element={<WelcomePage />} />

            <Route element={<AppShell />}>
              {/* 学习中心 — 嵌套布局，有昵称守卫 */}
              <Route element={<WelcomeGuard />}>
                <Route path={ROUTES.CENTER} element={<CenterLayout />}>
                  <Route index element={<LearningCenterHub />} />
                  {/* 知识 */}
                  <Route
                    path={ROUTES.KNOWLEDGE}
                    element={
                      <PagePlaceholder
                        title="知识"
                        description="数学概念、公式、定理讲解"
                        icon={<BookOpen className="h-7 w-7" />}
                      />
                    }
                  />
                  {/* 刷题 */}
                  <Route
                    path={ROUTES.PRACTICE}
                    element={
                      <PagePlaceholder
                        title="刷题"
                        description="海量题库，针对性练习"
                        icon={<Pencil className="h-7 w-7" />}
                      />
                    }
                  />
                  {/* 试卷 */}
                  <Route
                    path={ROUTES.EXAM}
                    element={
                      <PagePlaceholder
                        title="试卷"
                        description="模拟测试，检验学习成果"
                        icon={<FileText className="h-7 w-7" />}
                      />
                    }
                  />
                  {/* 数学学习模块（占位）— 待后续开发 */}
                  <Route
                    path={ROUTES.MENTAL_ARITHMETIC}
                    element={
                      <PagePlaceholder
                        title="口算练习"
                        description="加减乘除心算，提升计算速度"
                        icon={<Settings className="h-7 w-7" />}
                      />
                    }
                  />
                  <Route
                    path={ROUTES.COLUMN_MATH}
                    element={
                      <PagePlaceholder
                        title="竖式计算"
                        description="逐位对齐运算，掌握笔算方法"
                        icon={<Settings className="h-7 w-7" />}
                      />
                    }
                  />
                </Route>
              </Route>

              {/* 设置 */}
              <Route
                path={ROUTES.SETTINGS}
                element={
                  <PagePlaceholder
                    title="设置"
                    description="个性化学习偏好"
                    icon={<Settings className="h-7 w-7" />}
                  />
                }
              />

              {/* 兼容旧链接 */}
              <Route
                path="/dashboard"
                element={<Navigate to={ROUTES.CENTER} replace />}
              />
            </Route>

            {/* 404 */}
            <Route
              path="*"
              element={<Navigate to={ROUTES.HOME} replace />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryProvider>
  );
}
