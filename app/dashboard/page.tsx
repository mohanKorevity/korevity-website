import KpiCard from "./components/KpiCard";
import RevenueChart from "./components/RevenueChart";
import InsightPanel from "./components/InsightPanel";
import AutomationPanel from "./components/AutomationPanel";
import AIAssistant from "./components/AIAssistant";
import KnowledgePreview from "./components/KnowledgePreview";
import Hero from "./components/Hero";
import QuickActions from "./components/QuickActions";
import ContinueWorking from "./components/ContinueWorking";
import RecentActivity from "./components/RecentActivity";
import WorkspaceHealth from "./components/WorkspaceHealth";
export default function Dashboard() {

 return (
  <>

    {/* Hero */}

<div className="mb-12">
  <Hero />
</div>

    {/* Quick Actions */}

<div className="mb-12">
  <QuickActions />
</div>

    {/* KPI Cards */}
    <div
      className="
        grid
        gap-8
        md:grid-cols-2
        xl:grid-cols-4
      "
    >
      ...
    </div>

    {/* Revenue */}
    <div className="mt-12">
      <RevenueChart />
    </div>

    {/* AI Insights */}
    <div className="mt-12">
      <InsightPanel />
    </div>

    {/* Automation */}
    <div className="mt-12">
      <AutomationPanel />
    </div>

    {/* AI Assistant */}
    <div className="mt-12">
      <AIAssistant />
    </div>

    {/* Knowledge */}
    <div className="mt-12">
      <KnowledgePreview />
    </div>

    
    {/* Continue Working */}

<div className="mt-12">
  <ContinueWorking
    document="Mission"
    category="Business Foundation"
  />
</div>

{/* Recent Activity + Workspace Health */}

<div
  className="
    mt-12
    grid
    gap-8
    xl:grid-cols-2
  "
>
  <RecentActivity />

  <WorkspaceHealth />

</div>





  </>
);

}