// Localized (zh-CN) catalog descriptions for the 25 bundled skills.
//
// The dsh skill menu renders `description` next to each skill name, so this
// map replaces the upstream English frontmatter text in the UI only. The
// SKILL.md files stay byte-identical to upstream (see THIRD_PARTY_NOTICES.md),
// and nothing here is ever fed back into skill content.
//
// Keys are the skill directory names under skills/<category>/<name>. A skill
// missing from this map falls back to its English frontmatter description, so
// a future upstream skill can never break the catalog.
//
// English technical terms are kept on purpose (skill, spec, ticket, triage,
// brief, handoff, ADR, deep module, seamless…); a Chinese gloss follows where
// the term alone would not be understood.

/** @type {Readonly<Record<string, string>>} */
export const ZH_DESCRIPTIONS = Object.freeze({
  'ask-matt': '询问哪个 skill 或流程适合你当下的处境。本仓库所有 skill 的路由入口。',
  'code-review':
    '从某个固定点（commit、branch、tag 或 merge-base）起审查改动，沿两条轴展开：Standards（代码是否遵守本仓库成文的编码规范？）与 Spec（代码是否符合发起它的 issue/spec 要求？）。两路审查并行交给 sub-agent 跑，并排汇报结果。适用于用户想审查某个 branch、某个 PR、进行中的改动，或提出「review since X」时。',
  'codebase-design':
    '设计 deep module 的共用词汇表。适用于用户想设计或改进模块接口、寻找 deepening 机会、决定 seam 划在哪里、让代码更好测或更利于 AI 导航，或其他 skill 需要这套 deep-module 词汇时。',
  'diagnosing-bugs':
    '针对难缠 bug 与性能回退的诊断循环。适用于用户说「diagnose」「debug this」，或反馈某处坏了、抛异常、失败、变慢时。',
  'domain-modeling':
    '建立并打磨项目的 domain model。适用于用户想敲定领域术语或 ubiquitous language、记录架构决策（ADR），或其他 skill 需要维护 domain model 时。',
  'grill-with-docs': '用不留情面的追问打磨方案或设计，过程中同步产出文档（ADR 与 glossary）。',
  implement: '按 spec 或一组 ticket 实施一项工作。',
  'improve-codebase-architecture':
    '扫描代码库里的 deepening 机会，以可视化 HTML 报告呈现，再针对你选中的那一项展开追问（grill）。',
  prototype:
    '做一个用完即弃的原型来回答某个设计问题。适用于用户想检验 state model 或逻辑是否顺手，或探索 UI 该长什么样时。',
  research:
    '以高可信度的一手资料调研某个问题，并把结论落成仓库里的一份 Markdown 文件。适用于用户想调研某个主题、收集文档或 API 事实，或把读资料的体力活交给 background agent 时。',
  'resolving-merge-conflicts': '当需要处理进行中的 git merge/rebase 冲突时使用。',
  'setup-matt-pocock-skills':
    '为本仓库配置这套 engineering skill：设定 issue tracker、triage 标签词汇与 domain 文档布局。在首次使用其他 engineering skill 之前跑一次。',
  tdd: 'Test-driven development（TDD）。适用于用户想先写测试再开发功能或修 bug、提到「red-green-refactor」，或需要 integration test 时。',
  'to-spec': '把当前对话整理成一份 spec 并发到项目 issue tracker——不再访谈，只汇总你们已经谈过的内容。',
  'to-tickets':
    '把一份计划、spec 或当前对话拆成一组 tracer-bullet ticket，每张都声明自己的 blocking 依赖边，并发到已配置的 tracker——本地模式下每张票一个文件、依赖边写成文本；真实 tracker 上则用原生 blocking link。',
  triage:
    '让 issue 与外部 PR 走过一套 triage 角色状态机——分类、核实、必要时追问（grill），并写出可直接交给 agent 的 brief。',
  wayfinder:
    '把一大块工作（大到一次 agent session 装不下）规划成 issue tracker 上一张共享的 decision ticket 地图，再逐张解决，直到通往目的地的路清晰为止。',
  wizard:
    '生成一个交互式 bash wizard，一步步带着人完成只有人才能做的步骤。适用于开通基础设施、配置凭证或 CI secret、走一遍不熟悉的第三方后台、执行一次性的迁移或 cutover。agent 自己能做的步骤不要调用它。',
  'grill-me': '用不留情面的追问打磨一份方案或设计。',
  grilling:
    '就一份方案、决定或想法对用户展开不留情面的追问。适用于用户想压力测试自己的思路，或用了任何「grill」触发语时。',
  handoff: '把当前对话压缩成一份 handoff 文档，供另一个 agent 接手。',
  teach: '在本工作区内教用户一项新技能或新概念。',
  'to-questionnaire': '把一个你无法独自答完的决定，转成一份交给别人填的问卷。',
  'wait-what': '停一下。上一条消息没传达清楚——重新组织后再讲一遍。',
  'writing-for-agents': '写给 agent 看的文档。适用于创建或修改 skill，或改动 AGENTS.md、CLAUDE.md 时。',
})
