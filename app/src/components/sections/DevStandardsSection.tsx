import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/contexts/LanguageContext';

interface DevStandardsSectionProps {
  activeSubsection: string;
}

export function DevStandardsSection({ activeSubsection }: DevStandardsSectionProps) {
  const { language, t } = useLanguage();
  const isZh = language === 'zh';

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{isZh ? '开发规范' : 'Development Standards'}</h1>
        <p className="text-muted-foreground text-lg">
          {isZh
            ? '前端样式约束、后端开发规范、数据库规范与代码规范，确保团队协作一致性'
            : 'Frontend style constraints, backend standards, database specs and code conventions for team consistency'}
        </p>
      </div>

      <FrontendStandardsContent isZh={isZh} />
      <Separator />
      <BackendStandardsContent isZh={isZh} />
      <Separator />
      <DatabaseStandardsContent isZh={isZh} />
      <Separator />
      <CodeStandardsContent isZh={isZh} />
    </div>
  );
}

function FrontendStandardsContent({ isZh }: { isZh: boolean }) {
  const colorSystem = [
    { title: isZh ? 'CSS 变量' : 'CSS Variables', desc: isZh ? '--background, --foreground, --primary, --secondary, --muted' : '--background, --foreground, --primary, --secondary, --muted' },
    { title: isZh ? 'GitHub 主题色' : 'GitHub Colors', desc: isZh ? '--github-green, --github-red, --github-orange' : '--github-green, --github-red, --github-orange' },
    { title: isZh ? '状态色' : 'Status Colors', desc: isZh ? 'success(#238636), warning(#f0883e), danger(#da3633)' : 'success, warning, danger colors' },
    { title: isZh ? '主题强调色' : 'Accent', desc: isZh ? '#ff4d00 (橙色)' : '#ff4d00 (orange)' },
  ];

  const typography = [
    { title: isZh ? '主字体' : 'Primary Font', desc: 'Inter' },
    { title: isZh ? '代码字体' : 'Code Font', desc: 'SF Mono / Monaco / Cascadia Code' },
    { title: isZh ? '字号层级' : 'Size Scale', desc: 'text-xs(12) / sm(14) / base(16) / lg(18) / xl(20) / 2xl(24) / 3xl(30) / 4xl(36)' },
    { title: isZh ? '字重' : 'Weight', desc: isZh ? '标题 bold，正文默认' : 'bold for headings, default for body' },
  ];

  const components = [
    { title: isZh ? 'UI 库' : 'UI Library', desc: isZh ? '优先使用 shadcn/ui，不自行实现已有组件' : 'Use shadcn/ui, don\'t recreate existing components' },
    { title: isZh ? '图标' : 'Icons', desc: isZh ? '统一使用 lucide-react，尺寸 h-4/h-5/h-8' : 'Use lucide-react, sizes h-4/h-5/h-8' },
    { title: isZh ? 'Card 结构' : 'Card Structure', desc: isZh ? 'CardHeader + CardTitle + CardContent' : 'CardHeader + CardTitle + CardContent' },
    { title: isZh ? '表单' : 'Forms', desc: isZh ? 'shadcn/ui Input + Label + react-hook-form + zod' : 'shadcn/ui Input + Label + react-hook-form + zod' },
  ];

  const animations = [
    { title: isZh ? '微交互' : 'Micro-interactions', desc: isZh ? 'Tailwind transition (duration-200 ease-out)' : 'Tailwind transition (duration-200 ease-out)' },
    { title: isZh ? '复杂动画' : 'Complex Animations', desc: 'GSAP' },
    { title: isZh ? '禁用 @keyframes' : 'No @keyframes', desc: isZh ? '禁止 CSS @keyframes 自定义动画' : 'No CSS @keyframes (existing ones excepted)' },
    { title: isZh ? '减少动画' : 'Reduced Motion', desc: isZh ? '所有动画需 respect prefers-reduced-motion' : 'All animations must respect prefers-reduced-motion' },
  ];

  const prohibitions = [
    isZh ? '禁止使用内联 style' : 'No inline style',
    isZh ? '禁止使用 !important' : 'No !important',
    isZh ? '禁止硬编码颜色值' : 'No hard-coded colors',
    isZh ? '禁止硬编码中/英文文案（必须走 i18n）' : 'No hard-coded text (must use i18n)',
    isZh ? '禁止使用 px 单位指定间距' : 'No px for spacing (use Tailwind)',
    isZh ? '禁止导入外部 CSS 框架' : 'No external CSS frameworks (Bootstrap, AntD, etc.)',
  ];

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold">{isZh ? '前端样式约束' : 'Frontend Style Constraints'}</h2>
        <p className="text-muted-foreground mt-1">
          {isZh
            ? '颜色、排版、组件、动画、布局规范（详见 /docs/frontend-style-guide.md）'
            : 'Colors, typography, components, animation, layout standards (see /docs/frontend-style-guide.md)'}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{isZh ? '颜色系统' : 'Color System'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {colorSystem.map((item) => (
                <div key={item.title} className="flex justify-between items-center">
                  <span className="font-medium text-sm">{item.title}</span>
                  <span className="text-xs text-muted-foreground">{item.desc}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{isZh ? '排版' : 'Typography'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {typography.map((item) => (
                <div key={item.title} className="flex justify-between items-center">
                  <span className="font-medium text-sm">{item.title}</span>
                  <span className="text-xs text-muted-foreground">{item.desc}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{isZh ? '组件规范' : 'Component Standards'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {components.map((item) => (
                <div key={item.title} className="flex justify-between items-center">
                  <span className="font-medium text-sm">{item.title}</span>
                  <span className="text-xs text-muted-foreground">{item.desc}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{isZh ? '动画' : 'Animation'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {animations.map((item) => (
                <div key={item.title} className="flex justify-between items-center">
                  <span className="font-medium text-sm">{item.title}</span>
                  <span className="text-xs text-muted-foreground">{item.desc}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-red-500/20">
        <CardHeader>
          <CardTitle className="text-red-600 dark:text-red-400">{isZh ? '禁止事项' : 'Prohibitions'}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2 md:grid-cols-2">
            {prohibitions.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <Badge variant="destructive" className="shrink-0">×</Badge>
                {item}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function BackendStandardsContent({ isZh }: { isZh: boolean }) {
  const standards = [
    { title: 'NestJS', desc: isZh ? '模块化架构，每个功能领域一个模块，Controller → Service → Repository 层次' : 'Modular architecture, one module per feature, Controller → Service → Repository' },
    { title: 'Prisma', desc: isZh ? '唯一 ORM，Schema 定义在 packages/database/' : 'Only ORM, Schema in packages/database/' },
    { title: isZh ? '异步任务' : 'Async Tasks', desc: isZh ? 'BullMQ 队列处理，配置重试和死信队列' : 'BullMQ queue, configure retry and DLQ' },
    { title: 'API', desc: isZh ? '统一响应格式 { code, data, message, timestamp }' : 'Unified response { code, data, message, timestamp }' },
    { title: isZh ? '全局守卫' : 'Global Guards', desc: 'JwtAuthGuard, RolesGuard, ThrottlerGuard' },
    { title: isZh ? '全局管道' : 'Global Pipes', desc: isZh ? 'ValidationPipe 基于 class-validator + class-transformer' : 'ValidationPipe based on class-validator + class-transformer' },
    { title: isZh ? '日志' : 'Logging', desc: isZh ? 'NestJS Logger + Winston，支持结构化日志' : 'NestJS Logger + Winston, structured logging' },
    { title: isZh ? '配置管理' : 'Config', desc: isZh ? '@nestjs/config + Joi schema 验证' : '@nestjs/config + Joi schema validation' },
  ];

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold">{isZh ? '后端开发规范' : 'Backend Development Standards'}</h2>
        <p className="text-muted-foreground mt-1">
          {isZh
            ? 'NestJS 架构、Prisma ORM、BullMQ 队列、全局守卫与管道'
            : 'NestJS architecture, Prisma ORM, BullMQ queues, global guards and pipes'}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {standards.map((item) => (
          <Card key={item.title}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{isZh ? '目录结构示例' : 'Directory Structure Example'}</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-muted p-4 rounded-lg text-sm font-mono overflow-x-auto">
{`src/modules/auth/
├── auth.controller.ts    # 路由处理
├── auth.service.ts      # 业务逻辑
├── auth.repository.ts   # 数据访问
├── dto/
│   ├── login.dto.ts
│   └── register.dto.ts
├── strategies/
│   ├── jwt.strategy.ts
│   └── local.strategy.ts
└── auth.module.ts       # 模块定义`}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}

function DatabaseStandardsContent({ isZh }: { isZh: boolean }) {
  const standards = [
    { title: 'PostgreSQL', desc: isZh ? '主数据库，存储核心业务数据' : 'Primary database, core business data' },
    { title: 'Redis', desc: isZh ? '缓存和消息队列（BullMQ）' : 'Cache and message queue (BullMQ)' },
    { title: 'ID', desc: isZh ? '所有模型使用 cuid()，不使用自增 ID' : 'All models use cuid(), no auto-increment' },
    { title: isZh ? '时间字段' : 'Time Fields', desc: 'createdAt / updatedAt 统一管理' },
    { title: isZh ? '软删除' : 'Soft Delete', desc: isZh ? '使用 isDeleted 字段，不使用物理删除' : 'Use isDeleted field, no hard delete' },
    { title: isZh ? '关联' : 'Relations', desc: isZh ? '使用 Prisma 关系定义，禁止原生 SQL 拼接' : 'Use Prisma relations, no raw SQL' },
    { title: isZh ? '索引' : 'Indexes', desc: isZh ? '高频查询字段添加 @index' : 'Add @index for high-frequency queries' },
    { title: isZh ? '迁移' : 'Migrations', desc: isZh ? 'prisma migrate 管理，禁止手动修改数据库' : 'prisma migrate, no manual DB changes' },
  ];

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold">{isZh ? '数据库规范' : 'Database Standards'}</h2>
        <p className="text-muted-foreground mt-1">
          {isZh
            ? 'PostgreSQL + Prisma ORM，遵循数据建模最佳实践'
            : 'PostgreSQL + Prisma ORM, follow data modeling best practices'}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {standards.map((item) => (
          <Card key={item.title}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{isZh ? 'Schema 示例' : 'Schema Example'}</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-muted p-4 rounded-lg text-sm font-mono overflow-x-auto">
{`model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String
  role      Role     @default(MEMBER)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([email])
}

enum Role {
  ADMIN
  MANAGER
  MEMBER
  VIEWER
}`}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}

function CodeStandardsContent({ isZh }: { isZh: boolean }) {
  const standards = [
    { title: 'TypeScript', desc: isZh ? 'strict mode，禁止 any，使用类型推断' : 'strict mode, no any, use type inference' },
    { title: 'i18n', desc: isZh ? '中文优先，支持英文，所有文案走 i18n 系统' : 'Chinese first, English support, all text via i18n' },
    { title: isZh ? '组件' : 'Components', desc: isZh ? '函数式组件 + hooks，禁止 class 组件' : 'Functional components + hooks, no class components' },
    { title: isZh ? '文件命名' : 'File Naming', desc: isZh ? 'kebab-case.ts / PascalCase.tsx / camelCase.ts' : 'kebab-case.ts / PascalCase.tsx / camelCase.ts' },
    { title: isZh ? '导入路径' : 'Import Paths', desc: isZh ? '使用 @ 别名：@/components, @/lib/utils, @/services' : 'Use @ aliases: @/components, @/lib/utils' },
    { title: isZh ? '状态管理' : 'State Management', desc: isZh ? 'TanStack Query (服务端) + Zustand (客户端)' : 'TanStack Query (server) + Zustand (client)' },
    { title: isZh ? '测试' : 'Testing', desc: isZh ? '前端 Vitest，后端 Jest' : 'Frontend Vitest, Backend Jest' },
    { title: isZh ? '提交规范' : 'Commit Convention', desc: isZh ? 'Conventional Commits: feat: / fix: / docs: / refactor:' : 'Conventional Commits: feat: / fix: / docs: / refactor:' },
  ];

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold">{isZh ? '代码规范' : 'Code Standards'}</h2>
        <p className="text-muted-foreground mt-1">
          {isZh
            ? 'TypeScript、i18n、组件模式、文件命名、状态管理'
            : 'TypeScript, i18n, component patterns, file naming, state management'}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {standards.map((item) => (
          <Card key={item.title}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{isZh ? '常用命令' : 'Common Commands'}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <h4 className="font-medium mb-2">{isZh ? '前端' : 'Frontend'}</h4>
              <pre className="bg-muted p-3 rounded-lg text-xs font-mono">
{`pnpm dev          # 启动开发服务器
pnpm build        # 构建生产版本
pnpm lint         # 代码检查
pnpm typecheck    # 类型检查
pnpm test         # 运行测试`}
              </pre>
            </div>
            <div>
              <h4 className="font-medium mb-2">{isZh ? '后端' : 'Backend'}</h4>
              <pre className="bg-muted p-3 rounded-lg text-xs font-mono">
{`pnpm dev:api       # 启动后端
pnpm db:migrate   # 运行迁移
pnpm db:generate  # 生成 Client
pnpm db:studio    # 打开 Prisma Studio
pnpm test         # 运行测试`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
