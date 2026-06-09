import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleArrowOutUpRight,
  Layers3,
  Mail,
  MoveUpRight,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

const metrics = [
  { value: "42%", label: "核心流程效率提升" },
  { value: "3.6×", label: "项目咨询转化增长" },
  { value: "18 天", label: "从策略到正式上线" },
];

const capabilities = [
  { icon: Target, number: "01", title: "从业务目标出发", text: "先理解目标、用户与场景，再决定界面如何表达。让每个设计选择都有清晰依据。" },
  { icon: Layers3, number: "02", title: "建立一致的体验", text: "统一内容、视觉和交互语言，让复杂信息易于理解，也为后续扩展留下空间。" },
  { icon: Zap, number: "03", title: "设计与开发协同", text: "用可落地的方案缩短沟通链路，在细节、性能与交付速度之间取得平衡。" },
];

const process = [
  { step: "理解", detail: "梳理业务、受众与成功标准" },
  { step: "定义", detail: "建立内容结构与视觉方向" },
  { step: "创造", detail: "完成设计、开发与体验打磨" },
  { step: "交付", detail: "测试上线并持续观察结果" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="主导航">
        <a className="brand" href="#top" aria-label="澄野 Studio 首页"><span className="brand-mark">澄</span><span>澄野 Studio</span></a>
        <div className="nav-links"><a href="#about">关于项目</a><a href="#capabilities">核心能力</a><a href="#results">项目成果</a></div>
        <a className="nav-cta" href="mailto:hello@example.com">联系我们 <MoveUpRight size={15} /></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow reveal"><span className="pulse-dot" />现已开放 2026 年项目合作</div>
        <h1 className="reveal delay-1">让复杂业务，<br />成为<span>清晰体验。</span></h1>
        <p className="hero-copy reveal delay-2">我们与成长型团队并肩工作，从策略、设计到技术落地，<br className="desktop-break" />把值得相信的想法，变成值得使用的产品。</p>
        <div className="hero-actions reveal delay-3"><a className="button primary" href="#results">查看项目成果 <ArrowRight size={17} /></a><a className="button secondary" href="mailto:hello@example.com">发起合作</a></div>
        <div className="hero-visual reveal delay-3" aria-label="项目数据概览">
          <div className="visual-glow" />
          <div className="dashboard">
            <div className="dashboard-top"><div><span className="dashboard-label">业务增长概览</span><strong>体验正在创造价值</strong></div><span className="status">实时更新</span></div>
            <div className="chart"><div className="chart-grid" /><svg viewBox="0 0 760 220" role="img" aria-label="持续增长的业务曲线"><defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#a8ff78" stopOpacity=".32" /><stop offset="100%" stopColor="#a8ff78" stopOpacity="0" /></linearGradient></defs><path d="M0 190 C80 182 105 160 165 165 S275 145 330 132 S420 140 485 96 S590 96 650 57 S720 48 760 20 V220 H0Z" fill="url(#area)" /><path d="M0 190 C80 182 105 160 165 165 S275 145 330 132 S420 140 485 96 S590 96 650 57 S720 48 760 20" fill="none" stroke="#baff85" strokeWidth="4" strokeLinecap="round" /></svg><div className="chart-note"><span>+</span><strong>42%</strong><small>效率提升</small></div></div>
            <div className="mini-stats"><div><span>用户满意度</span><strong>96.4%</strong></div><div><span>交付周期</span><strong>18 天</strong></div><div><span>运行稳定性</span><strong>99.9%</strong></div></div>
          </div>
        </div>
      </section>

      <section className="statement section shell" id="about"><div className="section-tag">我们相信</div><h2>好的体验不是装饰，<br />而是业务与用户之间最短的路。</h2><p>当复杂信息被重新组织，当每一步操作都更自然，产品便不只是在工作，也开始赢得理解和信任。</p></section>

      <section className="section shell" id="capabilities">
        <div className="section-heading"><div><div className="section-tag">核心能力</div><h2>从目标到结果，保持清醒与专注。</h2></div><p>我们把策略思考、体验设计和技术实现放进同一个工作流，减少损耗，聚焦真正重要的事情。</p></div>
        <div className="capability-grid">{capabilities.map(({ icon: Icon, number, title, text }) => <article className="capability-card" key={title}><div className="card-top"><span className="card-icon"><Icon size={21} /></span><span className="card-number">{number}</span></div><h3>{title}</h3><p>{text}</p><span className="card-link">了解更多 <ChevronRight size={15} /></span></article>)}</div>
      </section>

      <section className="results-wrap" id="results"><div className="section shell"><div className="results-copy"><div className="section-tag light">项目成果</div><h2>把改变，变成可以被看见的数字。</h2><p>围绕关键业务流程重新设计体验，让效率、转化和品牌认知同步向前。</p><ul><li><Check size={16} /> 核心任务路径由 7 步缩短至 3 步</li><li><Check size={16} /> 建立可持续扩展的组件与内容规范</li><li><Check size={16} /> 面向多终端优化体验与加载性能</li></ul></div><div className="metrics">{metrics.map((metric) => <div className="metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div></div></section>

      <section className="section shell"><div className="section-heading process-heading"><div><div className="section-tag">合作方式</div><h2>清晰的过程，带来可靠的结果。</h2></div></div><div className="process">{process.map((item, index) => <div className="process-item" key={item.step}><span>0{index + 1}</span><div><h3>{item.step}</h3><p>{item.detail}</p></div></div>)}</div></section>

      <section className="contact shell"><div className="contact-orb"><Sparkles size={26} /></div><p>有一个值得认真完成的想法？</p><h2>让我们一起，把它做成。</h2><a className="button contact-button" href="mailto:hello@example.com"><Mail size={17} /> hello@example.com <CircleArrowOutUpRight size={17} /></a></section>

      <footer className="footer shell"><a className="brand" href="#top"><span className="brand-mark">澄</span><span>澄野 Studio</span></a><span>© 2026 澄野 Studio. 保留所有权利。</span><div><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.behance.net" target="_blank" rel="noreferrer">Behance</a></div></footer>
    </main>
  );
}
